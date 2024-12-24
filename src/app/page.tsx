import React, { useEffect, useRef } from "react";
import Works from "./components/Works";
import Join from "./components/join";
import QueAns from "./components/QueAns";
// import HeroSection from "./components/HeroSection";
import { poppins } from "./fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { getFrameMetadata } from "@coinbase/onchainkit/core";
import { Metadata } from "next";
import {
  BASE_URL,
  defaultPreviewImageURL,
  framePreviewImageURL,
} from "@/config/constants";
import HeroSection from "./components/HeroSection";
import HomeSection from "./components/HomeSection";
import HomeSectionNew from "./components/HomeSectionNew";
import HowItWorks from "./components/HowItWorks";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import SecondComponent from "./components/SecondComponent";
import SmoothScrolling from "./components/SmoothScrolling";

export async function generateMetadata(): Promise<Metadata> {
  const name = "Chora Club";
  const defaultPreview = defaultPreviewImageURL;
  const framePreview = framePreviewImageURL;
  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: "Subscribe to Newsletter",
        action: "post",
        target: `${BASE_URL}/api/frame/show-input`,
      },
    ],
    image: {
      src: `${BASE_URL}/subscribeEmail.png`,
    },
    postUrl: `${BASE_URL}/api/frame/show-input`,
  });

  return {
    title: name,
    description: "Discover. Learn. Engage.",
    openGraph: {
      title: "Chora Club",
      description: "Discover. Learn. Engage.",
      url: "https://app.chora.club/",
      siteName: "Chora Club",
      images: [
        {
          url: defaultPreview,
          width: 800,
          height: 600,
          alt: "img",
        },
        {
          url: defaultPreview,
          width: 1800,
          height: 1600,
          alt: "img",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    other: {
      ...frameMetadata,
      "fc:frame:image:aspect_ratio": "1.91:1",
    },
  };
}

const page = () => {
  
  return (
    <div className={poppins.className}>
        
      <HomeSectionNew/>
        {/* <HowItWorks />
        <Feature />
        <FAQ />  */}
    </div>
  );
};

export default page;
