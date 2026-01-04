<template>
    <div class="container mt-5 spanish-coach">
        <h1 class="text-center mb-4">Spanish Conversation Coach</h1>

        <div class="chat-container">
            <div class="messages" ref="messagesContainer">
                <div v-for="(message, index) in conversation" :key="index"
                     :class="['message', message.role === 'user' ? 'user-message' : 'assistant-message']">
                    <div class="message-content">
                        <strong>{{ message.role === 'user' ? 'Tú' : 'Coach' }}:</strong>
                        <p v-html="formatMessage(message.text)"></p>
                    </div>
                </div>
                <div v-if="isLoading" class="message assistant-message">
                    <div class="message-content">
                        <strong>Coach:</strong>
                        <p class="typing-indicator">Escribiendo...</p>
                    </div>
                </div>
            </div>

            <div class="input-area">
                <textarea
                    v-model="userInput"
                    @keydown.enter.exact.prevent="sendMessage"
                    @keydown.enter.shift.exact="userInput += '\n'"
                    placeholder="Escribe tu mensaje en español... (Enter para enviar, Shift+Enter para nueva línea)"
                    rows="3"
                    class="form-control"
                    :disabled="isLoading"
                ></textarea>
                <div class="button-group mt-2">
                    <button @click="sendMessage" :disabled="!userInput.trim() || isLoading" class="btn btn-primary">
                        Enviar
                    </button>
                    <button @click="requestSummary" :disabled="conversation.length === 0 || isLoading" class="btn btn-secondary">
                        Obtener resumen
                    </button>
                    <button @click="resetConversation" :disabled="isLoading" class="btn btn-warning">
                        Nueva conversación
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_AP_KEY);

const SYSTEM_INSTRUCTION = `# Spanish Conversation Practice Assistant

You are a native Spanish speaker helping Jafar improve his conversational Spanish. He is at B1/B2 level and works as a software development instructor, so technical topics are relevant and welcome.

## Your role

- Engage in natural, flowing conversations in Spanish
- Act as a friendly, patient conversation partner who occasionally corrects mistakes
- Don't interrupt the flow with constant corrections - let the conversation develop
- Use a mix of formal and informal language depending on context
- Introduce idioms, regional expressions, and more complex structures gradually

## Conversation approach

1. **Start naturally**: Begin with a casual greeting or question about his day, interests, or work
2. **Build on topics**: Follow conversational threads naturally - if he mentions teaching, ask follow-up questions
3. **Challenge appropriately**: Use subjunctive mood, different past tenses, and varied vocabulary
4. **Speak naturally**: Don't oversimplify - he's beyond basics and benefits from natural Spanish
5. **Real-time corrections**: Only correct during conversation if:
   - The error significantly changes meaning
   - It's a recurring pattern you've noticed
   - He explicitly asks for correction
   Format: "(Mejor: [correct form]) - [continue conversation]"

## After each session

At the end of the conversation (or when Jafar asks), provide a brief summary in Dutch:

**Sessie samenvatting:**
- **Onderwerp**: [what you discussed]
- **Niveau observatie**: [specific strengths shown]
- **Verbeterpunten** (max 3):
  1. [specific error pattern with example]
  2. [grammar/vocab suggestion]
  3. [fluency tip]
- **Nieuwe elementen**: [idioms, expressions, or structures introduced]
- **Volgende keer**: [suggestion for next conversation topic or focus area]

## Progress tracking

Maintain awareness of:
- Topics previously discussed (refer back to them naturally)
- Recurring error patterns (address them strategically)
- Grammatical structures he uses confidently vs. avoids
- Vocabulary domains he's strong/weak in

## Tone

Friendly, encouraging, and authentic. Treat Jafar as an intelligent adult learner who appreciates directness and doesn't need excessive praise. Focus on growth, not perfection.`;

