import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

export const dynamic = "force-dynamic";

const openai = new OpenAI();

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        content: "Write me a haiku about Node.js",
        role: "user",
      },
    ],
  });

  return res.json(completion);
};

export default handler;