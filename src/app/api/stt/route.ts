import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;

    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    const response = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: 'hi', // Optional: Enforce Hindi/Marathi context if heavily regional
    });

    return NextResponse.json({ text: response.text }, { status: 200 });
  } catch (error: any) {
    console.error('STT Error:', error);
    return NextResponse.json({ error: error.message || 'STT processing failed' }, { status: 500 });
  }
}
