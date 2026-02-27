import { Link } from "react-router";
import { ArrowRight, Code, Sparkles, Cpu } from "lucide-react";
import heroImage from "../../assets/HomePageExE.gif";
import { useTheme } from "../context/ThemeContext";

export function Homepage() {
  const { colors } = useTheme();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Cyberpunk car with neon lights"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Glitch effect title */}
          <div className="mb-6 inline-block">
            <h1 className="text-7xl md:text-9xl tracking-wider mb-4 relative">
              <span className="absolute inset-0 opacity-70 animate-pulse" style={{ color: colors.primary }}>.E<span className="text-red-500">x</span>E</span>
              <span className="absolute inset-0 opacity-70 blur-sm" style={{ color: colors.secondary }}>.E<span className="text-red-500">x</span>E</span>
              <span className="relative text-white">.E<span className="text-red-500">x</span>E</span>
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Built with Metal. Made by Soul. I think?
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/portfolio"
              className="group relative px-8 py-4 transition-all overflow-hidden"
              style={{
                backgroundColor: `rgba(${colors.primaryRgb}, 0.2)`,
                borderWidth: '1px',
                borderColor: colors.primary,
              }}
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wider">
                VIEW PORTFOLIO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span
                className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: `rgba(${colors.primaryRgb}, 0.2)` }}
              />
            </Link>

            <Link
              to="/contact"
              className="group relative px-8 py-4 transition-all overflow-hidden"
              style={{
                borderWidth: '1px',
                borderColor: colors.secondary,
              }}
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wider">
                GET IN TOUCH
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <span
                className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: `rgba(${colors.secondaryRgb}, 0.2)` }}
              />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: colors.primary }}>
          <div
            className="w-px h-16"
            style={{ background: `linear-gradient(to bottom, ${colors.primary}, transparent)` }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
            >
              OUR CAPABILITIES
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "DIGITAL PRODUCTION",
                description: "Cutting-edge visual effects, animation, and post-production services that push the boundaries of digital media.",
              },
              {
                icon: Cpu,
                title: "INTERACTIVE MEDIA",
                description: "Immersive experiences across platforms, from web to AR/VR, designed to captivate and engage audiences.",
              },
              {
                icon: Sparkles,
                title: "CREATIVE DIRECTION",
                description: "Strategic vision and artistic excellence combined to bring your brand's story to life in the digital age.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 border transition-all bg-black/40 backdrop-blur-sm overflow-hidden"
                style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
              >
                {/* Corner accents */}
                <div
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
                  style={{ borderColor: colors.secondary }}
                />
                <div
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
                  style={{ borderColor: colors.secondary }}
                />

                <service.icon
                  className="w-12 h-12 mb-6 transition-colors"
                  style={{ color: colors.primary }}
                />
                <h3 className="text-xl mb-4 tracking-wider">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                {/* Hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom right, rgba(${colors.primaryRgb}, 0.1), rgba(${colors.secondaryRgb}, 0.1))`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative p-12 border backdrop-blur-sm"
            style={{
              borderColor: `rgba(${colors.primaryRgb}, 0.5)`,
              background: `linear-gradient(to bottom right, rgba(${colors.primaryRgb}, 0.1), rgba(${colors.secondaryRgb}, 0.1))`,
            }}
          >
            {/* Animated corner brackets */}
            <div
              className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 animate-pulse"
              style={{ borderColor: colors.primary }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 animate-pulse"
              style={{ borderColor: colors.primary }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 animate-pulse"
              style={{ borderColor: colors.secondary }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 animate-pulse"
              style={{ borderColor: colors.secondary }}
            />

            <h2 className="text-3xl md:text-4xl mb-6 tracking-wide">
              READY TO <span style={{ color: colors.primary }}>EXECUTE</span> YOUR VISION?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's collaborate and create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 transition-all tracking-wider"
              style={{
                background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                boxShadow: `0 0 30px rgba(${colors.primaryRgb}, 0.5)`,
              }}
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}