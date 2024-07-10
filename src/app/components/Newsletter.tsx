"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/footer.module.css";
import { Toaster, toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setIsDisabled(email.trim() === "");
  }, [email]);

  const handleSubscribe = async (event: any) => {
    console.log("btn clicked");
    event.preventDefault(); // Prevent form submission

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true); // Set loading to true when request starts

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
      });

      const requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = await fetch("/api/subscribe", requestOptions);
      const result = await response.json();
      console.log("response", response);
      console.log("result", result);
      // Check the response status
      if (result.success) {
        setEmail("");
        toast.success("🎉 Thank you for subscribing to our newsletter! ");
        setTimeout(() => setIsSubscribed(true), 1000);
      } else if (response.status === 400) {
        setEmail("");
        toast("You’re already subscribed to our newsletter 📬.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      setIsSubscribed(false);
    }
  };

  const handleScrollToTop = () => {
    console.log("clicking");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.section2}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <p>Subscribe Newsletter</p>
      <div className={styles.inputsection}>
        <div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className={styles.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className={styles.subscribe}
            disabled={isDisabled || isLoading}
          >
            {isLoading ? <BeatLoader size={10} color="black" /> : "Subscribe"}
          </button>
        </div>

        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleScrollToTop}
          className={styles.upbutton}
        >
          <rect
            x="0.5"
            y="0.5"
            width="43"
            height="43"
            rx="21.5"
            stroke="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.9991 13.9395L28.5294 20.4698L27.4688 21.5304L22.7491 16.8108L22.7491 29.0001H21.2491L21.2491 16.8108L16.5294 21.5304L15.4688 20.4698L21.9991 13.9395Z"
            fill="#ECEEEC"
          />
        </svg>
      </div>
    </div>
  );
}

export default Newsletter;
