// DOM Elements
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');

// Function to send a message
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Add user message to chat window
  addMessage(message, 'user');

  // Clear input field
  userInput.value = '';

  try {
    // Send message to n8n webhook
    const response = await fetch('https://your-n8n-instance/webhook/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: message }),
    });

    const data = await response.json();

    // Display chatbot's response
    addMessage(data.reply || 'No response from the AI.', 'bot');
  } catch (error) {
    addMessage('Error communicating with the chatbot. Please try again.', 'bot');
  }
}

// Function to add a message to the chat window
function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}-message`;
  messageDiv.textContent = message;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll
}
