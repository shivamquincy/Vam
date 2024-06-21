"use client";
import React from 'react';
import Button from './Button';
import Sheading from './sheading';
import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion';
import {sendEmail} from "../actions/sendEmail"
import toast from "react-hot-toast";


export default function Contact() {
  const { ref } = useSectionInView("Contact");
 
  return (
    <motion.section
      ref={ref}
      id="contact"
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Sheading name="Contact Me" />
      <p className='text-gray-700 -mt-3 dark:text-white/80'>
        Please contact me directly at <a className="underline" href="mailto:singh.shvam26@gmail.com">
          singh.shvam26@gmail.com
        </a> or through this form.
      </p>

      <form className='mt-10 flex flex-col dark:text-black' action={async(formData) => {
        const { data, error } =  await sendEmail(formData);
        if(error) {
      toast.error(error)
      return;
        }
        toast.success("Got your Mail!")
      
      }}>
        <input
          placeholder="Your email"
          name='senderEmail'
          className="h-14 p-4 rounded-lg border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 border-gray-300 focus:outline-none focus:border-black"
          type='email'
          required
          maxLength={200}
        />
        <textarea
          required
          name='message'
          maxLength={500}
          placeholder="Your message goes here..."
          className='h-52 my-3 rounded-lg  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100  border-gray-300 p-4 focus:outline-none focus:border-black'
        />
       <Button />
      </form>
    </motion.section>
  );
}
