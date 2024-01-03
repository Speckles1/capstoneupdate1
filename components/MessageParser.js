import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('Hello')) {
      actions.handleHello();
    }if (message.includes('hi')) {
      actions.handleHello();
    }if (message.includes('hello')) {
      actions.handleHello();
    }if (message.includes('Hi')) {
      actions.handleHello();
    }
    if (message.includes('Can you speak tagalog')) {
      actions.tagalog();
    }if (message.includes('can you speak tagalog')) {
      actions.tagalog();
    }
    if (message.includes('Who made the website')) {
      actions.website();
    }if (message.includes('who made the website')) {
      actions.website();
    
    }if (message.includes('when did harrystoysph start')) {
      actions.when();
    }if (message.includes('When did harrystoysph start')) {
      actions.when();
    }
    if (message.includes('How did harrystoysph start')) {
      actions.how();
    }if (message.includes('how did harrystoysph start')) {
      actions.how();
    }
    if (message.includes('What is harrystoysph')) {
      actions.what();
    }if (message.includes('what is harrystoysph')) {
      actions.what();
    }
    if (message.includes('What Funko Pop Categories do you have')) {
      actions.categories();
    }if (message.includes('what funko pop categories do you have')) {
      actions.categories();
    }
    if (message.includes('what is the cheapest item that i can buy')) {
      actions.cheapest();
    }if (message.includes('What is the cheapest item that i can buy')) {
      actions.cheapest();
    }if (message.includes('What is the cheapest')) {
      actions.cheapest();
    }if (message.includes('what is the cheapest')) {
      actions.cheapest();
    }
    if (message.includes('What is the most expensive item that i can buy')) {
      actions.expensive();
    }if (message.includes('what is the most expensive item that i can buy')) {
      actions.expensive();
    }
  };

  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;