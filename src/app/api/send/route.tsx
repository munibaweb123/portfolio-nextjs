import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();
    
    console.log("Received email request:", { email, subject, message });

    const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev", // ✅ Resend's test domain
        to: ["shonni.munni@gmail.com"], 
        subject: subject || "No Subject",
        html: `<div><h1>${subject}</h1><p>${message}</p></div>`,
      });
      

    console.log("Resend API response:", { data, error });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
