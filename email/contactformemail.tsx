import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components"
import { Tailwind } from '@react-email/components'

type ContactFormEmailProps = {
  message: String,
  senderEmail: String
}
export default function ContactFormEmail({
  message,
  senderEmail
}: ContactFormEmailProps) {
  return <Html>
   <Head />
   <Preview>New Message from Portfolio Website</Preview>
   <Tailwind>
    <Body className='bg-gray-100'>
      <Container>
        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
          <Heading className='leading-tight'>
            You received the following message from contact form
          </Heading>
          <Text >{message}</Text>
          <Hr />
          <Text>The sender's email is: {senderEmail}</Text>
        </Section>
      </Container>
    </Body>
   </Tailwind>
  </Html>
}
