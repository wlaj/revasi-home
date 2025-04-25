import { cn } from "@/lib/utils";
import { ArrowUpRight, FlowerIcon } from "lucide-react";
import Link from "next/link";
import { SectionContainer } from "./section-container";
import { AnimatedGroup } from "./motion/animated-group";

const links = [
  // {
  //   group: "Product",
  //   items: [
  //     { title: "Features", href: "#" },
  //     { title: "Solution", href: "#" },
  //     { title: "Customers", href: "#" },
  //     { title: "Pricing", href: "#" },
  //     { title: "Help", href: "#" },
  //     { title: "About", href: "#" },
  //   ],
  // },
  // {
  //   group: "Solution",
  //   items: [
  //     { title: "Startup", href: "#" },
  //     { title: "Freelancers", href: "#" },
  //     { title: "Organizations", href: "#" },
  //     { title: "Students", href: "#" },
  //     { title: "Collaboration", href: "#" },
  //     { title: "Design", href: "#" },
  //     { title: "Management", href: "#" },
  //   ],
  // },
  // {
  //   group: "Company",
  //   items: [
  //     { title: "About", href: "#" },
  //     { title: "Careers", href: "#" },
  //     { title: "Blog", href: "#" },
  //     { title: "Press", href: "#" },
  //     { title: "Contact", href: "#" },
  //     { title: "Help", href: "#" },
  //   ],
  // },
  {
    group: "Legal",
    items: [
      { title: "License", href: "/license" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
      { title: "Cookies", href: "/cookies" },
      { title: "Security", href: "/security" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-muted text-foreground border-t border-muted/50">
      <SectionContainer className="py-16 md:py-24">
        <AnimatedGroup preset="slide" className="space-y-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-muted/40">
            {/* Brand */}
            <Link 
              href="/" 
              aria-label="go home" 
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="bg-primary/10 p-2 rounded-full">
                <FlowerIcon className="size-7 text-primary" />
              </div>
              <span className="text-2xl font-medium tracking-tight">Revasi</span>
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <SocialLinks />
              <div className="hidden md:block h-6 w-px bg-muted/50"></div>
              <Link 
                href="mailto:lucas@digics.net" 
                className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                Contact us
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 md:gap-16 md:grid-cols-4 xl:gap-20">
            <FooterLinks />
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 mt-10 border-t border-muted/40 text-sm text-foreground/70">
            <p>© {new Date().getFullYear()} Revasi. All rights reserved. Made by <Link href="https://digics.net" className="hover:text-foreground transition-colors">Digics</Link> with ❤️ in Indonesia</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
              <Link href="/license" className="hover:text-foreground transition-colors">License</Link>
              <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
            </div>
          </div>
        </AnimatedGroup>
      </SectionContainer>
    </footer>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {/* <SocialIcon href="#" aria-label="Twitter" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      } /> */}
      
      <SocialIcon href="https://github.com/Locavore-Group" aria-label="GitHub" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      } />
      
      <SocialIcon href="https://www.instagram.com/locavorenxt/" aria-label="Instagram" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      } />
      
      {/* <SocialIcon href="#" aria-label="LinkedIn" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      } /> */}
    </div>
  );
}

function SocialIcon({ href, icon, "aria-label": ariaLabel }: { href: string; icon: React.ReactNode; "aria-label": string }) {
  return (
    <Link 
      href={href}
      aria-label={ariaLabel}
      className="flex items-center justify-center size-10 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
    >
      {icon}
    </Link>
  );
}

function FooterLinks() {
  return (
    <>
      {links.map((group, i) => (
        <div key={i} className="space-y-5">
          <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground/70">{group.group}</h3>
          <ul className="space-y-3">
            {group.items.map((item, j) => (
              <li key={j}>
                <Link 
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                >
                  <span>{item.title}</span>
                  <span className="inline-block ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    <ArrowUpRight className="size-3" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
