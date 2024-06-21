import React from 'react';

import { useFormStatus } from "react-dom"; //
import { FaPaperPlane } from 'react-icons/fa';

export default function Button() {
    const { pending } = useFormStatus(); // Assuming useFormStatus is correctly implemented
    return (
        <button
            type="submit"
            className='group flex items-center justify-center gap-3 h-[3rem] w-[8rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-white active:scale-105 bg-gray-900 text-white rounded-full outline-none transition-all disabled:bg-opacity-65 '
            disabled={pending}
        >
            {
                pending? (
                    <div className='h-7 w-7 animate-spin rounded-full border-t-2 border-white'></div> // Increased size for visibility
                ) : (
                    <>
                        Submit
                        <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </>
                )
            }
        </button>
    );
}
