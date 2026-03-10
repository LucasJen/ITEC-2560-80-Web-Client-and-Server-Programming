let { GoogleGenAI, Type } = require('@google/genai')

let genAi = new GoogleGenAI( {} )

let userInput = 'eggs and borroli and leftover chicken'

let prompt = `Suggest one recipe that uses these ingredients. Ingredients: ${userInput}`

genAi.models.generateContent( {
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
        systemInstruction: `You are a recipe suggestion bot for a health=concious, bugest-friendly website.
        Suggets recipes that are low cost but use healthy ingredients`,
        responseMimeType: 'application/json',
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                recipeName: {
                    type: Type.STRING
                },
                description: {
                    type: Type.STRING
                },
                ingredients: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.STRING
                    }
                },
                instructions: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.STRING
                    }
                }
            }
        }
    }
}).then ( response => {
    console.log(response.text)
    let recipe = JSON.parse(response.text)
    })