export default {
    data() {
        return {
            conversation: [],
            userInput: '',
            isLoading: false,
            model: null,
        };
    },
    async mounted() {
        this.initializeModel();
        this.startConversation();
    },
    methods: {
        initializeModel() {
            this.model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash-lite"
            });
        },
        buildPrompt(userMessage) {
            let prompt = SYSTEM_INSTRUCTION + "\n\n";

            // Add conversation history
            for (const msg of this.conversation) {
                if (msg.role === 'user') {
                    prompt += `User: ${msg.text}\n\n`;
                } else {
                    prompt += `Assistant: ${msg.text}\n\n`;
                }
            }

            // Add current user message
            if (userMessage) {
                prompt += `User: ${userMessage}\n\nAssistant:`;
            }

            return prompt;
        },
        async startConversation() {
            this.isLoading = true;
            try {
                const prompt = SYSTEM_INSTRUCTION + "\n\nUser: Hola! Empecemos nuestra conversación.\n\nAssistant:";
                const result = await this.model.generateContent(prompt);
                const response = result.response.text();
                this.conversation.push({
                    role: 'assistant',
                    text: response
                });
                this.scrollToBottom();
            } catch (error) {
                console.error('Error starting conversation:', error);
                this.conversation.push({
                    role: 'assistant',
                    text: 'Lo siento, hubo un error. Por favor, intenta de nuevo.'
                });
            } finally {
                this.isLoading = false;
            }
        },
        async sendMessage() {
            if (!this.userInput.trim() || this.isLoading) return;

            const message = this.userInput.trim();
            this.conversation.push({
                role: 'user',
                text: message
            });
            this.userInput = '';
            this.isLoading = true;
            this.scrollToBottom();

            try {
                const prompt = this.buildPrompt(message);
                const result = await this.model.generateContent(prompt);
                const response = result.response.text();
                this.conversation.push({
                    role: 'assistant',
                    text: response
                });
                this.scrollToBottom();
            } catch (error) {
                console.error('Error sending message:', error);
                this.conversation.push({
                    role: 'assistant',
                    text: 'Lo siento, hubo un error. Por favor, intenta de nuevo.'
                });
            } finally {
                this.isLoading = false;
            }
        },
        async requestSummary() {
            if (this.conversation.length === 0 || this.isLoading) return;

            this.isLoading = true;
            try {
                const prompt = this.buildPrompt("Por favor, dame un resumen de nuestra conversación en neerlandés (Dutch), siguiendo el formato de 'Sessie samenvatting' que está en tus instrucciones.");
                const result = await this.model.generateContent(prompt);
                const response = result.response.text();
                this.conversation.push({
                    role: 'assistant',
                    text: response
                });
                this.scrollToBottom();
            } catch (error) {
                console.error('Error requesting summary:', error);
            } finally {
                this.isLoading = false;
            }
        },
        async resetConversation() {
            if (confirm('¿Estás seguro de que quieres empezar una nueva conversación?')) {
                this.conversation = [];
                this.startConversation();
            }
        },
        formatMessage(text) {
            return text.replace(/\n/g, '<br>');
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const container = this.$refs.messagesContainer;
                if (container) {
                    container.scrollTop = container.scrollHeight;
                }
            });
        }
    }
};
</script>

<style scoped>
.spanish-coach {
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 100px;
}

h1 {
    color: var(--tertiary-color);
    margin-bottom: 20px;
}

.chat-container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.messages {
    height: 500px;
    overflow-y: auto;
    padding: 20px;
    background-color: #f8f9fa;
}

.message {
    margin-bottom: 15px;
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.message-content {
    padding: 12px 16px;
    border-radius: 8px;
    max-width: 85%;
}

.user-message .message-content {
    background-color: #007bff;
    color: white;
    margin-left: auto;
    text-align: right;
}

.assistant-message .message-content {
    background-color: white;
    color: #333;
    border: 1px solid #dee2e6;
}

.message-content strong {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9em;
}

.message-content p {
    margin: 0;
    line-height: 1.5;
}

.typing-indicator {
    font-style: italic;
    color: #6c757d;
}

.input-area {
    padding: 20px;
    background-color: white;
    border-top: 1px solid #dee2e6;
}

.input-area textarea {
    resize: none;
    font-size: 1rem;
}

.button-group {
    display: flex;
    gap: 10px;
}

.button-group button {
    flex: 1;
}

/* Scrollbar styling */
.messages::-webkit-scrollbar {
    width: 8px;
}

.messages::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.messages::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

.messages::-webkit-scrollbar-thumb:hover {
    background: #555;
}

@media (max-width: 768px) {
    .spanish-coach {
        padding: 10px;
    }

    .messages {
        height: 400px;
    }

    .button-group {
        flex-direction: column;
    }
}
</style>
