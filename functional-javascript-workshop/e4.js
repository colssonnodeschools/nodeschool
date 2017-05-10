function getShortMessages(messages) {
  return messages.map(({ message }) => message)
  .filter(message => message.length < 50);
}

module.exports = getShortMessages;
