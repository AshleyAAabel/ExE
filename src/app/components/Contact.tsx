import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function Contact() {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: "EMAIL", value: "contact@exe.media", href: "mailto:contact@exe.media" },
    { icon: Phone, label: "PHONE", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "LOCATION", value: "Silicon Valley, CA", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

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
              GET IN TOUCH
            </span>
          </h1>
          <div
            className="w-32 h-px mx-auto mb-8"
            style={{
              background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)`,
            }}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's start a conversation about your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 relative">
            <div
              className="border p-8 bg-black/40 backdrop-blur-sm"
              style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
            >
              {/* Corner brackets */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2"
                style={{ borderColor: colors.primary }}
              />
              <div
                className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2"
                style={{ borderColor: colors.primary }}
              />
              <div
                className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2"
                style={{ borderColor: colors.secondary }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2"
                style={{ borderColor: colors.secondary }}
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm tracking-wider mb-2"
                    style={{ color: colors.primary }}
                  >
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 outline-none transition-colors text-white"
                    style={{
                      borderColor: '#374151',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.primary;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                    }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm tracking-wider mb-2"
                    style={{ color: colors.primary }}
                  >
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 outline-none transition-colors text-white"
                    style={{
                      borderColor: '#374151',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.primary;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm tracking-wider mb-2"
                    style={{ color: colors.primary }}
                  >
                    COMPANY
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 outline-none transition-colors text-white"
                    style={{
                      borderColor: '#374151',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.primary;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                    }}
                    placeholder="Your company"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm tracking-wider mb-2"
                    style={{ color: colors.primary }}
                  >
                    SERVICE INTERESTED IN
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 outline-none transition-colors text-white"
                    style={{
                      borderColor: '#374151',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.primary;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="visual-effects">Visual Effects</option>
                    <option value="interactive">Interactive Media</option>
                    <option value="animation">Animation</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm tracking-wider mb-2"
                    style={{ color: colors.primary }}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 outline-none transition-colors text-white resize-none"
                    style={{
                      borderColor: '#374151',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.primary;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                    }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 border transition-all tracking-wider flex items-center justify-center gap-2"
                  style={
                    submitted
                      ? {
                          backgroundColor: '#10b981',
                          borderColor: '#10b981',
                        }
                      : {
                          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                          borderColor: 'transparent',
                          boxShadow: `0 0 30px rgba(${colors.primaryRgb}, 0.3)`,
                        }
                  }
                >
                  {submitted ? (
                    <>MESSAGE SENT!</>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group flex items-start gap-4 p-6 border transition-all bg-black/40 backdrop-blur-sm"
                style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center border transition-colors"
                  style={{
                    borderColor: colors.primary,
                  }}
                >
                  <info.icon className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 tracking-wider mb-1">
                    {info.label}
                  </div>
                  <div className="text-lg transition-colors" style={{ color: '#fff' }}>
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div
              className="border p-8 bg-black/40 backdrop-blur-sm"
              style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
            >
              <h3 className="text-xl tracking-wider mb-6" style={{ color: colors.primary }}>
                FOLLOW US
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group w-12 h-12 border flex items-center justify-center transition-all"
                    style={{
                      borderColor: '#374151',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary;
                      e.currentTarget.style.backgroundColor = `rgba(${colors.primaryRgb}, 0.2)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#374151';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <social.icon
                      className="w-5 h-5 transition-colors"
                      style={{ color: '#6b7280' }}
                      onMouseEnter={(e) => {
                        (e.target as SVGElement).style.color = colors.primary;
                      }}
                      onMouseLeave={(e) => {
                        (e.target as SVGElement).style.color = '#6b7280';
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="border p-8 bg-black/40 backdrop-blur-sm"
              style={{ borderColor: `rgba(${colors.primaryRgb}, 0.3)` }}
            >
              <h3 className="text-xl tracking-wider mb-6" style={{ color: colors.primary }}>
                BUSINESS HOURS
              </h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 - 14:00</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div
              className="relative p-6 border"
              style={{
                borderColor: `rgba(${colors.secondaryRgb}, 0.5)`,
                background: `linear-gradient(to bottom right, rgba(${colors.secondaryRgb}, 0.1), transparent)`,
              }}
            >
              <div
                className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 animate-pulse"
                style={{ borderColor: colors.secondary }}
              />
              <div
                className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 animate-pulse"
                style={{ borderColor: colors.secondary }}
              />
              <p className="text-sm text-gray-400">
                <span style={{ color: colors.secondary }}>⚡ Quick Response:</span> We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
