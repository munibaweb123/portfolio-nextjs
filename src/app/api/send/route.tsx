// import {EmailTemplate} from "../../../components/EmailTemplate";
import {NextResponse} from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    try{
        const data = await resend.emails.send({
            from:'Muniba <shonni.munni@gmail.com>',
            to:['munibavirtualuin@gmail.com'],
            subject:'Hello World',
            react:(<div>
            <p>Email Body</p></div>),
        });
        return NextResponse.json(data);
    }catch (error){
        return NextResponse.json(error)
    };
    
}