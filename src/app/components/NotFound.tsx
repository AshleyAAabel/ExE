import { Link } from "react-router";
import { Home, AlertTriangle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function NotFound() {
  const { colors } = useTheme();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8 relative">
          <h1 className="text-[150px] md:text-[200px] tracking-wider relative">
            <span
              className="absolute inset-0 opacity-50 animate-pulse"
              style={{ color: colors.primary }}
            >
              404
            </span>
            <span
              className="absolute inset-0 opacity-50 blur-sm animate-pulse"
              style={{ color: colors.secondary, animationDelay: '0.1s' }}
            >
              404
            </span>
            <span className="relative text-white">404</span>
          </h1>
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 animate-pulse" style={{ color: colors.primary }} />
          <h2 className="text-3xl tracking-wider">PAGE NOT FOUND</h2>
          <AlertTriangle className="w-8 h-8 animate-pulse" style={{ color: colors.secondary }} />
        </div>

        <p className="text-gray-400 mb-12 max-w-md mx-auto">
          The page you're looking for doesn't exist in our database. 
          It might have been moved or deleted.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 transition-all tracking-wider"
          style={{
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
            boxShadow: `0 0 30px rgba(${colors.primaryRgb}, 0.5)`,
          }}
        >
          <Home className="w-5 h-5" />
          RETURN HOME
        </Link>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-8">
          <div
            className="w-16 h-16 border animate-spin"
            style={{
              borderColor: colors.primary,
              animationDuration: '8s',
            }}
          />
          <div
            className="w-16 h-16 border animate-spin"
            style={{
              borderColor: colors.secondary,
              animationDuration: '6s',
              animationDirection: 'reverse',
            }}
          />
          <div
            className="w-16 h-16 border animate-spin"
            style={{
              borderColor: colors.primary,
              animationDuration: '10s',
            }}
          />
        </div>
      </div>
    </div>
  );
}
