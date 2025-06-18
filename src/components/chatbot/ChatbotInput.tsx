import React, { useState } from 'react';
import SendIcon from '../../images/Send.svg';
//import a from '../../images/chatbot/Send.svg';
import {CHATBOT_INPUT_PLACEHOLDER} from './Chatbot.const.tsx';
import './Chatbot.css';

const componentClass = 'chatbot-Input';

const ChatbotInput = ({ onButtonClick }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSendClick = () =>{
        handleSendCall();
    };
    const  handleKeyPress = (e: any) => {
        if (e.key == 'Enter') {
            handleSendCall();
            e.preventDefault();
        }
    };
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };
    const handleSendCall = () => {
        if (inputValue === '') {
            return;
        }
        onButtonClick(inputValue);
        setInputValue('');
    };

    return (
        <div className="chatbot_Input" id='chatbot_input'>
            <textarea
                id='chatText'
                name='chat Text'
                rows={4}
                cols={50}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                className="chatbot_Input_text"
                maxLength={200}
                placeholder={CHATBOT_INPUT_PLACEHOLDER}
            ></textarea>
            <img
                src={SendIcon}
                className="send_icon"
                alt='send'
                onClick={() => handleSendClick()}
                id='chatText_send'
            />
            <span className="text_length">{inputValue.length || 0}/200</span>
        </div>
    );
};

export default ChatbotInput;
