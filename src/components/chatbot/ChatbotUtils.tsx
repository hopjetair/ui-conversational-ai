import React from 'react';
import ChatbotIcon from '../../images/flyBotWithoutText.png';
//import ChatbotIcon from '../../images/flybot_logo_placeholder.svg';
import './ChatbotBubble.css';

export const ChabotIcon = () => (
    <img src={ChatbotIcon} className="chat_text_icon" alt='send' />
);

export const copyToClipboardWithFormatting = async (text: string, html: string) => {
    try {
        const htmlBlob = new Blob([html], { type: 'text/html' });
        const textBlob = new Blob([text], { type: 'text/plain' });
        const data = [new ClipboardItem({ 'text/plain': textBlob, 'text/html': htmlBlob })];
        await navigator.clipboard.write(data);
    } catch (error) {
        //revert to unformatted copy...
        navigator.clipboard.writeText(text);
    }
};