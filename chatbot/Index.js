// var newdiv = docume// Get references to HTML elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to add a user message to the chat log
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
}

// Function to add a bot message to the chat log
function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', 'bot-message');
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        addUserMessage(userMessage);
        // Simulate a bot response (you can replace this with actual chatbot logic)
        setTimeout(() => {
            addBotMessage('I received your message: ' + userMessage);
        }, 500);
        userInput.value = '';
    }
}

// Event listener for the send button
sendButton.addEventListener('click', handleUserInput);

// Event listener for the enter key in the input field
userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Initial focus on the input field
userInput.focus();

