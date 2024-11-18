const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const historyList = document.getElementById('history-list');


const responses = {
    "Hi": "Hello!",
    "How are you?": "I am good, how about you?",
    "Fine": "I am glad!",
    "What day is today?": "Today is Saturday.",
    "Who is Albin Kurti?": "Albin Kurti is the the President of the biggest political party in the country, Lëvizja VETËVENDOSJE! (LVV), as well as the fourth and now the sixth Prime Minister of the Republic of Kosova since the country’s declaration of independence. He was born on March 24th, 1975 in Prishtina.",
    "What is the capital of France?": "The capital of France is Paris.",
    "Who wrote 'Pride and Prejudice'?": "Pride and Prejudice was written by Jane Austen.",
    "What is the largest planet in our solar system?": "The largest planet is Jupiter.",
    "What is 2 + 2?": "2 + 2 equals 4.",
    "How can I spend my free time?": "1. Go for a run/walk 2. Read a book 3. Write a to-do list 4. Visit a community park 5. Take photos 6. Start a blog 7. Read a magazine.",
    "What are the symptoms of the flu?": "The flu is a common respiratory illness you get from the influenza virus. Symptoms often include fever, head and body aches, coughing and a stuffy or runny nose.",
    "What are the best times to visit Paris?": "The best times to visit Paris are the months that shoulder the summer season: April, early May, September, and early October. 'The days are still warm and balmy but without the sweltering heat of peak summertime,' says Davidson of Red Savannah.",
    "What is the capital of Kosovo?": "The capital of Kosovo is Pristina.",
    "What is the capital of Albania?": "The capital of Albania is Tirana.",
    "What is the capital of Italy?": "The capital of Italy is Roma.",
};

function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function addToHistory(question) {
    const historyItem = document.createElement('li');
    historyItem.textContent = question;
    historyList.appendChild(historyItem);
}

sendBtn.addEventListener('click', () => {
    const question = userInput.value;
    if (question) {
        addMessage('user', question);
        addToHistory(question); 
        userInput.value = '';

        const answer = responses[question] || "I'm sorry, I don't have the answer to that.";
        addMessage('bot', answer);
    }
});

