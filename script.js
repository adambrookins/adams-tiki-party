document.addEventListener('DOMContentLoaded', () => {
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // This is a very basic, non-AI "bot" for demonstration.
    // In a real application, you would send the user's message
    // to an API endpoint (e.g., Google Cloud's Dialogflow, OpenAI's GPT, etc.)
    // and display the response.

    const predefinedResponses = {
        "date": "The party is on Saturday, July 19th.",
        "time": "The party starts at 3:00 PM.",
        "location": "The party is at Drew's Place, 16125 8th Ave N, Plymouth, MN.",
        "food": "We'll have plenty of grilled items like Huli Huli Chicken, Teriyaki Steak Skewers, and Coconut Shrimp. There will also be tropical fruit!",
        "drinks": "Expect Tiki cocktails (both alcoholic and non-alcoholic options) and other refreshing beverages.",
        "what to bring": "Just bring a towel, your swimsuit, and your party spirit! We'll provide leis.",
        "rsvp": "Please RSVP by July 10th by texting Adam or sending an email.",
        "games": "We'll have classic pool games, possibly limbo, and other fun activities!",
        "host": "Adam is the birthday host!",
        "birthday": "It's Adam's 42nd Annual Birthday!",
        "wear": "It's Adam's Birthday - think something like a sexy thong.",
        "hello": "Aloha! How can I help you with the party details?",
        "hi": "Aloha! How can I help you with the party details?",
        "party": "It's a Tiki-themed pool party celebrating Adam's 42nd birthday!",
        "thank you": "You're welcome! See you there!",
        "thanks": "You're welcome! See you there!"
    };

    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;

        // Display user message
        const userMsgDiv = document.createElement('p');
        userMsgDiv.classList.add('user-message');
        userMsgDiv.textContent = userMessage;
        chatbotMessages.appendChild(userMsgDiv);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Get bot response (very simplistic keyword matching)
        const lowerCaseMessage = userMessage.toLowerCase();
        let botResponse = "Mahalo! I'm not sure about that. Try asking about the date, time, location, food, or what to bring!";

        for (const keyword in predefinedResponses) {
            if (lowerCaseMessage.includes(keyword)) {
                botResponse = predefinedResponses[keyword];
                break;
            }
        }

        // Simulate AI thinking time
        setTimeout(() => {
            const botMsgDiv = document.createElement('p');
            botMsgDiv.classList.add('bot-message');
            botMsgDiv.textContent = botResponse;
            chatbotMessages.appendChild(botMsgDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 500); // 0.5 second delay

        chatbotInput.value = ''; // Clear input
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Optional: Auto-suggest features or more complex bot logic
    // would go here, often involving external API calls.
});
