import React, { useState } from 'react';
import ChatbotInput from './ChatbotInput.tsx';
import ChatbotLog from './ChatbotLog.tsx';
import CloseIcon from '../../images/CloseIcon.svg';
import { CHATBOT_MSG_TYPE, CHATBOT_WELCOME_MSG,CHATBOT_TITLE } from './Chatbot.const.tsx';
import './Chatbot.css';
//import { dummyService } from '../../services/authService.ts';
import { getChatResponseFromLangraph } from '../../services/authService.ts';


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

        addToChatlog(inputValue,CHATBOT_MSG_TYPE.QUESTION);

        const payload = JSON.parse(`{"message":"${inputValue}"}`)
        const res = await getChatResponseFromLangraph(payload)

        const responseValue = res?.data?.messages[0]?.content || 'We did not get any response from the server.Try again later.';
        
        const responseMessage = responseValue.split(']').pop()?.trim();
        addToChatlog(responseMessage,CHATBOT_MSG_TYPE.TEXT);
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
