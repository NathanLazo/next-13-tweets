import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  prisma.$connect();

  const { tweet, authorName, username } = await request.json();

  try {
    await prisma.message.create({
      data: {
        authorName: authorName,
        content: tweet,
        username: username,
      },
    });
  } catch (error) {
    console.error(error);
  }

  await prisma.$disconnect();

  return NextResponse.json({ status: 200 });
}
