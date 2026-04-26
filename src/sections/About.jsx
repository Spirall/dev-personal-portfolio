import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const hightlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hardworking and energetic Full Stack Software Engineer with a
                National Diploma and Advanced Diploma in IT, currently pursuing
                a BSc Honours in Computing (completion expected in 2025). I hold
                multiple certifications, including Cisco Networking Academy’s
                A+: IT Essentials, Discovery CCNA 1 & 2, and Microsoft Azure
                Fundamentals. I am fluent in English, Afrikaans, Sotho, and
                Zulu.
              </p>
              <p>
                With over a decade of professional development experience, I am
                deeply passionate about building impactful software solutions. I
                consider myself a reliable, strong-willed, and dedicated team
                player with a proven work ethic. My goal is to establish a
                strong reputation as both a Software Engineer and Tech
                Evangelist within the ICT industry.
              </p>
              <p>
                I thrive in collaborative environments that value mentorship,
                continuous learning, and knowledge sharing, while also
                appreciating the autonomy to self-manage and drive initiatives.
                My ideal team combines experienced senior developers with
                intermediate and junior colleagues, fostering a culture where
                everyone learns and grows together.
                <br /> <br /> Motto: "Do what you can, where you are... with
                what you have!"
              </p>
            </div>
            <div className="glass rounded-2xl pp-6 glow-border animate-fade-in animation-delay-200">
              <p className="text-lg font-medium text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {hightlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 sm:grid-cols-2 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
