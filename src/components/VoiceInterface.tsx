'use client';

import { useState, useRef } from 'react';

export default function VoiceInterface() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        setIsProcessing(true);
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processAudio(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Microphone access denied', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudio = async (blob: Blob) => {
    const formData = new FormData();
    formData.append('audio', blob, 'citizen_recording.webm');

    try {
      const response = await fetch('/api/stt', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.text) {
        setTranscript(data.text);
      }
    } catch (error) {
      console.error('Failed to process audio:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gray-50 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Citizen Voice Input</h2>
      <button
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        onTouchStart={startRecording}
        onTouchEnd={stopRecording}
        className={`px-6 py-3 rounded-full text-white font-semibold transition-colors ${
          isRecording ? 'bg-red-600 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isRecording ? 'Recording... (Release to Stop)' : 'Hold to Speak'}
      </button>

      <div className="mt-6 w-full min-h-[100px] p-4 bg-white border rounded shadow-inner">
        <p className="text-sm text-gray-500 mb-2">Live Transcript:</p>
        {isProcessing ? (
          <p className="text-gray-400 italic">Processing audio...</p>
        ) : (
          <p className="text-gray-800">{transcript || 'Awaiting input...'}</p>
        )}
      </div>
    </div>
  );
}
