import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Venture Capital 101",
    short: "Learn the fundamentals of VC.",
    duration: "8 Weeks",
  },
  {
    id: 2,
    title: "Startup Idea Validation",
    short: "How to know if your idea is a winner.",
    duration: "4 Weeks",
  },
  {
    id: 3,
    title: "Growth Hacking Basics",
    short: "Scale your startup fast.",
    duration: "6 Weeks",
  },
];

const partners = [
  {
    id: 1,
    name: "247 VC",
    logo: "247vclogo.png", 
   
  },
  {
    id: 2,
    name: "BVC",
    logo: "BVClogo.png", 
    
  },
];

export default async function Home() {
  return (
    <div className="w-full bg-transparent">
      {/* Hero Section */}
      <section
        className="min-h-[90vh] bg-cover bg-center bg-fixed relative pt-10"
        style={{ backgroundImage: "url('/new-bg.jpeg')" }}
      >
        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 space-y-8">
          {/* Main Hero Content */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-5xl md:text-6xl font-extrabold text-white leading-tight">
                  Empowering
                </span>
                <span className="block text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
                  Innovators
                </span>
                <span className="block text-5xl md:text-6xl font-extrabold text-white leading-tight">
                  of Tomorrow
                </span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                E-Cell IIT BHU nurtures entrepreneurial spirit by organizing
                bootcamps, workshops, and courses designed to help students turn
                their ideas into impactful startups.
              </p>

              <div className="flex gap-4 flex-wrap pt-4">
                {/* Primary gradient button */}
                <Button asChild variant="default" size="lg" withArrow>
                  <Link href="/auth">Join Now</Link>
                </Button>

                {/* Outline style button */}
                <Button asChild variant="outline" size="lg">
                  <Link href="/course">Explore Courses</Link>
                </Button>
              </div>
            </div>

            <Card className="bg-zinc-900/80 backdrop-blur-md p-6 md:p-8 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg md:text-xl font-bold">
                  Why E-Cell IIT BHU?
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold text-lg">•</span>
                    <span>Learn from top founders & mentors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold text-lg">•</span>
                    <span>Hands-on startup building experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold text-lg">•</span>
                    <span>Access to exclusive networking events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 pb-40 md:pb-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-blue-100 bg-clip-text text-transparent border-b-2 border-blue-500/50 pb-4 inline-block">
          Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-2">
          {courses.map((c) => (
            <Card
              key={c.id}
              className="bg-zinc-900/80 backdrop-blur-md p-6 md:p-8 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <CardHeader className="p-0 mb-3">
                <CardTitle className="uppercase text-lg font-bold tracking-wider">
                  {c.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="mb-4 text-sm">
                {c.short}
              </CardDescription>
              <CardFooter className="p-0 flex items-center justify-between text-sm text-slate-400">
                <span>{c.duration}</span>
                <Link
                  href={`/courses#${c.id}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center gap-1 group/link"
                >
                  Details
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 pb-40 md:pb-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-blue-100 bg-clip-text text-transparent border-b-2 border-blue-500/50 pb-4 inline-block">
          Our Partners
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-8">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="bg-zinc-900/80 backdrop-blur-md p-6 md:p-7 hover:border-blue-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/20"
            >
              <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                {/* Logo Container with Glassmorphism Effect */}
                <div className="w-full h-32 flex items-center justify-center bg-white rounded-lg border border-zinc-700/50 group-hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm">
                  <Image
                    src={`/${partner.logo}`}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={80}
                    className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>

                {/* Partner Name */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 via-cyan-400 to-yellow-300 bg-clip-text text-transparent group-hover:text-cyan-300 transition-all duration-300
">
                  {partner.name}
                </h3>

              
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
