import React from "react";
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import 'react-chatbot-kit/build/main.css';

const ChatbotPopup = ({ onClose }) => {
    return (
        <div className="feedback-form homepage-main-areaa-form">
            <center>
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            </center>
        </div>
    );
};

export default ChatbotPopup;
