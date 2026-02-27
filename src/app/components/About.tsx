import { Users, Target, Zap, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../context/ThemeContext";
import carImage from "../../assets/ef647e0ff9253b862bc2f8eeca9c8026b22b9fc1.png";

export function About() {
  const { colors } = useTheme();
  
  const team = [
    { name: "Secret Agent Man", role: "Creative Director", specialty: "Connecting The Dots" },
    { name: "Bowie Deshazzo (?)", role: "Principal Photographer?", specialty: "Being Good at Stuff" },
    { name: "Coady Shmoady", role: "Principal Videographer", specialty: "Rolling Strapped" },
    { name: "Molly Shmolly", role: "Social Media Expert", specialty: "Biking and Posting" },
  ];

  const values = [
    {
      icon: Zap,
      title: "LIGHTNING",
      description: "We'll zap you.",
    },
    {
      icon: Target,
      title: "TARGETS",
      description: "We'll meet them.",
    },
    {
      icon: Shield,
      title: "PROTECTION",
      description: "We protect from various metaphysical entities.",
    },
    {
      icon: Users,
      title: "PEOPLE",
      description: "We've seen a couple.",
    },
  ];

  return (
    <div className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
              }}
            >
              ABOUT .E<span className="text-red-500">x</span>E
            </span>
          </h1>
          <div
            className="w-32 h-px mx-auto mb-8"
            style={{
              background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)`,
            }}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a digital media company.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative">
            <div
              className="relative border p-2 bg-black/40"
              style={{ borderColor: `rgba(${colors.primaryRgb}, 0.5)` }}
            >
              <ImageWithFallback
                src={carImage}
                alt="Futuristic technology"
                className="w-full h-[400px] object-cover"
              />
              {/* Corner brackets */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: colors.primary }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: colors.secondary }}
              />
            </div>
            {/* Glow effect */}
            <div
              className="absolute -inset-4 blur-2xl -z-10"
              style={{
                background: `linear-gradient(to bottom right, rgba(${colors.primaryRgb}, 0.2), rgba(${colors.secondaryRgb}, 0.2))`,
              }}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl tracking-wider" style={{ color: colors.primary }}>
              OUR STORY
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We're a company.
            </p>
            <p className="text-gray-400 leading-relaxed">
              That does media stuff.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4" style={{ color: colors.primary }}>
                <div
                  className="flex-1 h-px"
                  style={{ background: `linear-gradient(to right, ${colors.primary}, transparent)` }}
                />
                <span className="text-sm tracking-wider">EST. 2022</span>
                <div
                  className="flex-1 h-px"
                  style={{ background: `linear-gradient(to left, ${colors.primary}, transparent)` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl mb-12 text-center tracking-wider">
            OUR <span style={{ color: colors.secondary }}>VALUES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative p-6 border transition-all bg-black/40 backdrop-blur-sm group"
                style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
              >
                <div
                  className="absolute top-0 right-0 w-16 h-16"
                  style={{
                    background: `linear-gradient(to bottom right, rgba(${colors.primaryRgb}, 0.2), transparent)`,
                  }}
                />
                <value.icon
                  className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform"
                  style={{ color: colors.primary }}
                />
                <h3 className="text-lg mb-3 tracking-wider">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}</div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl mb-12 text-center tracking-wider">
            THE <span style={{ color: colors.primary }}>TEAM</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div
                  className="relative border p-6 bg-black/40 transition-all"
                  style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
                >
                  {/* Avatar placeholder */}
                  <div
                    className="w-24 h-24 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: colors.primary,
                      background: `linear-gradient(to bottom right, rgba(${colors.primaryRgb}, 0.2), rgba(${colors.secondaryRgb}, 0.2))`,
                    }}
                  >
                    <Users className="w-10 h-10" style={{ color: colors.primary }} />
                  </div>
                  
                  <h3 className="text-lg text-center mb-2 tracking-wider">{member.name}</h3>
                  <p className="text-sm text-center mb-2" style={{ color: colors.primary }}>
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 text-center">{member.specialty}</p>

                  {/* Hover effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom right, rgba(${colors.primaryRgb}, 0.1), rgba(${colors.secondaryRgb}, 0.1))`,
                    }}
                  />
                </div>
                
                {/* Corner accents */}
                <div
                  className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: colors.secondary }}
                />
                <div
                  className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: colors.secondary }}
                />
              </div>
            ))}</div>
        </div>
      </div>
    </div>
  );
}