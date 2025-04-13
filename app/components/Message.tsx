
import React from 'react'
import { RefreshCcw } from "lucide-react";

const Message: React.FC = () => {
    return (
        <div className="bg-blue-100 p-4 rounded-[12px] space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-800 mb-2">
                <div>
                    <span className="font-bold">Vanilla AI</span>
                    <span className="text-gray-400 ml-1">Suggested</span>
                </div>
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:underline">
                    <RefreshCcw size={16} />
                    Regenerate
                </button>
            </div>
            <p className="text-gray-700 mt-1">
                Oh no! Sad to hear that, but of course we can give a refund. Can you please provide your order number if you have one? Or email that you’ve used to make this purchase.
            </p>
            <a href="#" className="underline text-sm text-gray-800 font-bold mt-2">Reply with this message</a>
        </div>
    )
}

export default Message