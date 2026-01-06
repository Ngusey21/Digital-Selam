
import { GoogleGenAI, Type } from "@google/genai";

// Fixed: Corrected initialization to use process.env.API_KEY directly as a named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeCulturalText = async (text: string, sourceLang: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        Analyze the following text which belongs to an African indigenous oral tradition or language snippet.
        Provide a cultural analysis, an English translation if applicable, and suggestions for how digital tools (AI/Storytelling) could help preserve it.
        
        Text: "${text}"
        Source Language Hint: ${sourceLang}
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            translation: { type: Type.STRING },
            culturalSignificance: { type: Type.STRING },
            preservationSuggestions: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            detectedLanguage: { type: Type.STRING }
          },
          required: ["translation", "culturalSignificance", "preservationSuggestions"]
        }
      }
    });

    // Fixed: Used response.text (property access) and .trim() as recommended
    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return null;
  }
};
