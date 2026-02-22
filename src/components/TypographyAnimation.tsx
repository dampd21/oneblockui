import { useState, useEffect } from "react";

function TypewriterText({ text, speed = 80 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => { setIndex(0); setDisplayed(""); }, 2000);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <div className="font-mono text-xl text-violet-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </div>
  );
}

function GlitchText({ text }: { text: string }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-3xl font-bold text-white cursor-pointer" onMouseEnter={() => setGlitch(true)} onMouseLeave={() => setGlitch(false)}>
      <span className="relative z-10">{text}</span>
      {glitch && (
        <>
          <span className="absolute top-0 left-0 text-cyan-400 z-20" style={{ clipPath: "inset(20% 0 60% 0)", transform: "translate(-2px, -1px)" }}>{text}</span>
          <span className="absolute top-0 left-0 text-pink-400 z-20" style={{ clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, 1px)" }}>{text}</span>
        </>
      )}
    </div>
  );
}

function WaveText({ text }: { text: string }) {
  return (
    <div className="flex text-2xl font-bold">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-pink-400 inline-block animate-bounce"
          style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

function FadeInText({ text }: { text: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-1 text-xl font-semibold">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`text-emerald-400 inline-block transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: `${i * 30}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

function GradientText() {
  return (
    <h2 className="text-3xl font-black bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent" style={{ animation: "gradient-shift 3s linear infinite" }}>
      Animated Gradient
    </h2>
  );
}

export function TypographyAnimation() {
  return (
    <div className="space-y-10 flex flex-col items-center">
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Typewriter</p>
        <TypewriterText text="Hello, World! Welcome to UI Showcase." />
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Glitch Effect</p>
        <GlitchText text="GLITCH TEXT" />
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Wave Animation</p>
        <WaveText text="Wave Motion" />
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Letter Fade</p>
        <FadeInText text="Fade In Letters" />
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Gradient Shift</p>
        <GradientText />
      </div>
    </div>
  );
}
