'use client';
import React, { useRef } from 'react';

import {
    StickyNote,
    Sparkle,
    Sparkles,
    Paperclip,
    Smile,
    AtSign,
    EditIcon,
} from 'lucide-react';


interface MessageToolsProps {
    addDocument: (e: React.ChangeEvent<HTMLInputElement>) => void;
    aiClick: () => void;
    attachFile: () => void;
    addEmote: () => void;
    addMention: () => void;
    editMessage: () => void;
}

const MessageTools: React.FC<MessageToolsProps> = ({ addDocument, aiClick, attachFile, addEmote, addMention, editMessage }) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUploadClick = () => {
        fileInputRef.current?.click();
    };


    return (
        <div className="flex gap-4 text-gray-500 py-2">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={addDocument}
            />

            <button onClick={handleFileUploadClick} type="button">
                <StickyNote className="w-5 h-5 rotate-90 text-gray-600 cursor-pointer" />
            </button>
            <button onClick={aiClick} type="button">
                <Sparkle className="w-5 h-5 text-gray-600 cursor-pointer" style={{ fill: 'currentColor' }} />
            </button>
            <button onClick={attachFile} type="button">
                <Paperclip className="w-5 h-5 -scale-x-100 rotate-45 text-gray-600 cursor-pointer" />
            </button>
            <button onClick={addEmote} type="button">
                <Smile className="w-5 h-5 text-gray-600 cursor-pointer" />
            </button>
            <button onClick={addMention} type="button">
                <AtSign className="w-5 h-5 text-gray-600 cursor-pointer" />
            </button>
            <button onClick={editMessage} type="button">
                <EditIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
            </button>

            <div className="h-5 w-px bg-gray-200"></div>

            <Sparkles className="w-5 h-5" style={{ fill: 'currentColor' }} />
            Quick reply with AI
        </div>
    );
};

export default MessageTools;