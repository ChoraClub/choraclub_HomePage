import { BASE_URL } from "@/config/constants";
import { FrameRequest, getFrameHtmlResponse } from "@coinbase/onchainkit/frame";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse | any> {
  const body: FrameRequest = await req.json();
  console.log("body:::", body);
  const { untrustedData } = body;

  const isValidEmail = untrustedData.inputText.match(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );

  if (!untrustedData.inputText || !isValidEmail) {
    const searchParams = new URLSearchParams({
      title: "Valid Email Required",
    });

    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: "Try Again",
          },
        ],
        image: {
          src: `${BASE_URL}/invalidEmail.png`,
        },
        input: {
          text: "Your Email",
        },
        postUrl: `${BASE_URL}/api/frame/submit-email`,
      })
    );
  }

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: untrustedData.inputText,
    });

    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(`${BASE_URL}/api/subscribe`, requestOptions);
    const result = await response.json();
    console.log("response", response);
    console.log("result", result);

    if (result.success) {
      const searchParams = new URLSearchParams({
        title: "Signup Successful",
        description: untrustedData.inputText,
      });

      return new NextResponse(
        getFrameHtmlResponse({
          image: {
            src: `${BASE_URL}/subscribedSuccessful.png`,
          },
        })
      );
    } else if (response.status === 400) {
      const searchParams = new URLSearchParams({
        title: "You are already a subscriber",
      });

      return new NextResponse(
        getFrameHtmlResponse({
          image: {
            src: `${BASE_URL}/alreadySubscribed.png`,
          },
        })
      );
    } else {
      const searchParams = new URLSearchParams({
        title: "Some Internal Error, Please try again.",
      });
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: "Try Again",
            },
          ],
          image: {
            src: `${BASE_URL}/api/frame/og?${searchParams}`,
          },
          input: {
            text: "Your Email",
          },
          postUrl: `${BASE_URL}/api/frame/submit-email`,
        })
      );
    }
  } catch (error) {
    console.log("error", error);
    const searchParams = new URLSearchParams({
      title: "Some Internal Error, Please try again.",
    });
    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: "Try Again",
          },
        ],
        image: {
          src: `${BASE_URL}/api/frame/og?${searchParams}`,
        },
        input: {
          text: "Your Email",
        },
        postUrl: `${BASE_URL}/api/frame/submit-email`,
      })
    );
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
