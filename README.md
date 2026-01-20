# CyberSec Learn - AI Chatbot

This branch includes the development of an AI-powered chatbot to assist in learning cybersecurity concepts. The bot uses OpenAI's GPT models to answer queries.

## Features:
- Chatbot capable of answering basic questions on cybersecurity.
- Simple API built with Flask.

## Setup Instructions:
1. Clone the repository:
   ```bash
   git clone https://github.com/PetreCostin/cybersec-learn.git
   ```

2. Checkout the `ai-chatbot` branch:
   ```bash
   git checkout ai-chatbot
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Add your OpenAI API key:
   - Open `chatbot.py` and replace `YOUR_API_KEY` with your actual OpenAI API key.

5. Run the chatbot API:
   ```bash
   python chatbot.py
   ```

6. Test the chatbot:
   - Use an API testing tool like Postman.
   - Make a POST request to `http://127.0.0.1:5000/chat` with a JSON body:
     ```json
     {
       "message": "What is encryption?"
     }
     ```
   - Receive a chatbot response in the JSON reply.

---

Let me know if you have any issues or require enhancements!