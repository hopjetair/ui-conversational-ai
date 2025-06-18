import React, { useState } from 'react';
import ChatbotPanel from './ChatbotPanel.tsx';
import ChatbotIcon from './../../images/flyBot.png';

export default function ChatbotContainer() {
    const intialShowChatbotWindow = sessionStorage.getItem('showChatbotWindow') === 'true';
    const [showChatbotWindow, setShowChatbotWindow] = useState(intialShowChatbotWindow);

    const toggleChatbotWindow = () => {
        const toggleShowChatbotWindow = !showChatbotWindow;
        sessionStorage.setItem('showChatbotWindow',toggleShowChatbotWindow.toString());
        setShowChatbotWindow(toggleShowChatbotWindow);
        sessionStorage.removeItem('designerAssistantChatLog');
    };

    return (
        <div>
            {!showChatbotWindow &&
                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'top',
                        //width: '43px',
                        //height: '39px',
                        position: 'absolute',
                        right: '25px',
                        bottom: '100px',
                    }}
                >
                    <div style={{
                        width: '150px',
                        height:'auto',
                        
                    }}>
                    <img
                        src={ChatbotIcon}
                        style={{width:'100%', height: 'auto',display: 'block'}}
                        onClick={() => toggleChatbotWindow()}
                        alt='Chatbot'
                        id='designerAssistantIcon'
                    />
                    </div>
                </div>
            }
            {showChatbotWindow &&
                <ChatbotPanel clickCloseIcon={toggleChatbotWindow} />
            }

        </div>
    );
}
