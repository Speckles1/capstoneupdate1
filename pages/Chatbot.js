import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from '@/components/Config';
import MessageParser from '@/components/MessageParser';
import ActionProvider from '@/components/ActionProvider';
import styled from 'styled-components';

const StyledDiv = styled.div`
    max-width: 300px;
    margin: auto;
    margin-top: 60px;
`;

export default function Chat() {
    return (     
       
        <StyledDiv>
            
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </StyledDiv>
       
    );
}