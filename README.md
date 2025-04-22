# D&D 5e Assistant – Frontend

This is the frontend for the Dungeons & Dragons 5e Assistant. It provides a simple and interactive interface for users to ask rules-related questions and get accurate answers based on the official 5e ruleset. It also features a daily random monster viewer.

## 🚀 Features

- Ask questions based on the D&D 5e ruleset.
- View a randomly selected monster each session.
- Live chat UI with streaming responses from the backend.

## 🛠️ Installation

1. Clone the repository:
   ``bash
   git clone https://github.com/your-username/dd5e-frontend.git
   cd dd5e-frontend
   ```

2. Install dependencies:
   ``bash
   npm install
   ```

3. Start the development server:
   ``bash
   npm run dev
   ``

> The frontend communicates with the backend at `http://145.24.223.130:8000`. Make sure the backend is running and accessible.

## 🧯 Troubleshooting

- **CORS errors**: Make sure you're accessing the correct backend URL and that the backend has CORS enabled.
- **Insecure content warning in Chrome**: Add `http://145.24.223.130:8000` to Chrome's [insecure content exceptions](chrome://settings/content/insecureContent).
- **Network errors**: Ensure your backend is running and accessible on port `8000`.

