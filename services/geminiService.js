const { GoogleGenerativeAI } = require('@google/generative-ai');

const promptBuilder = (text) => {
  return `
You will receive meeting notes. Extract:
1. A short summary (2–3 lines).
2. Key decisions (bullet list).
3. Action items with task, owner (if mentioned), and deadline (if mentioned).

Meeting Notes:
${text}

Respond only with a valid JSON object in this format:
{
  "summary": "...",
  "decisions": ["..."],
  "actionItems": [
    { "task": "...", "owner": "...", "due": "..." }
  ]
}
  `;
};

exports.getMeetingInsights = async (text) => {
  const API_KEY = process.env.GEMINI_API_KEY;

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = promptBuilder(text);

  try {
    const result = await model.generateContent(prompt);
    const content = result.response.text();

    // Extract JSON block (remove markdown fences, text outside braces, etc.)
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Gemini did not return a valid JSON block');

    const cleanJson = match[0];
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error('💥 Gemini SDK Error:', error.message);
    throw new Error('Failed to generate or parse Gemini response');
  }
};
