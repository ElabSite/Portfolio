import { motion } from "framer-motion";
import { ArrowRight, Terminal, ChevronDown, Cpu, Users, Rocket } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import CyberGrid from "@/components/CyberGrid";
import GlitchText from "@/components/GlitchText";
import TypeWriter from "@/components/TypeWriter";
import HolographicCard from "@/components/HolographicCard";
import profileImg from "@/assets/profile-placeholder.jpg";
import { skills } from "@/data/skills";
import { achievements } from "@/data/achievements";

const terminalStrings = [
  "deploying excellence...",
  "building infrastructure...",
  "automating everything...",
  "shipping with confidence...",
  "monitoring at scale...",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
        {/* Cyber grid background */}
        <CyberGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Profile with pulse ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="relative inline-block pulse-ring">
              <div className="gradient-border rounded-full">
                <img
                  src={profileImg}
                  alt="Jean Albaladejo"
                  className="mx-auto h-36 w-36 rounded-full border-2 border-transparent object-cover glow-strong"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border terminal-border bg-terminal/5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal" />
              </span>
              <span className="font-display text-xs tracking-widest text-terminal uppercase">
                Expert en Ingénierie Logicielle
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-foreground leading-tight">
              Jean{" "}
              <GlitchText text="Albaladejo" className="text-gradient glow-text" />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2 font-body">
              Spécialiste DevOps — Construire des ponts entre le développement et les opérations
            </p>

            {/* Terminal line */}
            <div className="font-display text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2 bg-card/50 rounded-lg px-5 py-3 border terminal-border max-w-md mx-auto">
              <Terminal size={14} className="text-terminal shrink-0" />
              <span className="text-terminal">$</span>{" "}
              <TypeWriter strings={terminalStrings} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/skills"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-terminal text-primary-foreground font-display text-sm font-semibold hover:shadow-[0_0_30px_hsl(175_70%_50%/0.3)] transition-all duration-300"
            >
              Découvrir mes compétences
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/achievements"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border terminal-border text-foreground font-display text-sm font-semibold hover:bg-terminal/10 hover:border-terminal/40 transition-all duration-300"
            >
              Voir mes réalisations
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown size={24} className="text-terminal/50 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Quick overview with holographic cards */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Explorer mon profil
          </h2>
          <div className="h-1 w-12 bg-terminal rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Cpu size={22} className="text-terminal" />,
              title: "Compétences techniques",
              desc: "CI/CD, Infrastructure as Code, Conteneurisation, Monitoring, Cloud Computing",
              link: "/skills",
              delay: 0,
            },
            {
              icon: <Users size={22} className="text-accent" />,
              title: "Compétences humaines",
              desc: "Communication, Leadership, Résolution de problèmes, Adaptabilité, Esprit d'équipe",
              link: "/skills",
              delay: 0.1,
            },
            {
              icon: <Rocket size={22} className="text-terminal" />,
              title: "Mon parcours",
              desc: "Expériences professionnelles, formations et certifications qui ont forgé mon expertise.",
              link: "/career",
              delay: 0.2,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
            >
              <HolographicCard className="p-6 h-full text-center">
                <div className="hex-badge h-12 w-12 bg-terminal/10 flex items-center justify-center mb-5 mx-auto">
                  {card.icon}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 font-body">{card.desc}</p>
                <Link
                  to={card.link}
                  className="group inline-flex items-center gap-1 text-terminal text-sm font-display hover:underline"
                >
                  Explorer
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
