"use client";

import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Dummy articles data
const articles = [
  {
    id: 1,
    slug: "understanding-five-pillars",
    title: "Understanding the Five Pillars of Islam",
    excerpt:
      "Explore the fundamental practices that form the foundation of Islamic faith and practice.",
    content: `The Five Pillars of Islam are the foundation of Muslim life. They are the testimony of faith, prayer, giving zakat (support of the needy), fasting during the month of Ramadan, and the pilgrimage to Makkah once in a lifetime for those who are able.`,
    author: "Dr. Sarah Ahmed",
    date: "2024-12-08",
    readTime: "5 min read",
    category: "Core Beliefs",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    slug: "importance-of-prayer",
    title: "The Importance of Daily Prayer in Islam",
    excerpt:
      "Learn about the significance of the five daily prayers and how they strengthen our connection with Allah.",
    content: `Prayer (Salah) is the second pillar of Islam and is performed five times a day. It is a direct link between the worshipper and Allah. There is no hierarchical authority in Islam, and no priests, so the prayers are led by a learned person who knows the Quran.`,
    author: "Imam Muhammad Hassan",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Daily Practice",
    image:
      "https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    slug: "ramadan-spiritual-journey",
    title: "Ramadan: A Month of Spiritual Reflection",
    excerpt:
      "Discover the blessings and spiritual benefits of fasting during the holy month of Ramadan.",
    content: `Ramadan is the ninth month of the Islamic lunar calendar. Every day during this month, Muslims around the world spend the daylight hours in a complete fast. During the blessed month of Ramadan, Muslims all over the world abstain from food, drink, and other physical needs during the daylight hours.`,
    author: "Fatima Al-Zahra",
    date: "2024-12-01",
    readTime: "6 min read",
    category: "Spiritual Development",
    image:
      "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    slug: "charity-in-islam",
    title: "The Role of Charity and Zakat in Islam",
    excerpt:
      "Understanding the importance of giving and supporting those in need through Zakat and Sadaqah.",
    content: `Zakat is the third pillar of Islam. It is an obligation upon Muslims to give a portion of their wealth to those in need. The word Zakat means both 'purification' and 'growth'. Our possessions are purified by setting aside a proportion for those in need.`,
    author: "Sheikh Abdullah Rahman",
    date: "2024-11-28",
    readTime: "5 min read",
    category: "Community & Service",
    image:
      "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    slug: "quran-guidance-for-life",
    title: "The Quran: A Complete Guide for Life",
    excerpt:
      "Explore how the Holy Quran provides guidance for every aspect of our daily lives.",
    content: `The Quran is the holy book of Islam. It is the word of Allah revealed to Prophet Muhammad (peace be upon him) through the Angel Gabriel. The Quran contains guidance on all aspects of life and the hereafter. It is a source of comfort, wisdom, and direction for Muslims worldwide.`,
    author: "Dr. Aisha Khan",
    date: "2024-11-25",
    readTime: "8 min read",
    category: "Core Beliefs",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    slug: "prophet-muhammad-example",
    title: "Prophet Muhammad: The Perfect Example",
    excerpt:
      "Learn about the life and teachings of Prophet Muhammad (peace be upon him) and his timeless message.",
    content: `Prophet Muhammad (peace be upon him) is the final messenger of Allah. His life serves as a perfect example for all of humanity. He taught us about compassion, justice, honesty, and devotion to Allah. His teachings continue to guide millions of Muslims around the world.`,
    author: "Imam Yusuf Ali",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Core Beliefs",
    image:
      "https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ArticlesPage() {
  const categories = [
    "All",
    "Core Beliefs",
    "Daily Practice",
    "Spiritual Development",
    "Community & Service",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Articles & Resources
            </h1>
            <p className="text-xl sm:text-2xl text-teal-50 max-w-3xl mx-auto">
              Explore our collection of articles to deepen your understanding of
              Islam and strengthen your faith.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All" ? "bg-teal-600 hover:bg-teal-700" : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(article.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-700">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="mt-4 flex items-center text-teal-600 font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Subscribe to our newsletter to receive the latest articles and
            resources directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-gray-100"
            >
              Subscribe Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-700"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
