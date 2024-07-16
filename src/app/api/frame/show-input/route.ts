import { NextRequest, NextResponse } from "next/server";
import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit/frame";
import { getFrameHtmlResponse } from "@coinbase/onchainkit/frame";
import {
  BASE_URL,
  defaultPreviewImageURL,
  framePreviewImageURL,
} from "@/config/constants";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Submit`,
          action: "post",
          target: `${BASE_URL}/api/frame/submit-email`,
        },
      ],
      image: {
        src: `${BASE_URL}/subscribeEmail.png`,
      },
      input: {
        text: "Your Email",
      },
      postUrl: `${BASE_URL}/api/frame/submit-email`,
    })
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
