const messages = [
  "Hello Im JiJay A.I! How can I help you today?",
  "Hi there! What can I assist you with?",
  "Hey! How can I be of service?",
];

const getAutoResponse = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

module.exports = getAutoResponse;
