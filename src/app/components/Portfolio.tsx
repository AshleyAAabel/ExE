import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../context/ThemeContext";
import neonDreamsImage from "../../assets/64e2adffb24eed4513b1088cc77e00fe10a8c3e8.png";
import goodSoupImage from "../../assets/ef647e0ff9253b862bc2f8eeca9c8026b22b9fc1.png";
import lexusGIF from "../../assets/AQNcgrvVpYvcoXlZLFzez9ci6TqaDtS7DOlbSQOPyrHS5-SAvQLR25_SmH1XijoRusPpKKAsmZw8fyRnDIeWDlOL.gif"
import flyerGraphic from "../../assets/531170789_17975852693868748_5890785563965789603_n.jpg"
import sickEvent from "../../assets/AQMH3Lia4K4ydZDzNvu6ZGN_f7_YEuzRvVYSAlAsKKJTpU2twC7g8RmLYdFksaZb-iyXv7pl53Yv7ICeoilJebfWmPmjuAKbWIkddps.gif"

export function Portfolio() {
  const { colors } = useTheme();
  const [filter, setFilter] = useState("all");

  const categories = ["all", "photography", "videography", "design", "events"];

  const projects = [
    {
      id: 1,
      title: "NEON DREAMS",
      category: "photography",
      client: "REAPER",
      year: "2024",
      description: "Light painting shoot with neon focus",
      image: neonDreamsImage
    },
    {
      id: 2,
      title: "GOOD SOUP",
      category: "photography",
      client: "@itssoup_",
      year: "2025",
      description: "Sick shots of a sick car outside of a 7-11",
      image: goodSoupImage,
    },
    {
      id: 3,
      title: "LEXOOS",
      category: "videography",
      client: "@dtx.realf",
      year: "2026",
      description: "Lexoooooooooooooos",
      image: lexusGIF
    },
    {
      id: 4,
      title: "FLY ASS FLYER",
      category: "design",
      client: "Wavura",
      year: "2025",
      description: "Sick ass flyer for a sick ass event",
      image: flyerGraphic
    },
    {
      id: 5,
      title: "SICK ASS EVENT",
      category: "events",
      client: "Wavura",
      year: "2025",
      description: "Sick ass event with a sick ass flyer",
      image: sickEvent,
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
              }}
            >
              PORTFOLIO
            </span>
          </h1>
          <div
            className="w-32 h-px mx-auto mb-8"
            style={{
              background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)`,
            }}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className="px-6 py-2 border transition-all tracking-wider text-sm"
              style={
                filter === category
                  ? {
                      borderColor: colors.primary,
                      backgroundColor: `rgba(${colors.primaryRgb}, 0.2)`,
                      color: colors.primary,
                      boxShadow: `0 0 20px rgba(${colors.primaryRgb}, 0.3)`,
                    }
                  : {
                      borderColor: '#374151',
                      color: '#6b7280',
                    }
              }
            >
              {category.toUpperCase().replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="relative overflow-hidden border transition-all bg-black/40"
                style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 bg-black/80 border backdrop-blur-sm"
                    style={{ borderColor: `rgba(${colors.primaryRgb}, 0.5)` }}
                  >
                    <span className="text-xs tracking-wider" style={{ color: colors.primary }}>
                      {project.category.toUpperCase().replace("-", " ")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl tracking-wider transition-colors group-hover:transition-colors">
                      <span style={{ color: 'inherit' }} className="group-hover:text-inherit">
                        {project.title}
                      </span>
                    </h3>
                    <ExternalLink
                      className="w-5 h-5 text-gray-600 transition-colors"
                      style={{ color: '#4b5563' }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{project.client}</span>
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: colors.primary }}
                    />
                    <span>{project.year}</span>
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Corner accents */}
                <div
                  className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: colors.secondary }}
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: colors.secondary }}
                />
              </div>

              {/* Glow effect */}
              <div
                className="absolute -inset-1 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                style={{
                  background: `linear-gradient(to bottom right, rgba(${colors.primaryRgb}, 0.2), rgba(${colors.secondaryRgb}, 0.2))`,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div
            className="inline-block p-8 border bg-black/40"
            style={{ borderColor: `rgba(${colors.primaryRgb}, 0.5)` }}
          >
            <p className="text-lg text-gray-400 mb-6">
              Interested in working together on your next project?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 transition-all tracking-wider"
              style={{
                background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
              }}
            >
              LET'S COLLABORATE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}