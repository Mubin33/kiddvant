import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Award, Users, Leaf } from "lucide-react";

export const metadata = {
  title: "About Us | Kiddvant - Purposeful Play for Every Child",
  description: "Learn about Kiddvant's mission to provide screen-free, educational toys that inspire imagination and learning in children of all ages.",
};

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every toy we create is designed with care, ensuring it's safe, durable, and brings joy to children and parents alike.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "We use premium materials and time-tested construction methods to create toys that last for generations.",
  },
  {
    icon: Users,
    title: "Child Development",
    description: "Our toys are designed by child development experts to support learning through play at every stage.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to sustainable practices, using responsibly sourced materials and eco-friendly packaging.",
  },
];

const milestones = [
  { year: "2010", title: "The Beginning", description: "Kiddvant was founded with a simple mission: create toys that inspire imagination." },
  { year: "2015", title: "Growing Together", description: "Expanded our product line to include educational toys for children up to 8 years old." },
  { year: "2019", title: "Sustainability Commitment", description: "Launched our eco-friendly initiative with 100% recyclable packaging." },
  { year: "2023", title: "Community Impact", description: "Donated over 1 million toys to children in need through our giving programs." },
  { year: "2026", title: "Global Reach", description: "Now serving families in over 50 countries with our award-winning toy collections." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Inspiring Imaginations Since 2010
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                We believe in the power of play. Our screen-free, thoughtfully designed toys 
                help children explore, create, and grow—one adventure at a time.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition"
              >
                Explore Our Toys
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.melissaanddoug.com/cdn/shop/files/30123_Rainbow_Stacker_2880x1200.jpg"
                alt="Children playing with Kiddvant toys"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          At Kiddvant, we&apos;re on a mission to provide children with the tools they need to 
          learn, grow, and explore the world around them. We believe that the best toys 
          don&apos;t need batteries or screens&mdash;they need imagination. Our commitment to quality,
          safety, and educational value has made us a trusted partner for parents and educators
          around the globe.
        </p>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make, from toy design to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600">
            From a small garage operation to a global brand, here&apos;s how we&apos;ve grown.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                }`}>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                500+
              </div>
              <p className="text-blue-200">Toys Created</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                50+
              </div>
              <p className="text-blue-200">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                1M+
              </div>
              <p className="text-blue-200">Happy Families</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                15+
              </div>
              <p className="text-blue-200">Years of Play</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Join the Kiddvant Family
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover why millions of parents trust Kiddvant for their children&apos;s playtime. 
            Explore our collection of award-winning, educational toys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
