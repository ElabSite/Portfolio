import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import profileImg from "@/assets/jean_albaladejo.jpg";
import { achievements } from "@/data/achievements";
import { getTechnicalSkills, getHumanSkills } from "@/data/skills";

interface NavChild {
  label: string;
  path: string;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  path: string;
  selfLabel?: string;
  children?: NavChild[];
}

const technicalSkills = getTechnicalSkills();
const humanSkills = getHumanSkills();

const mainNavItems: NavItem[] = [
  {
    label: "Accueil",
    path: "/",
    children: [
      { label: "Présentation", path: "/about" },
      { label: "Parcours", path: "/career" },
    ],
  },
  {
    label: "Compétences",
    path: "/skills",
    selfLabel: "Vue d'ensemble",
    children: [
      {
        label: "Compétences techniques",
        path: "#tech",
        children: technicalSkills.map((s) => ({ label: s.name, path: `/skills/${s.id}` })),
      },
      {
        label: "Compétences humaines",
        path: "#human",
        children: humanSkills.map((s) => ({ label: s.name, path: `/skills/${s.id}` })),
      },
    ],
  },
  {
    label: "Réalisations",
    path: "/achievements",
    selfLabel: "Vue d'ensemble",
    children: achievements.map((a) => ({
      label: a.name,
      path: `/achievements/${a.id}`,
    })),
  },
  { label: "Contact", path: "/contact" },
];

const allPaths = (item: NavItem | NavChild): string[] => {
  const paths = [item.path];
  item.children?.forEach((c) => paths.push(...allPaths(c)));
  return paths;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedSubs, setExpandedSubs] = useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = useState<Set<string>>(new Set());
  const location = useLocation();
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setExpandedSubs(new Set());
    setMobileOpen(new Set());
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setExpandedSubs(new Set());
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActiveParent = (item: NavItem) => allPaths(item).includes(location.pathname);

  const toggleDropdown = (path: string) => {
    setOpenDropdown((prev) => (prev === path ? null : path));
    setExpandedSubs(new Set());
  };

  const toggleExpanded = (key: string) => {
    setExpandedSubs((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleMobile = (key: string) => {
    setMobileOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const linkClass = (path: string) =>
    `block px-4 py-2 text-sm transition-colors cursor-pointer ${
      location.pathname === path
        ? "text-terminal bg-terminal/10"
        : "text-muted-foreground hover:text-foreground hover:bg-muted"
    }`;

  const mobileLinkClass = (path: string) =>
    `block px-3 py-2 rounded-md text-sm transition-colors ${
      location.pathname === path
        ? "text-terminal bg-terminal/10"
        : "text-muted-foreground hover:text-foreground hover:bg-muted"
    }`;

  const disabledClass =
    "block px-4 py-2 text-sm text-muted-foreground opacity-60 cursor-not-allowed select-none";

  const mobileDisabledClass =
    "block px-3 py-2 rounded-md text-sm text-muted-foreground opacity-60 cursor-not-allowed select-none";

  const isAccueil = (path: string) => path === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={profileImg}
            alt="Jean Albaladejo"
            className="h-10 w-10 rounded-full border-2 terminal-border object-cover"
          />
          <div className="hidden sm:block">
            <span className="font-display text-sm font-semibold text-foreground group-hover:text-gradient transition-colors">
              Jean Albaladejo
            </span>
            <span className="block text-xs text-muted-foreground">
              Expert en ingénierie logicielle
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul ref={navRef} className="hidden md:flex items-center gap-1">
          {mainNavItems.map((item) =>
            item.children ? (
              <li key={item.path} className="relative">
                {/* Only allow Accueil to toggle/open dropdown */}
                <button
                  onClick={() => (isAccueil(item.path) ? toggleDropdown(item.path) : undefined)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActiveParent(item)
                      ? "text-terminal"
                      : "text-muted-foreground hover:text-foreground"
                  } ${isAccueil(item.path) ? "" : "opacity-60 cursor-not-allowed"}`}
                  aria-disabled={!isAccueil(item.path)}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.path ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isActiveParent(item) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1 right-1 h-0.5 bg-terminal rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <AnimatePresence>
                  {openDropdown === item.path && isAccueil(item.path) && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-1 min-w-[240px] max-h-[75vh] overflow-y-auto glass border rounded-md shadow-lg z-50"
                    >
                      {/* Disable all submenu links (Présentation/Parcours) */}
                      {item.children.map((child) => (
                        <span key={child.path} className={disabledClass} aria-disabled="true">
                          {child.label}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.path}>
                {isAccueil(item.path) ? (
                  <Link
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "text-terminal"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1 right-1 h-0.5 bg-terminal rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <span className="relative px-3 py-2 text-sm font-medium rounded-md text-muted-foreground opacity-60 cursor-not-allowed select-none">
                    {item.label}
                  </span>
                )}
              </li>
            )
          )}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {mainNavItems.map((item) =>
                item.children ? (
                  <li key={item.path}>
                    <button
                      onClick={() => (isAccueil(item.path) ? toggleMobile(item.path) : undefined)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveParent(item)
                          ? "text-terminal bg-terminal/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      } ${isAccueil(item.path) ? "" : "opacity-60 cursor-not-allowed"}`}
                      aria-disabled={!isAccueil(item.path)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileOpen.has(item.path) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileOpen.has(item.path) && isAccueil(item.path) && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <span className={mobileDisabledClass} aria-disabled="true">
                                {child.label}
                              </span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.path}>
                    {isAccueil(item.path) ? (
                      <Link
                        to={item.path}
                        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? "text-terminal bg-terminal/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={mobileDisabledClass} aria-disabled="true">
                        {item.label}
                      </span>
                    )}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}