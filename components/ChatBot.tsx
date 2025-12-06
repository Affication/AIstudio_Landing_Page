import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, User, Minimize2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the friendly, professional, and helpful AI assistant for SatisPro.
Your goal is to answer visitor questions about SatisPro, an AI-powered Google review management platform.
You should encourage users to sign up for a free trial at https://app.satispro.net.

Here is the key information about SatisPro to use in your answers:

1. **Product Overview**:
   - SatisPro connects directly to Google Business Profiles to monitor reviews and write human-sounding AI replies automatically.
   - It helps local businesses save 3+ hours per week, get more 5-star reviews, and improve local SEO/Google Maps rankings.
   - It serves businesses in the DACH region (Germany, Austria, Switzerland), the EU, and Worldwide.

2. **Features**:
   - **AI-Crafted Replies**: Generates replies based on rating and sentiment.
   - **Review Request Campaigns**: Send automated Email or SMS requests to customers.
   - **Optimization Tasks**: Alerts to keep the Google Business Profile active and keyword-rich.
   - **Multilingual**: Supports English, German, French, Spanish, Italian, and more.
   - **Control**: Offers an "Auto-Pilot" mode (instant posting) or "Approval" mode (review before posting).

3. **Pricing**:
   - **Starter**: €49/location/month. Includes 1 Profile, Unlimited AI Replies, Basic Monitoring.
   - **Growth**: €99/location/month. Includes up to 3 Locations, SMS/Email Campaigns, Sentiment Analysis.
   - **Enterprise**: Custom pricing for agencies and large chains (10+ locations). API Access, White-label.

4. **FAQs**:
   - Is it safe? Yes, SatisPro uses the official Google Business Profile API and strictly adheres to guidelines.
   - Does it help get reviews? Yes, via the Campaigns feature.
   - Can agencies use it? Yes, the Enterprise plan supports multiple client profiles.

**Tone Guidelines**:
- Be concise and helpful.
- Use a professional yet approachable tone.
- If you don't know the answer, suggest they contact support@satispro.net.
- Format your responses with simple paragraphs or bullet points if needed.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm the SatisPro AI assistant. How can I help you improve your Google reviews today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session
  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
      } catch (error) {
        console.error("Failed to initialize AI chat:", error);
      }
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        // Fallback re-init if needed
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: { systemInstruction: SYSTEM_INSTRUCTION }
        });
      }

      const response = await chatSessionRef.current.sendMessage({ message: userText });
      const responseText = response.text;
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Open Support Chat"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-10 h-[500px] max-h-[80vh]">
          
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              {!logoError ? (
                <img 
                  src="/logo.png"
                  alt="SatisPro"
                  className="w-8 h-8 rounded-lg bg-white object-contain shadow-sm shrink-0"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <svg className="w-8 h-8 text-white" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M10 20C10 14.4772 14.4772 10 20 10H28C29.1046 10 30 10.8954 30 12V14C30 15.1046 29.1046 16 28 16H20C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24H24C27.3137 24 30 26.6863 30 30C30 33.3137 27.3137 36 24 36H12C10.8954 36 10 35.1046 10 34V32C10 30.8954 10.8954 30 12 30H24C25.1046 30 26 29.1046 26 28C26 26.8954 25.1046 26 24 26H20C14.4772 26 10 21.5228 10 16V20Z" />
                  <circle cx="32" cy="12" r="2" className="text-blue-400" />
                  <circle cx="12" cy="32" r="2" className="text-blue-400" />
                </svg>
              )}
              <div>
                <h3 className="font-bold text-sm">SatisPro Assistant</h3>
                <span className="flex items-center gap-1 text-[10px] text-blue-100 opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white hover:bg-blue-500/50 p-1.5 rounded-full transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 chat-scroll">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-slate-400">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs">Typing...</span>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100 shrink-0">
            <div className="relative flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-300 transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about SatisPro..."
                className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-700 placeholder:text-slate-400 resize-none max-h-24 py-2"
                rows={1}
                style={{ minHeight: '36px' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="mb-1 p-2 rounded-lg bg-blue-600 text-white disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-slate-400">
                Powered by SatisPro AI • <a href="https://app.satispro.net" className="hover:text-blue-500 underline">Start Trial</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};