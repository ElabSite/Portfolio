import { useState, useEffect } from "react";

interface TypeWriterProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {strings[index].substring(0, subIndex)}
      <span className="inline-block w-2 h-4 bg-terminal animate-cursor-blink ml-0.5 align-middle" />
    </span>
  );
}
