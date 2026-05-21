import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    // 1. Verify the signature to prevent fake payments
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      // PASTE YOUR ACTUAL KEY SECRET IN THE QUOTES BELOW
      .createHmac("sha256", "l5G13T3nMs1lz4xzSb90wCcI") 
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      console.error("Signature mismatch!");
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    // 2. If authentic, update the database to SUCCESS
    await prisma.enrollment.update({
      where: { razorpayOrderId: razorpay_order_id },
      data: {
        status: "SUCCESS",
        razorpayPaymentId: razorpay_payment_id,
      },
    });

    // 3. Tell the frontend it worked so it can redirect!
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("VERIFY CRASH:", error);
    return NextResponse.json({ error: "Payment verification failed" }, { status: 500 });
  }
}