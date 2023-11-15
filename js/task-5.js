function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

const newMessage = prompt("Write sentance");
console.log(checkForSpam(newMessage))