import React from 'react';
import './ChatbotBubble.css';

const ChatbotBubble = ({...props }) => {
    return (
        <div className="chatbot_Bubble" {...props}>
            <div className="chatbot_Bubble_content">{props.children}</div>
        </div>
    );
};

export default ChatbotBubble;
