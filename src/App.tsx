import React, { useState, useEffect } from 'react';
import { slides } from './slidesData';
import { cn } from './lib/utils';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Terminal,
  BookOpen,
  Settings,
  Code2
} from 'lucide-react';

const Slide = ({ slide }: { slide: typeof slides[0] }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'intro': return <BookOpen className="text-[#6366F1]" />;
      case 'content': return <Settings className="text-[#6366F1]" />;
      case 'code': return <Code2 className="text-[#6366F1]" />;
      case 'lab': return <Terminal className="text-[#6366F1]" />;
      default: return <BookOpen className="text-[#6366F1]" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 rounded-2xl bg-[#262626] border border-white/5 shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-[#191919] border border-white/5">
          {getIcon(slide.type)}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">{slide.title}</h1>
          {slide.subtitle && <p className="text-[#6366F1] font-medium mt-1">{slide.subtitle}</p>}
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {slide.content.map((item, index) => (
          <div key={index} className="flex items-start gap-3 text-lg text-white/80">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#6366F1] shrink-0" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      {slide.code && (
        <div className="relative group">
          <div className="absolute right-4 top-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => handleCopy(slide.code!)}
              className="p-2 rounded-md bg-[#191919] hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 text-sm"
              aria-label="Copy code to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-400" />
                  <span className="text-green-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-white/60" />
                  <span className="text-white/60">Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-6 rounded-xl bg-[#191919] border border-white/5 font-mono text-sm overflow-x-auto leading-relaxed">
            <code className="text-indigo-300">
              {slide.code.split('\n').map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-white/20 select-none w-4 text-right">{i + 1}</span>
                  <span>{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-white/40 text-sm">
        <span className="font-medium uppercase tracking-wider">Terraform Course</span>
        <span className="font-mono">Slide {slide.id} / {slides.length}</span>
      </div>
    </div>
  );
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#191919] w-full flex flex-col items-center justify-center p-6 text-white overflow-hidden font-sans">
      <main className="flex-1 w-full flex items-center justify-center relative">
        <Slide slide={slides[currentSlide]} />

        <button
          onClick={prevSlide}
          className="absolute left-4 p-4 rounded-full bg-[#262626] hover:bg-white/5 border border-white/5 transition-all hover:scale-110 active:scale-95 shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-white/60" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 p-4 rounded-full bg-[#262626] hover:bg-white/5 border border-white/5 transition-all hover:scale-110 active:scale-95 shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="text-white/60" />
        </button>
      </main>

      <div className="w-full max-w-4xl mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-full",
              currentSlide === i ? "w-8 bg-[#6366F1]" : "w-2 bg-white/10 hover:bg-white/20"
            )}
            aria-label={"Go to slide " + (i + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
