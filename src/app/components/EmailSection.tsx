"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github_icon.svg";
import Linkedin from "../../../public/linkedin_icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target as HTMLFormElement;

    // Extract form values correctly
    const data = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    console.log("Sending email:", data); // Debugging log

    try {
      const response = await fetch("http://localhost:3000/api/send", { // Ensure correct API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const resData = await response.json();
      console.log("Response data:", resData);

      if (response.status === 200) {
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#121212] grid grid-cols-1 px-10 py-10 md:grid-cols-2 my-12 gap-4 relative"
    >
      {/* Background Effect */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      {/* Left Section */}
      <div className="flex-1 justify-center items-center">
        <h5 className="text-orange-400 text-4xl px-4 my-2 font-bold">
          Let&rsquo;s Connect
        </h5>
        <p className="text-pink-400 mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you.
        </p>
        <div className="socials flex flex-row gap-2">
          <div className="rounded bg-orange-400">
            <Link href="https://github.com/munibaweb123">
              <Image src={GithubIcon} alt="Github icon" height={50} width={50} />
            </Link>
          </div>
          <div className="rounded bg-orange-400">
            <Link href="https://www.linkedin.com/in/muniba-ahmed-4936391a4">
              <Image src={Linkedin} alt="LinkedIn icon" height={50} width={50} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="text-pink-400 block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              className="bg-[#121212] border border-pink-400 placeholder-orange-400 text-pink-400 rounded-lg block w-full p-2.5"
              id="email" // FIXED ID
              required
              placeholder="example@example.com"
            />
          </div>

          {/* Subject Input */}
          <div className="mb-6">
            <label htmlFor="subject" className="text-pink-400 block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              className="bg-[#121212] border border-pink-400 placeholder-orange-400 text-pink-400 rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="text-pink-400 block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#121212] border border-pink-400 placeholder-orange-400 text-pink-400 rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-300 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>

          {/* Success Message */}
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
