let { GoogleGenAI } = require('@google/genai')

let genAi = new GoogleGenAI( {} )

genAi.models.generateContent( {
    model: 'gemini-2.5-flash',
    contents: 'what is an environment variable'
}).then ( response => console.log(response.text))