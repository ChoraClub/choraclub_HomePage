import { connectDB } from "@/config/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// MongoDB collection name
const collectionName: string | any = process.env.COLLECTION;

export async function POST(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  try {
    console.log("request from unsubscribe", request);
    const email = decodeURIComponent(params.email);

    // Connect to MongoDB
    const client = await connectDB();

    // Get the database and collection
    const database = client.db();
    const collection = database.collection(collectionName);

    // Find the subscriber and update their subscription status
    const result = await collection.updateOne(
      { email },
      {
        $set: {
          subscribed: false,
          unsubscribedAt: new Date(),
        },
      }
    );

    // Close the MongoDB connection
    client.close();

    if (result.matchedCount === 0) {
      // No document was found with the given email
      return NextResponse.json(
        { success: false, data: "Email not found" },
        { status: 404 }
      );
    }

    if (result.modifiedCount === 0) {
      // Document was found but not modified (possibly already unsubscribed)
      return NextResponse.json(
        { success: false, data: "Already unsubscribed" },
        { status: 400 }
      );
    }

    // Return a success response
    return NextResponse.json(
      { success: true, data: "Unsubscribed successfully" },
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
