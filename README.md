# 🧠 AI-Powered Meeting Minutes Extractor – Backend

This is the **backend** service for the AI-powered meeting summarizer. It uses **Google Gemini API** to extract structured insights from meeting notes.

- 📝 Accepts raw text or `.txt` file
- 🔗 Integrates with Gemini to extract:
  - 📌 Summary (2–3 sentences)
  - 📋 Key decisions
  - ✅ Action items with task, owner, and deadline
- 📦 Returns clean, structured JSON

---

## 🚀 Features

- ⚙️ Built with **Node.js** and **Express.js**
- 🤖 Gemini API (Google AI) integration
- 🧾 Supports both **file upload** and **raw text input**
- 🛡️ Includes proper **error handling**
- ✅ Ready to plug into any frontend or external system

---

## 🛠️ Tech Stack

| Tech       | Description                          |
|------------|--------------------------------------|
| Node.js    | JavaScript runtime                   |
| Express.js | Web framework for APIs               |
| Gemini API | Google’s generative AI for NLP tasks |
| Multer     | Middleware for file uploads          |
| dotenv     | Manage environment variables         |
| CORS       | Cross-Origin Resource Sharing        |

---

## 📂 Project Structure

```
/Backend
    ├── controllers/
    │   └── meetingController.js
    ├── routes/
    │   └── meetingRoutes.js
    ├── services/
    │   └── geminiService.js
    ├── uploads/
    │   └── (for storing uploaded .txt files)
    ├── samples/
    │   └── meeting1.txt
    │   └── meeting2.txt
    ├── .env
    ├── app.js
    ├── server.js
    ├── README.md
    ├── package.json
```

---

## ⚙️ How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/tajmalnas/Meet-Summarizer-backend.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Gemini API Key

Create a `.env` file:

```
GEMINI_API_KEY=your-api-key-here
```

> You can get your Gemini API key from https://makersuite.google.com/app/apikey

### 4. Start the server

```bash
node server.js
```

The server will run at:  
👉 **http://localhost:3000**

---

## 📬 API Endpoint

### `POST /process-meeting`

#### Accepts:

- **Raw text input** (via JSON body)
- **.txt file** (via `multipart/form-data`)

#### Example using raw text (with `curl`):

```bash
curl -X POST http://localhost:3000/process-meeting \
  -H "Content-Type: application/json" \
  -d '{"text": "Team Sync – May 26\n\n- Launch on June 10.\n- Ravi to prepare onboarding docs by June 5.\n- Priya to follow up with logistics.\n- Beta users want mobile dashboard."}'
```

#### Example using file:

```bash
curl -X POST http://localhost:3000/process-meeting \
  -F "file=@samples/sample1.txt"
```

#### Sample Response:

```json
{
  "summary": "The team discussed the upcoming launch, assigned onboarding and logistics follow-ups, and reviewed user feedback on mobile-first design.",
  "decisions": [
    "Product launch on June 10",
    "Need mobile-first dashboard"
  ],
  "actionItems": [
    {
      "task": "Prepare onboarding docs",
      "owner": "Ravi",
      "due": "June 5"
    },
    {
      "task": "Follow up with logistics team",
      "owner": "Priya"
    }
  ]
}
```

---

## 🧪 Testing

Include two `.txt` files in a `samples/` folder:  
- `sample1.txt`  
- `sample2.txt`

Test via:
- Postman
- Curl (examples above)
- Frontend

---

## 🔐 Environment Variables

| Variable         | Description              |
|------------------|--------------------------|
| `GEMINI_API_KEY` | Google Gemini API Key    |


---

## 👨‍💻 Author

Built with ❤️ by **Taj Malnas**  
📧 tajmalnas36@gmail.com  
📞 +91-7796327571

---

![image](https://github.com/user-attachments/assets/f669a557-6483-45de-95f1-bbcd43a291fe)

![image](https://github.com/user-attachments/assets/70d055ed-c6d8-4bcc-8b31-5626ec80cfbd)


