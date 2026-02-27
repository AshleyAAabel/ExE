import { Outlet, Link, useLocation } from "react-router";
import { Terminal, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Root() {
  const location = useLocation();
  const { theme, toggleTheme, colors } = useTheme();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cyberpunk grid background */}
      <div
        className="fixed inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)] pointer-events-none"
        style={{
          backgroundImage: theme === "cool"
            ? "linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)"
            : theme === "warm"
            ? "linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)"
            : "linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,100,255,0.1) 1px, transparent 1px)",
        }}
      />

      {/* Vignette overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      {/* Navigation */}
      <nav
        className="relative border-b backdrop-blur-sm bg-black/50"
        style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Terminal
                className="w-6 h-6 transition-colors"
                style={{ color: colors.primary }}
              />
              <span
                className="text-2xl tracking-wider transition-colors"
                style={{ color: '#fff' }}
              >
                .E<span className="text-red-500">x</span>E
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleTheme();
                }}
                className="cursor-pointer"
                aria-label="Toggle theme"
              >
                <Zap
                  className="w-4 h-4 animate-pulse hover:scale-110 transition-transform"
                  style={{ color: colors.secondary }}
                />
              </button>
            </Link>

            {/* Nav Links */}
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative tracking-wider text-sm transition-all text-gray-400 hover:text-white"
                  style={isActive(item.path) ? { color: colors.primary } : {}}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.path) && (
                    <>
                      <span
                        className="absolute inset-0 blur-xl"
                        style={{ backgroundColor: `rgba(${colors.primaryRgb}, 0.2)` }}
                      />
                      <span
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{
                          background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)`,
                        }}
                      />
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="relative border-t backdrop-blur-sm bg-black/50 mt-20"
        style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <p>© 2026 .E<span className="text-red-500">x</span>E Media Company. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Powered by <span style={{ color: colors.primary }}>cyberpunk.tech</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}