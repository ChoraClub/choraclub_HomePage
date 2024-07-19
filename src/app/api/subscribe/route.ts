import { sendMail, compileNewsletterTemplate } from "@/libs/mail";
import { connectDB } from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";

const collectionName: string | any = process.env.COLLECTION;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    const client = await connectDB();

    const database = client.db();
    const collection = database.collection(collectionName);

    const existingSubscriber = await collection.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.subscribed) {
        client.close();
        return NextResponse.json(
          { success: false, data: "Email already subscribed" },
          { status: 400 }
        );
      } else {
        await collection.updateOne(
          { email },
          {
            $set: {
              subscribed: true,
              subscribedAt: new Date(),
            },
          }
        );
      }
    } else {
      await collection.insertOne({
        email,
        subscribed: true,
        subscribedAt: new Date(),
      });
    }

    try {
      await sendMail({
        to: email,
        name: "Chora Club",
        subject: "Chora Club Newsletter",
        body: compileNewsletterTemplate(),
      });
    } catch (error) {
      console.log("Error sending mail", error);
    }

    client.close();

    return NextResponse.json(
      { success: true, data: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
