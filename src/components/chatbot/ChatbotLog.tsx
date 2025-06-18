import FocusContainer from './FocusContainer.tsx';
import React from 'react';
import ChatbotBubble from './ChatbotBubble.tsx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChabotIcon } from './ChatbotUtils.tsx';
import ChatbotLoading from './ChatbotLoading.tsx';
import './ChatbotLog.css';

const DesignerAssistantMessage = ({ message }) => {
    if (!message.response?.length) return null;
    return (
        <>
            {message.type !== 'question' && <ChabotIcon />}
            {message.type === 'loading' && <ChatbotLoading/>}
            
            {message.type !== 'loading' && <MarkDownChatbotBubble message={message} />}
        </>
    );
};

const MarkDownChatbotBubble = ({ message}) => {
    return (
        <ChatbotBubble >
            {message.response.map((r, index) => {
                const text =  r !== 'undefined' ? r : 'We did not get any response from the server.Try again later.';
                const ftext = text.replaceAll('\n', '\n\n');
                return (
                    <div className="chatbot_Input_text">
                    <ReactMarkdown
                        
                        key={'text-' + index}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            a: (props) => {
                                return (
                                    <a target='_self' rel='noreferrer' 
                                    href={props.href} 
                                    className="chatbot_Input_link">
                                        {props.children}
                                    </a>
                                );
                            },
                        }}
                    > 
                        {ftext}
                        
                    </ReactMarkdown>
                    </div>
                );
            })}
        </ChatbotBubble>
    );
};

const ResponseGroup = ({ responses}) => (
    <FocusContainer block='start' behavior='auto' className="chatbot_Log_responseGroup">
        <ul>
            {responses.map((response, i) => (
                <li
                    key={i}
                    className={
                        response.type == 'question'
                            ? "chatbot_Log_questinon"
                            : "chatbot_Log_response"
                    }
                >
                    <>
                        <DesignerAssistantMessage message={response} />
                    </>
                </li>
            ))}
        </ul>
    </FocusContainer>
);

const ChatbotLog = ({ chatlog, ...props }) => {
    return (
        <div className="chatbot_Log" {...props}>
            {chatlog?.map((log, i) => {
                const responses = log.obj;
                if (!responses?.length) return null;

                return (
                    <ResponseGroup
                        key={i}
                        responses={responses}
                    />
                );
            })}
        </div>
    );
};

export default ChatbotLog;
