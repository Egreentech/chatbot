import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "./ui/navigation-menu"
import { Brain } from "lucide-react"

const services = [
  { title: "AI Consulting", href: "/services/consulting", description: "Strategic guidance for AI implementation" },
  { title: "Digital Avatars", href: "/services/digital-avatars", description: "Lifelike AI-powered digital representatives" },
  { title: "AI Assistants", href: "/services/ai-assistants", description: "Tailored AI solutions for your business" },
  { title: "Voice Solutions", href: "/services/voice-solutions", description: "Advanced voice recognition and synthesis" },
  { title: "LLM Fine-tuning", href: "/services/llm-tuning", description: "Customize language models for your needs" },
  { title: "Prompt Engineering", href: "/services/prompt-engineering", description: "Optimize AI interactions and outputs" },
  { title: "AI Integration", href: "/services/integration", description: "Seamless AI implementation into your systems" }
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-accent-green" />
            <span className="font-display text-xl font-bold">AIAutoEye</span>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-green/20 hover:text-accent-green focus:bg-accent-green/20 focus:text-accent-green"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-primary/60 mt-1">
                            {service.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent-green/20 hover:text-accent-green focus:bg-accent-green/20 focus:text-accent-green focus:outline-none"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blog"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent-green/20 hover:text-accent-green focus:bg-accent-green/20 focus:text-accent-green focus:outline-none"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="/contact"
            className="rounded-full bg-accent-green px-6 py-2 font-medium text-primary transition-all hover:bg-accent-green/90 hover:shadow-lg"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </header>
  )
}