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
                <button
                  onClick={() => toggleDropdown(item.path)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActiveParent(item)
                      ? "text-terminal"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
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
                  {openDropdown === item.path && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-1 min-w-[240px] max-h-[75vh] overflow-y-auto glass border rounded-md shadow-lg z-50"
                    >
                      {item.selfLabel && item.path !== "/" && (
                        <>
                          <Link to={item.path} className={linkClass(item.path)}>
                            {item.selfLabel}
                          </Link>
                          <div className="h-px bg-border mx-2" />
                        </>
                      )}

                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.path}>
                            <button
                              onClick={() => toggleExpanded(child.path)}
                              className="flex items-center justify-between w-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {child.label}
                              <ChevronDown
                                size={12}
                                className={`transition-transform duration-200 ${
                                  expandedSubs.has(child.path) ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedSubs.has(child.path) && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="overflow-hidden bg-background/30"
                                >
                                  {child.children.map((sub) => (
                                    <Link
                                      key={sub.path}
                                      to={sub.path}
                                      className={`block pl-8 pr-4 py-1.5 text-sm transition-colors ${
                                        location.pathname === sub.path
                                          ? "text-terminal bg-terminal/10"
                                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                      }`}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link key={child.path} to={child.path} className={linkClass(child.path)}>
                            {child.label}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.path}>
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
                      onClick={() => toggleMobile(item.path)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveParent(item)
                          ? "text-terminal bg-terminal/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
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
                      {mobileOpen.has(item.path) && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.selfLabel && item.path !== "/" && (
                            <li>
                              <Link to={item.path} className={mobileLinkClass(item.path)}>
                                {item.selfLabel}
                              </Link>
                            </li>
                          )}
                          {item.children.map((child) =>
                            child.children ? (
                              <li key={child.path}>
                                <button
                                  onClick={() => toggleMobile(child.path)}
                                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                >
                                  {child.label}
                                  <ChevronDown
                                    size={12}
                                    className={`transition-transform duration-200 ${
                                      mobileOpen.has(child.path) ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {mobileOpen.has(child.path) && (
                                    <motion.ul
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="pl-4 overflow-hidden"
                                    >
                                      {child.children.map((sub) => (
                                        <li key={sub.path}>
                                          <Link to={sub.path} className={mobileLinkClass(sub.path)}>
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </li>
                            ) : (
                              <li key={child.path}>
                                <Link to={child.path} className={mobileLinkClass(child.path)}>
                                  {child.label}
                                </Link>
                              </li>
                            )
                          )}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.path}>
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
