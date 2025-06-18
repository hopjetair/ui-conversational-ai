import React from 'react';
import './ChatbotLoading.css';

const ChatbotLoading = () => {
    return (
        <div className="chatbot_Loading" style={{marginTop: '8px',marginLeft: '5px'}}>
            <div className="chatbot_Loading_dot" />
            <div className="chatbot_Loading_dot" />
            <div className="chatbot_Loading_dot" />
        </div>
    );
};

export default ChatbotLoading;
