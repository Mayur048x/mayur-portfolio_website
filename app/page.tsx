"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Home,
  GraduationCap,
  Award,
  Briefcase,
  ChartLine,
  Play,
  Wand2,
  Paintbrush,
  Rocket,
  ImageIcon,
  Film,
  Music,
  SlidersHorizontal,
  Bot,
  Code,
  Palette,
  UserRoundCog,
  Boxes,
  Lightbulb,
} from "lucide-react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 selection:text-white">
      {/* Navigation */}
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* AI Video Section */}
      <AIVideoSection />

      {/* Education & Experience */}
      <EducationExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrolled,
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  scrolled: boolean
}) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 transition-shadow ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="#" className="font-display font-bold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-[#00f5a0] via-[#00d9f9] to-[#a855f7] bg-clip-text text-transparent">
              MR
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="#about" className="nav-link hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="nav-link hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="nav-link hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#ai-video" className="nav-link hover:text-white transition-colors">
              AI Video
            </Link>
            <Link href="#contact" className="nav-link hover:text-white transition-colors">
              Contact
            </Link>
          </div>
<a
                href="https://cal.com/kairo.aii"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-all"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </a>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#ai-video"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              AI Video
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  const revealRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-pattern">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10" ref={revealRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-gray-400">Available for opportunities</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Mayur
              <br />
              <span className="bg-gradient-to-r from-[#00f5a0] via-[#00d9f9] to-[#a855f7] bg-clip-text text-transparent">
                Ramchandani
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Designing AI-powered workflow systems that turn chaotic operations into structured execution.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#projects"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-black hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
<a
                  href="https://wa.me/9588651689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all"
                >
                  Get in Touch
                </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="font-display text-3xl font-bold bg-gradient-to-r from-[#00f5a0] via-[#00d9f9] to-[#a855f7] bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold bg-gradient-to-r from-[#00f5a0] via-[#00d9f9] to-[#a855f7] bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-gray-500">Projects Built</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold bg-gradient-to-r from-[#00f5a0] via-[#00d9f9] to-[#a855f7] bg-clip-text text-transparent">
                  &infin;
                </div>
                <div className="text-sm text-gray-500">Curiosity</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`order-1 lg:order-2 flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Gradient Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-purple-500 rounded-3xl blur-2xl opacity-30" />

              {/* Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden gradient-border bg-[#111111]">
                <Image
                  src="/images/mayur-profile.jpg"
                  alt="Mayur Ramchandani"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 bg-[#111111] rounded-xl border border-white/10 floating"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">AI Builder</span>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#111111] rounded-xl border border-white/10 floating"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <ChartLine className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">Product Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function RevealWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <RevealWrapper>
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Building systems that turn{" "}
              <span className="bg-gradient-to-r from-[#00f5a0] via-[#00d9f9] to-[#a855f7] bg-clip-text text-transparent">
                chaos into clarity
              </span>
            </h2>
          </RevealWrapper>

          <RevealWrapper className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              I build AI-powered operational systems that turn chaotic team workflows into structured, automated execution.
            </p>
            <p>
              Over the past year, I’ve been focused on {" "}
              <span className="text-white font-medium">designing real-world automation infrastructure using AI</span>
               ,workflow orchestration, backend systems, and conversational interfaces.
                My work combines product thinking with execution building systems that can assign tasks, manage dependencies, 
                automate approvals, handle submissions, and coordinate teams through natural language interactions.
            </p>
            <p>
              Recently, I designed a{" "}
              <span className="text-white font-medium">WhatsApp-based execution system</span> that converts
              documents, and messages into structured tasks with tracking and manager visibility.
              This project taught me the power of building systems that live where people already work.
            </p>
            <p>
              I enjoy solving operational problems, designing scalable systems, and turning complex processes into seamless user experiences.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skills = [
    {
      icon: Boxes,
      title: "Product & Workflow Architecture",
      color: "emerald",
      items: ["Task lifecycle systems", "Dependency & approval workflows", "Process optimization", "Operational system design", "Real-world workflow mapping"],
    },
    {
      icon: Bot,
      title: "AI Systems & Automation",
      color: "cyan",
      items: ["AI workflow orchestration", "Conversational task systems", "Prompt engineering & logic design", "Multi-step automation pipelines", "AI-assisted operational workflows"],
    },
    {
      icon: Code,
      title: "Backend & Integrations",
      color: "purple",
      items: ["REST APIs & webhooks", "Supabase & database architecture", "WhatsApp & Twilio integrations", "Authentication & secure upload flows", "Deployment & system integrations"],
    },
  ]

  const colorClasses: Record<string, { bg: string; border: string; text: string; check: string }> = {
    emerald: {
      bg: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      check: "text-emerald-500/60",
    },
    cyan: {
      bg: "from-cyan-500/20 to-cyan-600/20",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      check: "text-cyan-500/60",
    },
    purple: {
      bg: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/20",
      text: "text-purple-400",
      check: "text-purple-500/60",
    },
    amber: {
      bg: "from-amber-500/20 to-amber-600/20",
      border: "border-amber-500/20",
      text: "text-amber-400",
      check: "text-amber-500/60",
    },
    pink: {
      bg: "from-pink-500/20 to-pink-600/20",
      border: "border-pink-500/20",
      text: "text-pink-400",
      check: "text-pink-500/60",
    },
    blue: {
      bg: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/20",
      text: "text-blue-400",
      check: "text-blue-500/60",
    },
  }

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Core Skills</h2>
        </RevealWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const colors = colorClasses[skill.color]
            const Icon = skill.icon
            return (
              <RevealWrapper
                key={skill.title}
                className={`skill-card rounded-2xl p-8 card-hover`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 border ${colors.border}`}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className={`w-3 h-3 ${colors.check}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            Systems and solutions I&apos;ve built to solve real-world problems.
          </p>
        </RevealWrapper>

        {/* WhatsApp Execution System */}
        <RevealWrapper className="mb-12">
          <div className="group relative bg-[#111111] rounded-3xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="grid lg:grid-cols-2 gap-8 items-center">

              {/* LEFT - Text Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    Operations Infrastructure
                  </div>
                </div>

                <h3 className="font-display text-3xl font-bold mb-4">AI Operations System</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  An AI-powered operational system that transforms WhatsApp communication into structured
                  task execution, automated workflows, and real-time project coordination.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Key Capabilities</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Extract tasks from messages & voice",
                      "Auto-organize into projects",
                      "Context-aware task assignment",
                      "Manager visibility dashboard",
                      "Automated follow-ups",
                      "Meeting scheduling",
                    ].map((capability) => (
                      <div key={capability} className="flex items-center gap-3 text-gray-400 text-sm">
                        <Check className="w-4 h-4 text-emerald-400/60" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT - Video */}
              <div className="p-6 lg:p-10 flex items-center justify-center">
                <div className="relative w-full rounded-2xl bg-gradient-to-br from-emerald-500/10 via-[#0f1f17] to-cyan-500/10 border border-emerald-500/20 p-4 shadow-[0_0_60px_rgba(16,185,129,0.08)]">

                  {/* Glow blobs */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Fake browser bar */}
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    <div className="ml-3 flex-1 h-5 rounded bg-white/5 border border-white/10" />
                  </div>

                  {/* Video */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                      <iframe
                        src="https://player.vimeo.com/video/1190038553?badge=0&autopause=0&player_id=0&app_id=58479&muted=1"
                        frameBorder={0}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        title="0428(4)"
                        allowFullScreen
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
function AIVideoSection() {
  const tools = [
    { icon: ImageIcon, label: "Image Gen", color: "text-purple-400", hover: "hover:border-purple-500/30" },
    { icon: Film, label: "Video Gen", color: "text-cyan-400", hover: "hover:border-cyan-500/30" },
    { icon: Music, label: "Audio Gen", color: "text-pink-400", hover: "hover:border-pink-500/30" },
    { icon: SlidersHorizontal, label: "Post-Production", color: "text-emerald-400", hover: "hover:border-emerald-500/30" },
  ]

  return (
    <section id="ai-video" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <RevealWrapper className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Creative AI
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">AI Media Automation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            

          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div className="relative max-w-5xl mx-auto">
            {/* Video Container */}
            <div className="video-container rounded-3xl p-1 bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
              <div className="bg-[#111111] rounded-[calc(1.5rem-4px)] overflow-hidden">
                {/* Actual Video */}
                <div className="relative">
                  <video
                    className="w-full aspect-video object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/ai-personalized-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay labels - only shown when video is not playing */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold backdrop-blur-sm">
                        AI Generated
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-xs backdrop-blur-sm">
                        Personalized Animation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Details */}
                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Wand2 className="w-4 h-4 text-purple-400" />
                      Tools Used
                    </h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>Claude AI</li>
                      <li>Open AI</li>
                      <li>Veo 3.1</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Paintbrush className="w-4 h-4 text-cyan-400" />
                      Creative Process
                    </h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>Creative Direction</li>
                      <li>Story Design</li>
                      <li>Content Personalization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-emerald-400" />
                      Outcome
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      A fully personalized animated video showcasing the power of generative AI in creative
                      media production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* AI Tools Grid */}
        <RevealWrapper className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.label}
                className={`text-center p-6 rounded-2xl bg-white/5 border border-white/5 ${tool.hover} transition-colors`}
              >
                <Icon className={`w-8 h-8 ${tool.color} mx-auto mb-3`} />
                <div className="text-sm font-medium">{tool.label}</div>
              </div>
            )
          })}
        </RevealWrapper>
      </div>
    </section>
  )
}

function EducationExperienceSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <RevealWrapper>
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Background
            </span>
            <h2 className="font-display text-3xl font-bold mb-8">Education</h2>

            <div className="space-y-6">
              <div className="group p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-emerald-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-500 text-sm">2026-</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">BCA Ongoing Fy</h3>
                <p className="text-gray-400 text-sm mb-3">D.Y Patil</p>
                <div className="flex items-center gap-2"></div>
              </div>

              <div className="group p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-500 text-sm">2024 - 2026</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">HSC - Commerce</h3>
                <p className="text-gray-400 text-sm mb-3">RK.Talreja College</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                    64% Marks
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">
                    2026
                  </span>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">SSC</h3>
                <p className="text-gray-400 text-sm mb-3">Welfare High School</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">
                    66% Marks
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">
                    2024
                  </span>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Experience */}
          <RevealWrapper>
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="font-display text-3xl font-bold mb-8">Work</h2>

            <div className="space-y-6">
              <div className="group p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      Full-Time
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">
                      2 Years 7 Months
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1">Insurance Entrepreneur</h3>
                <p className="text-gray-400 text-sm mb-3">Universal Sompo General Insurance</p>
                <ul className="space-y-2 text-gray-500 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 text-cyan-500/60 mt-1" />
                    Building relationships with agents
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 text-cyan-500/60 mt-1" />
                    Conducting cold calls & sales
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 text-cyan-500/60 mt-1" />
                    Partnership building for business growth
                  </li>
                </ul>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <RevealWrapper className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Open to opportunities in product, AI systems, and automation. Let&apos;s build something amazing.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div className="bg-[#111111] rounded-3xl p-8 md:p-12 border border-white/5">
            <div className="grid md:grid-cols-2 gap-12">
              {/* LEFT SIDE */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-8 text-white">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* EMAIL */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=itzmemayur04@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-white font-medium">itzmemayur04@gmail.com</p>
                    </div>
                  </a>

                  {/* PHONE */}
                  <a
                    href="https://wa.me/+919588651689"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-white font-medium">+91 95886 51689</p>
                    </div>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-white font-medium">Ulhasnagar, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-8 text-white">
                  Connect
                </h3>

                <div className="space-y-6">
                  {/* GITHUB */}
                  <a
                    href="https://github.com/Mayur048x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <p className="text-white font-medium">Mayur048x</p>
                    </div>
                  </a>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/mayur-ramchandani-571bb3307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="text-white font-medium">Mayur Ramchandani</p>
                    </div>
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com/Mayur_048x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Instagram</p>
                      <p className="text-white font-medium">@Mayur_048x</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl bg-gradient-to-r from-[#00f5a0] via-[#00d9f9] to-[#a855f7] bg-clip-text text-transparent">
              MR
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400 text-sm">Mayur Ramchandani</span>
          </div>

          <p className="text-gray-500 text-sm">Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}