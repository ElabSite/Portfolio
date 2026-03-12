import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  disableTilt?: boolean;
}

export default function HolographicCard({ children, className = "", disableTilt = false }: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);
  const sheenX = useTransform(x, [0, 1], [0, 100]);
  const sheenY = useTransform(y, [0, 1], [0, 100]);
  const sheenBg = useTransform(
    [sheenX, sheenY],
    ([sx, sy]) =>
      `radial-gradient(circle at ${sx}% ${sy}%, hsla(175, 80%, 60%, 0.08) 0%, transparent 60%)`
  );

  const handleMouse = (e: React.MouseEvent) => {
    if (disableTilt) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={disableTilt ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className={`holographic-card relative overflow-hidden rounded-xl bg-card border transition-shadow ${className}`}
    >
      {!disableTilt && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-xl z-10"
          style={{ background: sheenBg }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
