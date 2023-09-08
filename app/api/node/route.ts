import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

// export const runtime = 'edge' // 'nodejs' is the default

export const dynamic = "force-dynamic";

const openai = new OpenAI();

export const GET = async (request: NextRequest) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        content: "Write me a haiku about Node.js",
        role: "user",
      },
    ],
  });

  return NextResponse.json(completion);
};
