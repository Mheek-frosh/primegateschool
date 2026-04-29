"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Primegate International Academy. How can we help you today?", sender: "support", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate an automated reply
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        text: "Thank you for reaching out! One of our admission officers will be with you shortly. If this is urgent, please call our support line.",
        sender: "support",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
            style={{ height: '500px', maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold leading-tight">Online Support</h3>
                  <p className="text-xs text-blue-100">Usually replies in a few minutes</p>
                </div>
              </div>
              <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-sm' : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'}`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className="bg-primary text-white p-2 rounded-full hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center h-10 w-10 shrink-0"
              >
                <Send size={18} className={inputValue.trim() ? "translate-x-0.5" : ""} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-primary hover:bg-primary-light text-white rounded-full shadow-[0_4px_20px_rgba(122,57,53,0.4)] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
