
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');

// Function to send a message
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Add user message to the chat window
  addMessage(message, 'user');

  // Clear the input field
  userInput.value = '';

  try {
    // Call your n8n webhook
    const response = await fetch('https://egreentech.app.n8n.cloud/webhook/9b0a81f4-fd09-4c5e-9936-74879a18e9e7', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: message }),
    });

    const data = await response.json();

    // Add the chatbot's response to the chat window
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
