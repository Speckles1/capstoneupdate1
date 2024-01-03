import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello there. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const tagalog = () => {
    const botMessage = createChatBotMessage('Kaya kong mag tagalog kaibigan! kamusta? Ano maitutulong ko sayo ngayon?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const website = () => {
    const botMessage = createChatBotMessage('The website is a proposed Capstone system to HarrysToysPH and were made by Hugh Rivera and Khalil Cabatana');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const when = () => {
    const botMessage = createChatBotMessage('HarrysToysPH started in early 2022');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const how = () => {
    const botMessage = createChatBotMessage('Based from Harry Rivera, the owner of HarrysToysPH, He started from being a collector and He tried to sell a funko pop which is Colonel Sanders of KFC and gained profit from it, and he eventually started his own business. ');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const what = () => {
    const botMessage = createChatBotMessage('HarrysToysPH is a e-commerce type of business, specifically in the realm of collectibles and pop culture merhcandise');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const categories = () => {
    const botMessage = createChatBotMessage('We have a range of categories that you can check in our website but to mention since Im a spider like spiderman we have Marvel categories and Heroes categories ;)');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const cheapest = () => {
    const botMessage = createChatBotMessage('The cheapest funko pop that you can buy is the Avengers Hulk 68! for only 500 pesos you can have it');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const expensive = () => {
    const botMessage = createChatBotMessage('The Most Expensive item that you can buy from us is from the chase editions which is the 1104 Fully-Hollowfied Ichigo from Bleach for 5,000 pesos!');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            tagalog,
            website,
            when,
            how,
            what,
            categories,
            cheapest,
            expensive
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;