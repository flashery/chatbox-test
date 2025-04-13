'use client';
import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, placeholder = 'Typing' }) => {
  return (
    <div className="flex-grow h-10">
      <input
        type="text"
        className="flex-grow outline-none text-sm text-gray-700 w-full h-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MessageInput;