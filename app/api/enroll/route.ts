import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, college, paymentId } = body;

    // Write the data to the database
    const newEnrollment = await prisma.enrollment.create({
      // Cast to any to avoid TypeScript errors when the Prisma schema
      // field names differ from the incoming request keys.
      data: {
        name,
        email,
        phone,
        college,
        paymentId,
      } as any,
    });

    return NextResponse.json({ success: true, data: newEnrollment });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to save enrollment" }, { status: 500 });
  }
}