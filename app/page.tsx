import {
  ArrowRight,
  Book,
  Users,
  Heart,
  MessageCircle,
  Search,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";
import { getCategories } from "@/lib/contentful";

export default async function Home() {
  const features = [
    {
      icon: Book,
      title: "Learn & Discover",
      description:
        "Explore comprehensive resources and educational materials to deepen your understanding.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Community Connection",
      description:
        "Join a supportive community of individuals seeking knowledge and spiritual growth.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description:
        "Develop your faith and character through guided learning and reflection.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: MessageCircle,
      title: "Ask Questions",
      description:
        "Get answers to your questions from knowledgeable educators and community members.",
      color: "from-emerald-600 to-green-700",
    },
  ];

  // Fetch categories from Contentful
  const contentfulCategories = await getCategories();

  // Map Contentful categories to topics format (fallback to placeholder if empty)
  const topics =
    contentfulCategories.length > 0
      ? contentfulCategories.map((cat) => ({
          title: cat.fields.title,
          description: cat.fields.description || "Explore this category",
          image:
            "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
        }))
      : [
          {
            title: "Core Beliefs",
            description:
              "Understanding the fundamental principles and teachings",
            image:
              "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            title: "Daily Practice",
            description:
              "Practical guidance for incorporating faith into everyday life",
            image:
              "https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            title: "Community & Service",
            description: "Building connections and serving humanity together",
            image:
              "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            title: "Spiritual Development",
            description: "Growing in wisdom, compassion, and understanding",
            image:
              "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
        ];

  return (
    <>
      <section className="relative text-white py-20 lg:py-28 overflow-hidden">
        <HeroCarousel />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Knowledge, Build Understanding
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-teal-50 leading-relaxed">
              Your journey to enlightenment begins here. Explore resources,
              connect with community, and grow in faith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-700"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deep into various subjects and find answers to your questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-200">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Have Questions? We're Here to Help
              </h2>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed">
                Our knowledgeable team is available 24/7 to answer your
                questions and provide guidance. Whether you're new to your
                spiritual journey or seeking deeper understanding, we're here
                for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-gray-100"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat With Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-1 border-white text-teal-700 hover:bg-white/10"
                >
                  Call: 1-800-123-4567
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <Globe className="w-10 h-10 mb-2" />
                  <CardTitle className="text-white">50+ Countries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-50">Serving communities worldwide</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <Users className="w-10 h-10 mb-2" />
                  <CardTitle className="text-white">100K+ Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-50">Active community members</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <Book className="w-10 h-10 mb-2" />
                  <CardTitle className="text-white">1000+ Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-50">Educational materials</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <Search className="w-10 h-10 mb-2" />
                  <CardTitle className="text-white">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-50">Always here to help</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of others who have found knowledge, community, and
            spiritual growth through FaithConnect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                Learn About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-1 border-white text-teal-700 hover:bg-white/10"
            >
              Browse Resources
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
