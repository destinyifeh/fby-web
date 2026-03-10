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
    text: "Hey girl you missed your birthday appointment. Did you want to reschedule?",
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
  const [isMUATyping, setIsMUATyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    if (currentIndex >= conversation.length) {
      const timer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
        setTypingText("");
      }, 7000); // Wait longer before restart
      return () => clearTimeout(timer);
    }

    const currentMsg = conversation[currentIndex];

    if (currentMsg.isOutgoing) {
      // Wait a bit before human starts "typing" (simulates reading)
      const startTypingDelay = setTimeout(() => {
        setIsTyping(true);
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex < currentMsg.text.length) {
            const char = currentMsg.text[charIndex].toLowerCase();
            // Map characters to keyboard keys
            if (char === " ") {
              setActiveKey("space");
            } else if (/[a-z]/.test(char)) {
              setActiveKey(char);
            } else {
              // Map punctuation, symbols, and emojis to "123" key
              setActiveKey("123");
            }
            setTypingText(currentMsg.text.slice(0, charIndex + 1));
            charIndex++;
            setTimeout(() => setActiveKey(null), 100);
          } else {
            clearInterval(typeInterval);
            // Highlight return key when "sending" the message
            setActiveKey("return");
            setTimeout(() => {
              setActiveKey(null);
              setVisibleMessages((prev) => [...prev, currentMsg]);
              setTypingText("");
              setIsTyping(false);
              setCurrentIndex((prev) => prev + 1);
            }, 500); // Slightly more pause on return key
          }
        }, 130); // Slower typing speed
        return () => clearInterval(typeInterval);
      }, 2000); // 2 second thinking delay for human
      return () => clearTimeout(startTypingDelay);
    } else {
      // Incoming message delay with typing indicator
      setIsMUATyping(true);
      const timer = setTimeout(
        () => {
          setIsMUATyping(false);
          // Very fast transition from dots disappearing to message appearing
          setTimeout(() => {
            setVisibleMessages((prev) => [...prev, currentMsg]);
            setCurrentIndex((prev) => prev + 1);
          }, 50);
        },
        currentIndex === 0 ? 2500 : 5000, // Slower MUA pacing
      );
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[380px] h-[780px] bg-[#000] rounded-[60px] border-[14px] border-[#1a1a1a] shadow-2xl overflow-hidden font-sans mx-auto outline outline-4 outline-[#2a2a2a]">
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-[20px] z-50 flex items-center justify-center">
        <div className="w-12 h-1 bg-white/10 rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full h-11 flex items-center justify-between px-8 pt-6 z-40">
        <span className="text-sm font-semibold text-black">9:41</span>
        <div className="flex gap-1.5 items-center">
          <div className="w-[18px] h-[10px] rounded-[2px] border border-black/40 relative">
            <div className="absolute right-[-3px] top-[3px] w-[2px] h-[4px] bg-black/40 rounded-full" />
            <div className="absolute inset-[1px] bg-black rounded-[1px] w-[80%]" />
          </div>
        </div>
      </div>

      {/* Chat Header */}
      <div className="absolute top-11 left-0 w-full h-[60px] bg-white/80 backdrop-blur-md border-b border-black/5 flex items-center justify-center px-6 gap-2 z-30">
        <div className="w-8 h-8 rounded-full bg-[#8d5241] shadow-sm flex items-center justify-center text-white text-[12px] font-bold">
          M
        </div>
        <h4 className="font-bold text-[16px] text-black tracking-tight">MUA</h4>
      </div>

      {/* Messages Container */}
      <div className="absolute inset-0 pt-28 pb-44 px-4 flex flex-col gap-2 bg-white overflow-y-auto">
        <AnimatePresence>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex flex-col ${
                msg.isOutgoing ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-[20px] text-[15px] leading-tight ${
                  msg.isOutgoing
                    ? "bg-[#007aff] text-white rounded-tr-none"
                    : "bg-[#e9e9eb] text-black rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
              {msg.status && (
                <span className="text-[10px] text-black/40 font-medium mt-1 pr-1">
                  {msg.status}
                </span>
              )}
            </motion.div>
          ))}

          {isMUATyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-start"
            >
              <div className="bg-[#e9e9eb] px-4 py-3 rounded-[20px] rounded-tl-none">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: i * 0.2,
                      }}
                      className="w-1.5 h-1.5 bg-black/40 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-[200px] left-0 w-full px-4 z-20">
        <div className="w-full h-9 bg-white rounded-full border border-black/10 flex items-center px-4 text-[15px] text-black shadow-sm">
          <div className="flex-1 flex items-center overflow-hidden">
            <span className={!typingText && !isTyping ? "text-black/30" : ""}>
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
          <div className="w-6 h-6 rounded-full bg-[#007aff] flex items-center justify-center ml-2">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-[-45deg] translate-y-[1px]" />
          </div>
        </div>
      </div>

      {/* Keyboard Area */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[#d1d5db] pt-2 px-1 pb-8 flex flex-col gap-3 z-30">
        <div className="flex justify-between gap-1 h-10">
          {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((k) => (
            <div
              key={k}
              className={`flex-1 rounded flex items-center justify-center text-lg shadow-sm font-medium transition-all duration-100 ${
                activeKey === k
                  ? "bg-gray-100 scale-125 -translate-y-2 z-50 ring-2 ring-black/5 shadow-xl"
                  : "bg-white"
              }`}
            >
              {k}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1 h-10 px-4">
          {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((k) => (
            <div
              key={k}
              className={`flex-1 rounded flex items-center justify-center text-lg shadow-sm font-medium transition-all duration-100 ${
                activeKey === k
                  ? "bg-gray-100 scale-125 -translate-y-2 z-50 ring-2 ring-black/5 shadow-xl"
                  : "bg-white"
              }`}
            >
              {k}
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-1 h-10">
          <div className="w-12 bg-white/60 rounded flex items-center justify-center shadow-sm text-sm">
            ⇧
          </div>
          {["z", "x", "c", "v", "b", "n", "m"].map((k) => (
            <div
              key={k}
              className={`flex-1 rounded flex items-center justify-center text-lg shadow-sm font-medium transition-all duration-100 ${
                activeKey === k
                  ? "bg-gray-100 scale-125 -translate-y-2 z-50 ring-2 ring-black/5 shadow-xl"
                  : "bg-white"
              }`}
            >
              {k}
            </div>
          ))}
          <div className="w-12 bg-white/60 rounded flex items-center justify-center shadow-sm text-sm">
            ⌫
          </div>
        </div>
        <div className="flex gap-1.5 h-10 px-1">
          <div
            className={`w-20 rounded flex items-center justify-center text-sm font-medium shadow-sm transition-all duration-100 ${
              activeKey === "123"
                ? "bg-gray-100 scale-105 ring-2 ring-black/5 shadow-lg"
                : "bg-white/60"
            }`}
          >
            123
          </div>
          <div
            className={`flex-1 rounded flex items-center justify-center shadow-sm transition-all duration-100 ${
              activeKey === "space"
                ? "bg-gray-100 scale-105 ring-2 ring-black/5 shadow-lg"
                : "bg-white"
            }`}
          />
          <div
            className={`w-20 rounded flex items-center justify-center text-sm font-medium shadow-sm transition-all duration-100 ${
              activeKey === "return"
                ? "bg-gray-100 scale-105 ring-2 ring-black/5 shadow-lg"
                : "bg-white/60"
            }`}
          >
            return
          </div>
        </div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black rounded-full" />
      </div>
    </div>
  );
};
