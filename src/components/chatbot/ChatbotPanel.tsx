import React, { useState } from 'react';
import ChatbotInput from './ChatbotInput.tsx';
import ChatbotLog from './ChatbotLog.tsx';
import CloseIcon from '../../images/CloseIcon.svg';
import { CHATBOT_MSG_TYPE, CHATBOT_WELCOME_MSG,CHATBOT_TITLE } from './Chatbot.const.tsx';
//import styles from './Chatbot.less';
import './Chatbot.css';
import { dummyService } from '../../services/authService.ts';

const ChatbotPanel = ({ clickCloseIcon }) => {

    const intialChatLog = sessionStorage.getItem('designerAssistantChatLog');
    const intialChatlogArray = intialChatLog ? JSON.parse(intialChatLog) : [{ obj: [{ response: [`${CHATBOT_WELCOME_MSG}`], type: CHATBOT_MSG_TYPE.TEXT }] }];

    const [chatlog, setChatlog] = useState<any[]>(intialChatlogArray);
    const [inputValue, setInputValue] = useState('');
    
    const addToChatlog = (inputValue,type) => {
        setChatlog(oldChatlog=>{
            // if(type === CHATBOT_MSG_TYPE.TEXT){
            //     oldChatlog.pop();
            // };
            const updatedChatlogValue = [...oldChatlog,{
            obj: [
                {
                    response: [`${inputValue}`],
                    type
                },
            ],
            }]
            if(updatedChatlogValue.length >= 20) {
                updatedChatlogValue.shift();
                updatedChatlogValue.shift();
            }
            sessionStorage.setItem('designerAssistantChatLog', JSON.stringify(updatedChatlogValue));
            return updatedChatlogValue;
        });
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function handleDataFromInput(inputValue) {
        setInputValue(inputValue);
        const payload = JSON.parse(`{"input": {"question": "${inputValue}"}}`);
        addToChatlog(inputValue,CHATBOT_MSG_TYPE.QUESTION);
        //addToChatlog('',CHATBOT_MSG_TYPE.LOADING);
        // const res = await new Promise(resolve => 
        //     setTimeout(() => resolve({ content: 'This is a mock response from the chatbot API.' }), 1000) // 1-second delay
        //   );
        //   const res = await new Promise(resolve => 
        //     setTimeout(() => resolve({ content: 'This is a mock response from the chatbot API.' }), 1000) // 1-second delay
        //   );
        const res = await dummyService()
        //addToChatlog(res?.content,CHATBOT_MSG_TYPE.TEXT);
        addToChatlog(res?.data?.title,CHATBOT_MSG_TYPE.TEXT);
    }

    return (
        <div
            className='chatbot-View'
            style={{
                display: 'inline-block',
                height: '39px',
                position: 'absolute',
                right: '25px',
                bottom: '25px',
                zIndex: 4001,
                backgroundColor: 'yellow',
            }}
        >
            <div className="chatbotPanel">
                <div className="chatbotPanel_header">
                    <div className="chatbotPanel_header_title">
                        <div>
                            <span aria-label='open' className="chatbot_Title_title">
                                {CHATBOT_TITLE}
                            </span>
                            <span
                                aria-label='close'
                                className="chatbot_title_close"
                                onClick={clickCloseIcon}
                            >
                                <img
                                    src={CloseIcon}
                                    style={{ height: '15px', width: '15px' }}
                                    alt='close'
                                    id='chatbot_close'
                                />
                            </span>
                        </div>
                            <ChatbotLog chatlog={chatlog} />

                            <div className="chatbot_Panel_footer">
                                <div className="chatbot_Panel_input">
                                    <ChatbotInput onButtonClick={handleDataFromInput} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPanel;
