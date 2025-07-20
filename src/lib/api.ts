import { BACKEND_URL } from './utils';

// Emotion mapping for Gemini API
const emotionPrompts = {
  sad: "Make this text sound sad and melancholic. Add appropriate emotional fillers and expressions that convey sadness.",
  love: "Make this text sound loving and affectionate. Add appropriate emotional fillers and expressions that convey love and warmth.",
  angry: "Make this text sound angry and frustrated. Add appropriate emotional fillers and expressions that convey anger.",
  excited: "Make this text sound excited and enthusiastic. Add appropriate emotional fillers and expressions that convey excitement.",
  calm: "Make this text sound calm and peaceful. Add appropriate emotional fillers and expressions that convey tranquility.",
  happy: "Make this text sound happy and joyful. Add appropriate emotional fillers and expressions that convey happiness.",
  surprised: "Make this text sound surprised and amazed. Add appropriate emotional fillers and expressions that convey surprise.",
  tired: "Make this text sound tired and exhausted. Add appropriate emotional fillers and expressions that convey fatigue."
};

// Function to modify text with emotion using Gemini API
export async function modifyTextWithEmotion(text: string, emotion: string): Promise<string> {
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!GEMINI_API_KEY) {
    console.warn('Gemini API key not found, using original text');
    return text;
  }

  try {
    const prompt = `${emotionPrompts[emotion as keyof typeof emotionPrompts] || emotionPrompts.happy}

Original text: "${text}"

Please modify the text to convey the emotion naturally. Keep the core message but add appropriate emotional expressions, fillers, and tone. Return only the modified text without any explanations.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API response:', errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const modifiedText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    
    return modifiedText || text;
  } catch (error) {
    console.error('Error modifying text with Gemini:', error);
    return text; // Fallback to original text
  }
}

// Function to send request to FastAPI backend
export async function generateAudio(text: string, audioFile: File): Promise<Blob> {
  const formData = new FormData();
  formData.append('text', text);
  formData.append('speaker_wav', audioFile);

  const response = await fetch(`${BACKEND_URL}/generate`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.blob();
} 