import React from 'react';

// Define an interface for the props
interface SheadingProps {
  name: string; // Specify that name is a string
}

// Use the interface in your component
export default function Sheading({ name }: SheadingProps) {
  return (
    <div>
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{name}</h2>
    </div>
  );
}
