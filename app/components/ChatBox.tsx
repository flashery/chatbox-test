'use client';

import { useState } from 'react';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import MessageInput from './MessageInput';
import MessageTools from './MessageTools';

export default function ChatBox() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending:', message);
      setMessage('');
    }
  };

  const handleAddDocument = (documents: FileList | null) => {
    console.log('Adding document...', documents);
  };

  const handleAiClick = () => {
    console.log('AI');
  };

  const handleAttachFile = () => {
    console.log('Attach file');
  };

  return (
    <div className="w-[772px] max-w-full mx-auto px-4  space-y-4">
      <div className="bg-blue-100 p-4 rounded-[12px] space-y-8">
        <p className="text-sm text-gray-800 font-bold">Vanilla AI <span className="text-gray-400 font-normal">Suggested</span></p>
        <p className="text-gray-700 mt-1">
          Oh no! Sad to hear that, but of course we can give a refund. Can you please provide your order number if you have one? Or email that you’ve used to make this purchase.
        </p>
        <a href="#" className="underline text-sm text-gray-800 font-bold mt-2">Reply with this message</a>
      </div>

      <div className="flex flex-col border rounded-full px-4 py-2 border rounded-lg shadow bg-white">

        <MessageInput value={message} onChange={(e) => setMessage(e.target.value)} />

        <div className="grid grid-cols-[4fr_1fr]">
          <MessageTools
            addDocument={e=>handleAddDocument(e.target.files)}
            aiClick={handleAiClick}
            attachFile={handleAttachFile}
            addEmote={() => console.log('add emote')}
            addMention={() => console.log('add mention')}
            editMessage={() => console.log('edit message')}
          />
          <div className="flex justify-end">
            <button
              className="ml-2 bg-gray-100 p-2 rounded-[12px] text-gray-600 cursor-pointer"
              onClick={handleSend}
            >
              <PaperAirplaneIcon className="w-5 h-5 text-gray-600 rotate-315" style={{ fill: 'currentColor' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
