import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const razorpay = new Razorpay({
  key_id: "rzp_test_SrxQwDGs6IxPwU",       // PASTE YOUR KEY ID HERE
  key_secret: "l5G13T3nMs1lz4xzSb90wCcI",         // PASTE YOUR KEY SECRET HERE
});

export async function POST(req: Request) {
  console.log("1. Backend received request to create order...");
  try {
    const { courseId, amount, name, email, phone } = await req.json();

    console.log(`2. Finding/Creating user: ${email}`);
    const user = await prisma.user.upsert({
      where: { email },
      update: { name, phone },
      create: { name, email, phone },
    });

    console.log(`3. Telling Razorpay to create a ₹${amount} order...`);
    const orderOptions = {
      amount: amount * 100, 
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };
    const order = await razorpay.orders.create(orderOptions);

    console.log(`4. Order created successfully! ID: ${order.id}`);
    await prisma.enrollment.create({
      data: {
        userId: user.id,
        courseId: courseId,
        amount: amount,
        razorpayOrderId: order.id,
      },
    });

    console.log("5. Sending order ID back to frontend to trigger popup!");
    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    console.error("BACKEND CRASHED:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}