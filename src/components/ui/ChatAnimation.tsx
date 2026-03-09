"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Message {
  id: number;
  text: string;
  isOutgoing: boolean;
  status?: string;
}

const conversation: Message[] = [
  {
    id: 1,
    text: "Hey girl I know your birthday is coming up, do you want to book an appointment?",
    isOutgoing: false,
  },
  {
    id: 2,
    text: "Hey no I'm ok thanks for asking",
    isOutgoing: true,
  },
  {
    id: 3,
    text: "Really? I always do your make up did you find a new MUA?",
    isOutgoing: false,
  },
  {
    id: 4,
    text: "Actually I did, I'm sorry girl 😔",
    isOutgoing: true,
  },
  {
    id: 5,
    text: "You're fine… who is it if you don't mind me asking?",
    isOutgoing: false,
  },
  {
    id: 6,
    text: "Me.",
    isOutgoing: true,
    status: "Delivered",
  },
];

export const ChatAnimation = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= conversation.length) {
      const timer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
        setTypingText("");
      }, 5000);
      return () => clearTimeout(timer);
    }

    const currentMsg = conversation[currentIndex];

    if (currentMsg.isOutgoing) {
      // Start typing animation
      setIsTyping(true);
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < currentMsg.text.length) {
          setTypingText(currentMsg.text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setVisibleMessages((prev) => [...prev, currentMsg]);
            setTypingText("");
            setIsTyping(false);
            setCurrentIndex((prev) => prev + 1);
          }, 500);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    } else {
      // Incoming message delay
      const timer = setTimeout(
        () => {
          setVisibleMessages((prev) => [...prev, currentMsg]);
          setCurrentIndex((prev) => prev + 1);
        },
        currentIndex === 0 ? 500 : 1500,
      );
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[400px] h-[720px] bg-[#000] rounded-[50px] border-[12px] border-[#000] shadow-2xl overflow-hidden font-sans mx-auto">
      {/* Phone Header */}
      <div className="absolute top-0 left-0 w-full h-12 bg-[#fffdfa] flex items-center justify-between px-8 pt-2 z-20">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-full border border-black/20" />
          <div className="w-4 h-4 rounded-full border border-black/20" />
        </div>
      </div>

      {/* Chat Header */}
      <div className="absolute top-12 left-0 w-full h-16 bg-[#fffdfa] border-b border-black/5 flex items-center px-4 gap-3 z-10">
        <div className="w-10 h-10 rounded-full bg-[#efefef] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[#8d5241] flex items-center justify-center text-white font-bold">
            M
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm">MUA</h4>
          <span className="text-[10px] text-green-500 font-medium leading-none flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
          </span>
        </div>
      </div>

      {/* Messages Container */}
      <div className="absolute inset-0 pt-28 pb-40 px-4 flex flex-col gap-3 bg-[#fff9f0] overflow-y-auto">
        <AnimatePresence>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex flex-col ${
                msg.isOutgoing ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[15px] leading-snug shadow-sm ${
                  msg.isOutgoing
                    ? "bg-[#007aff] text-white rounded-tr-none"
                    : "bg-[#fff2da] text-[#8d5241] rounded-tl-none border border-[#8d5241]/10"
                }`}
              >
                {msg.text}
              </div>
              {msg.status && (
                <span className="text-[10px] text-[#8d5241]/60 mt-0.5 px-1">
                  {msg.status}
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-40 left-0 w-full px-4 z-20">
        <div className="w-full h-10 bg-[#fff] rounded-full border border-black/10 flex items-center px-4 text-sm text-[#8d5241]">
          <span
            className={`${!typingText && !isTyping ? "text-[#8d5241]/40" : ""}`}
          >
            {typingText || (isTyping ? "" : "iMessage")}
          </span>
          {isTyping && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-[2px] h-4 bg-[#007aff] ml-0.5"
            />
          )}
        </div>
      </div>

      {/* Keyboard Area */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-[#d1d5db] p-1 flex flex-col gap-1 z-20">
        {/* Simplified Keyboard Mockup */}
        <div className="flex justify-between gap-1 h-8">
          {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((k) => (
            <div
              key={k}
              className="flex-1 bg-white rounded flex items-center justify-center text-sm shadow-sm font-medium"
            >
              {k}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1 h-8 px-4">
          {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((k) => (
            <div
              key={k}
              className="flex-1 bg-white rounded flex items-center justify-center text-sm shadow-sm font-medium"
            >
              {k}
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-1 h-8">
          <div className="w-12 bg-white/50 rounded flex items-center justify-center shadow-sm">
            ⇧
          </div>
          {["z", "x", "c", "v", "b", "n", "m"].map((k) => (
            <div
              key={k}
              className="flex-1 bg-white rounded flex items-center justify-center text-sm shadow-sm font-medium"
            >
              {k}
            </div>
          ))}
          <div className="w-12 bg-white/50 rounded flex items-center justify-center shadow-sm">
            ⌫
          </div>
        </div>
        <div className="flex gap-1 h-10">
          <div className="w-16 bg-white/50 rounded flex items-center justify-center text-xs font-medium shadow-sm">
            123
          </div>
          <div className="flex-1 bg-white rounded flex items-center justify-center shadow-sm" />
          <div className="w-20 bg-[#007aff] text-white rounded flex items-center justify-center text-xs font-bold shadow-sm">
            Send
          </div>
        </div>
        <div className="h-4 w-1/3 bg-black/40 rounded-full mx-auto mb-1" />
      </div>
    </div>
  );
};
