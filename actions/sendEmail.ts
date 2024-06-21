"use server";
import { Resend } from "resend";
import React from "react";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../email/contactformemail";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);

export const sendEmail = async (formData: FormData) => {
    const mail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(mail, 200)) {
        return { error: "Invalid sender email" };
    }

    try {
        const result = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: 'singh.shvam26@gmail.com',
            subject: 'message',
            reply_to: mail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: mail as string
            })
        });

        // Assuming the API call successfully sends the email and returns data
        return { data: result }; // Adjust this line based on the actual structure of the response
    } catch (error: any) {
        return { error: getErrorMessage(error) };
    }
};

// Example usage
async function handleSubmit(formData: FormData) {
    const response = await sendEmail(formData);
    if (response.error) {
        alert(response.error);
        return;
    }
    // Handle successful response
    console.log(response.data);
}
