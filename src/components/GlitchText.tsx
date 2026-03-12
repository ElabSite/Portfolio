import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}


export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <span className={`glitch-wrapper ${className}`} data-text={text}>
      <span className="glitch-text" aria-hidden="true">{text}</span>
      <span className="glitch-text glitch-text--2" aria-hidden="true">{text}</span>
      {text}
    </span>
  );
}
