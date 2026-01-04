<template>
    <div class="container mt-5 spanish-coach">
        <h1 class="text-center mb-4">Entrenador de Conversación en Español</h1>

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
        this.loadConversationHistory();

        // Only start a new conversation if there's no existing history
        if (this.conversation.length === 0) {
            this.startConversation();
        }
    },
    methods: {
        initializeModel() {
            this.model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash"
            });
        },
        saveConversationHistory() {
            try {
                localStorage.setItem('spanishCoachConversation', JSON.stringify({
                    conversation: this.conversation,
                    lastUpdated: new Date().toISOString()
                }));
            } catch (error) {
                console.error('Error saving conversation:', error);
            }
        },
        loadConversationHistory() {
            try {
                const saved = localStorage.getItem('spanishCoachConversation');
                if (saved) {
                    const data = JSON.parse(saved);
                    this.conversation = data.conversation || [];
                }
            } catch (error) {
                console.error('Error loading conversation:', error);
                this.conversation = [];
            }
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
                this.saveConversationHistory();
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
            this.saveConversationHistory();
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
                this.saveConversationHistory();
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
                this.saveConversationHistory();
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
                localStorage.removeItem('spanishCoachConversation');
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
    max-width: 1000px;
    margin: 2rem auto;
    padding-bottom: 100px;
}

h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: var(--text-light);
    margin-bottom: 2rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.chat-container {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    overflow: hidden;
}

.messages {
    height: 500px;
    overflow-y: auto;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.1);
}

.message {
    margin-bottom: 1rem;
    animation: fadeIn 0.3s ease-in;
    display: flex;
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

.user-message {
    justify-content: flex-end;
}

.assistant-message {
    justify-content: flex-start;
}

.message-content {
    padding: 1rem 1.25rem;
    border-radius: 16px;
    max-width: 75%;
}

.user-message .message-content {
    background: rgba(102, 126, 234, 0.5);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(102, 126, 234, 0.3);
    color: var(--text-light);
}

.assistant-message .message-content {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text-light);
}

.message-content strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    opacity: 0.9;
    font-weight: 600;
}

.message-content p {
    margin: 0;
    line-height: 1.6;
}

.typing-indicator {
    font-style: italic;
    opacity: 0.8;
}

.input-area {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.input-area textarea {
    resize: none;
    font-size: 1rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    color: var(--text-light);
    transition: all 0.3s ease;
}

.input-area textarea:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.input-area textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.button-group {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
}

.button-group button {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    color: var(--text-light);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button-group button:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.button-group button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-primary {
    background: rgba(102, 126, 234, 0.4);
    border-color: rgba(102, 126, 234, 0.6);
}

.btn-primary:hover:not(:disabled) {
    background: rgba(102, 126, 234, 0.6);
}

.btn-secondary {
    background: rgba(240, 147, 251, 0.3);
    border-color: rgba(240, 147, 251, 0.5);
}

.btn-secondary:hover:not(:disabled) {
    background: rgba(240, 147, 251, 0.5);
}

.btn-warning {
    background: rgba(255, 193, 7, 0.3);
    border-color: rgba(255, 193, 7, 0.5);
}

.btn-warning:hover:not(:disabled) {
    background: rgba(255, 193, 7, 0.5);
}

/* Scrollbar styling */
.messages::-webkit-scrollbar {
    width: 8px;
}

.messages::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.messages::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}

.messages::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
    .spanish-coach {
        padding: 1rem;
        margin: 1rem;
    }

    h1 {
        font-size: 2rem;
    }

    .messages {
        height: 400px;
        padding: 1rem;
    }

    .message-content {
        max-width: 90%;
    }

    .button-group {
        flex-direction: column;
    }

    .button-group button {
        width: 100%;
    }
}
</style>
