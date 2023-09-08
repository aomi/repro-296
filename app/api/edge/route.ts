import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

export const runtime = 'edge' // 'nodejs' is the default

const openai = new OpenAI();

export const GET = async (request: NextRequest) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        content: "Write me a haiku about V8 isolates.",
        role: "user",
      },
    ],
  });

  return NextResponse.json(completion);
};
