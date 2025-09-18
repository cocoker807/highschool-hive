import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Education",
      links: [
        { label: "High School Courses", href: "#courses" },
        { label: "AP Programs", href: "#" },
        { label: "College Prep", href: "#" },
        { label: "Online Learning", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Student Portal", href: "#" },
        { label: "Academic Support", href: "#" },
        { label: "Counseling", href: "#" },
        { label: "Help Center", href: "#" }
      ]
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "#about" },
        { label: "Faculty", href: "#" },
        { label: "Careers", href: "#" },
        { label: "News", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Campus Tour", href: "#" },
        { label: "Events", href: "#" },
        { label: "Alumni", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EduHigh</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering students to reach their full potential through innovative education 
              and personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-background/70 hover:text-primary transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-background">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © {currentYear} EduHigh. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;