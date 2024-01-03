import { createChatBotMessage } from 'react-chatbot-kit';


const botName = 'Spiderbot!';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}, I can only answer questions with the data given to me by my creator which is about our website, feel free to ask! `)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'red',
    },
    chatButton: {
      backgroundColor: 'black',
    },
    state: {
      myCustomProperty: 'Bikershorts',
    },
  },
};

export default config;