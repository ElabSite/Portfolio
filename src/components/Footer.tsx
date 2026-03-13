import { Link } from "react-router-dom";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/jean_albaladejo.jpg";

export default function Footer() {
  return (
    <footer className="relative border-t terminal-border bg-card/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terminal/30 to-transparent" />

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={profileImg}
                alt="Jean Albaladejo"
                className="h-10 w-10 rounded-full border-2 terminal-border object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-terminal border-2 border-card" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">Jean Albaladejo</p>
              <p className="text-xs text-muted-foreground">Expert en Ingénierie Logicielle — Spécialiste DevOps</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "mailto:contact@jeanalbaladejo.dev", icon: <Mail size={16} />, label: "Email" },
              { href: "https://github.com/ajean73", icon: <Github size={16} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/jean-albaladejo-0b71111aa/", icon: <Linkedin size={16} />, label: "LinkedIn" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="h-9 w-9 rounded-lg bg-muted/50 border terminal-border flex items-center justify-center text-muted-foreground hover:text-terminal hover:bg-terminal/10 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-display">
            © {new Date().getFullYear()} Jean Albaladejo
          </p>
        </div>
      </div>
    </footer>
  );
}
