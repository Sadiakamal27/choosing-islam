import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookmarkPlus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Dummy articles data (same as in the listing page)
const articles = [
  {
    id: 1,
    slug: "understanding-five-pillars",
    title: "Understanding the Five Pillars of Islam",
    excerpt:
      "Explore the fundamental practices that form the foundation of Islamic faith and practice.",
    content: `
      <p>The Five Pillars of Islam are the foundation of Muslim life. They are the testimony of faith, prayer, giving zakat (support of the needy), fasting during the month of Ramadan, and the pilgrimage to Makkah once in a lifetime for those who are able.</p>

      <h2>1. Shahada (Faith)</h2>
      <p>The declaration of faith is the first pillar of Islam. Muslims bear witness to the oneness of God by reciting the creed "There is no God but Allah and Muhammad is the Messenger of Allah." This simple yet profound statement expresses a Muslim's complete acceptance of and total commitment to Islam.</p>

      <h2>2. Salah (Prayer)</h2>
      <p>Muslims perform five prayers a day. Each prayer does not take more than a few minutes to perform. Prayer in Islam is a direct link between the worshipper and God. There are no intermediaries between God and the worshipper.</p>

      <h2>3. Zakat (Charity)</h2>
      <p>One of the most important principles of Islam is that all things belong to God, and that wealth is therefore held by human beings in trust. The word zakat means both 'purification' and 'growth'. Our possessions are purified by setting aside a proportion for those in need.</p>

      <h2>4. Sawm (Fasting)</h2>
      <p>Every year in the month of Ramadan, all Muslims fast from first light until sundown, abstaining from food, drink, and sexual relations. Those who are sick, elderly, or on a journey, and women who are pregnant or nursing are permitted to break the fast and make up an equal number of days later in the year.</p>

      <h2>5. Hajj (Pilgrimage)</h2>
      <p>The annual pilgrimage to Makkah - the Hajj - is an obligation only for those who are physically and financially able to perform it. Nevertheless, about two million people go to Makkah each year from every corner of the globe providing a unique opportunity for those of different nations to meet one another.</p>

      <h2>Conclusion</h2>
      <p>These five pillars provide the framework for a Muslim's life and the basis of Islamic practice. They are acts of worship that demonstrate submission to Allah and strengthen the bond between the believer and the Creator.</p>
    `,
    author: "Dr. Sarah Ahmed",
    date: "2024-12-08",
    readTime: "5 min read",
    category: "Core Beliefs",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    slug: "importance-of-prayer",
    title: "The Importance of Daily Prayer in Islam",
    excerpt:
      "Learn about the significance of the five daily prayers and how they strengthen our connection with Allah.",
    content: `
      <p>Prayer (Salah) is the second pillar of Islam and is performed five times a day. It is a direct link between the worshipper and Allah. There is no hierarchical authority in Islam, and no priests, so the prayers are led by a learned person who knows the Quran.</p>

      <h2>The Five Daily Prayers</h2>
      <p>Muslims pray five times a day, with prayers at dawn (Fajr), noon (Dhuhr), mid-afternoon (Asr), sunset (Maghrib), and evening (Isha). These prayers are spread throughout the day so that one is constantly reminded of God and one's purpose in life.</p>

      <h2>The Spiritual Benefits</h2>
      <p>Prayer provides a constant reminder of God's presence and helps maintain a spiritual connection throughout the day. It serves as a means of purification, discipline, and spiritual growth. Through prayer, Muslims seek guidance, express gratitude, and find peace.</p>

      <h2>Physical and Mental Benefits</h2>
      <p>The physical movements of prayer also provide health benefits, including improved flexibility and circulation. The mental discipline required for regular prayer helps develop focus, mindfulness, and stress relief.</p>

      <h2>Community and Unity</h2>
      <p>When Muslims pray together in congregation, especially for Friday prayers, it strengthens community bonds and creates a sense of unity and brotherhood among believers from all walks of life.</p>
    `,
    author: "Imam Muhammad Hassan",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Daily Practice",
    image:
      "https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    slug: "ramadan-spiritual-journey",
    title: "Ramadan: A Month of Spiritual Reflection",
    excerpt:
      "Discover the blessings and spiritual benefits of fasting during the holy month of Ramadan.",
    content: `
      <p>Ramadan is the ninth month of the Islamic lunar calendar. Every day during this month, Muslims around the world spend the daylight hours in a complete fast. During the blessed month of Ramadan, Muslims all over the world abstain from food, drink, and other physical needs during the daylight hours.</p>

      <h2>The Purpose of Fasting</h2>
      <p>Fasting is primarily an act of worship and obedience to Allah. It teaches self-discipline, self-control, sacrifice, and empathy for those who are less fortunate. It encourages generosity and charity and helps develop a sense of social belonging.</p>

      <h2>Spiritual Growth</h2>
      <p>Ramadan is a time for spiritual reflection, improvement, and increased devotion and worship. Muslims are expected to put more effort into following the teachings of Islam and to avoid obscene and irreligious sights and sounds.</p>

      <h2>The Night of Power</h2>
      <p>Laylat al-Qadr, or the Night of Power, is one of the most sacred nights in the Islamic calendar. It falls in the last ten days of Ramadan and is believed to be the night when the Quran was first revealed to Prophet Muhammad (peace be upon him).</p>

      <h2>Breaking the Fast</h2>
      <p>Each day, the fast is broken at sunset with a meal called iftar. This is often a community event where families and friends gather together. The fast is traditionally broken with dates and water, following the example of Prophet Muhammad (peace be upon him).</p>
    `,
    author: "Fatima Al-Zahra",
    date: "2024-12-01",
    readTime: "6 min read",
    category: "Spiritual Development",
    image:
      "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    slug: "charity-in-islam",
    title: "The Role of Charity and Zakat in Islam",
    excerpt:
      "Understanding the importance of giving and supporting those in need through Zakat and Sadaqah.",
    content: `
      <p>Zakat is the third pillar of Islam. It is an obligation upon Muslims to give a portion of their wealth to those in need. The word Zakat means both 'purification' and 'growth'. Our possessions are purified by setting aside a proportion for those in need.</p>

      <h2>What is Zakat?</h2>
      <p>Zakat is a mandatory charitable contribution, often considered to be a tax. It is obligatory for all Muslims who meet the necessary criteria of wealth. It is not a charity; it is a duty and a right that the poor have over the wealthy.</p>

      <h2>Who Receives Zakat?</h2>
      <p>The Quran specifies eight categories of people who are eligible to receive Zakat: the poor, the needy, those employed to collect Zakat, those whose hearts are to be reconciled, those in bondage, those in debt, in the cause of Allah, and the wayfarer.</p>

      <h2>Sadaqah: Voluntary Charity</h2>
      <p>In addition to Zakat, Muslims are encouraged to give Sadaqah, which is voluntary charity. Sadaqah can be given at any time and in any amount. Even a smile or a kind word is considered Sadaqah.</p>

      <h2>The Impact of Giving</h2>
      <p>Charity in Islam is not just about giving money. It's about creating a just society where wealth is distributed fairly and the needs of all community members are met. It purifies the giver's wealth and soul while providing essential support to those in need.</p>
    `,
    author: "Sheikh Abdullah Rahman",
    date: "2024-11-28",
    readTime: "5 min read",
    category: "Community & Service",
    image:
      "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    slug: "quran-guidance-for-life",
    title: "The Quran: A Complete Guide for Life",
    excerpt:
      "Explore how the Holy Quran provides guidance for every aspect of our daily lives.",
    content: `
      <p>The Quran is the holy book of Islam. It is the word of Allah revealed to Prophet Muhammad (peace be upon him) through the Angel Gabriel. The Quran contains guidance on all aspects of life and the hereafter. It is a source of comfort, wisdom, and direction for Muslims worldwide.</p>

      <h2>The Revelation</h2>
      <p>The Quran was revealed over a period of 23 years to Prophet Muhammad (peace be upon him). The first revelation came in the Cave of Hira during the month of Ramadan. The angel Gabriel appeared to the Prophet and commanded him to "Read!"</p>

      <h2>Structure and Content</h2>
      <p>The Quran consists of 114 chapters (Surahs) of varying lengths. Each Surah is made up of individual verses (Ayahs). The chapters cover a wide range of topics including theology, law, morality, history, and guidance for personal conduct.</p>

      <h2>Guidance for Daily Life</h2>
      <p>The Quran provides comprehensive guidance on how to live a righteous life. It addresses personal conduct, family relations, business ethics, social justice, and spiritual development. It encourages reflection, critical thinking, and the pursuit of knowledge.</p>

      <h2>Preservation and Recitation</h2>
      <p>The Quran has been preserved in its original Arabic form since its revelation. Muslims around the world memorize the Quran, and many become Hafiz (one who has memorized the entire Quran). The recitation of the Quran is considered an act of worship.</p>
    `,
    author: "Dr. Aisha Khan",
    date: "2024-11-25",
    readTime: "8 min read",
    category: "Core Beliefs",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    slug: "prophet-muhammad-example",
    title: "Prophet Muhammad: The Perfect Example",
    excerpt:
      "Learn about the life and teachings of Prophet Muhammad (peace be upon him) and his timeless message.",
    content: `
      <p>Prophet Muhammad (peace be upon him) is the final messenger of Allah. His life serves as a perfect example for all of humanity. He taught us about compassion, justice, honesty, and devotion to Allah. His teachings continue to guide millions of Muslims around the world.</p>

      <h2>Early Life</h2>
      <p>Muhammad was born in Makkah in the year 570 CE. He was known for his honesty and integrity, earning him the title "Al-Amin" (the trustworthy). Even before receiving revelation, he was respected by his community for his moral character.</p>

      <h2>The Message</h2>
      <p>At the age of 40, Muhammad received his first revelation from Allah through the Angel Gabriel. He spent the next 23 years spreading the message of Islam - the worship of one God and the importance of justice, compassion, and moral conduct.</p>

      <h2>Character and Conduct</h2>
      <p>The Prophet Muhammad exemplified the highest standards of character. He was known for his kindness, generosity, humility, and forgiveness. He treated everyone with respect, regardless of their social status, and showed special care for the poor, orphans, and widows.</p>

      <h2>Legacy</h2>
      <p>The Prophet's teachings and example continue to inspire Muslims worldwide. His Sunnah (practices and sayings) serve as a practical guide for implementing the teachings of the Quran in daily life. He remains the most influential figure in Islamic history and a source of guidance for believers.</p>
    `,
    author: "Imam Yusuf Ali",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Core Beliefs",
    image:
      "https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

// Generate static params for all articles
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <Link href="/articles">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (just showing other articles for now)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section with Featured Image */}
      <section className="relative h-[400px] bg-gray-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/articles">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 mb-4"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Articles
              </Button>
            </Link>
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action Buttons */}
          <div className="flex gap-3 mb-8 pb-8 border-b">
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" className="gap-2">
              <BookmarkPlus className="w-4 h-4" />
              Save
            </Button>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  About {article.author}
                </h3>
                <p className="text-gray-700">
                  A dedicated Islamic scholar and educator committed to sharing
                  knowledge and promoting understanding of Islam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.slug}`}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
