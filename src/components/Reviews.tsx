import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Krishnamohan Nandam",
    role: "Food Enthusiast",
    content: "Food is too good... specially chilli chicken and chicken 65... such a lovely tender and crispy chicken 65... soft and tasty little spicy chilly chicken.. apt to the name.",
    rating: 5
  },
  {
    name: "Manasa Subramaniam",
    role: "Local Guide",
    content: "Really cool new place... good food, reasonable prices. Highly recommend! ✨ The vibe is fantastic and food is delicious.",
    rating: 5
  },
  {
    name: "Akhilesh Goud",
    role: "Regular Guest",
    content: "The ambience is like cozy super ✨❤️ Must visit place with your family and friends. Worth Menu, Great Ambience, Work Stations.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm mb-4"
            >
              <Star className="w-4 h-4 fill-current" />
              5.0 Rated on Google
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold"
            >
              What Our <span className="gold-gradient-text">Guests</span> Say
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-500 text-sm max-w-xs text-right"
          >
            Join over 33+ happy customers who have experienced the fusion magic.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl relative group"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>

              <p className="text-stone-300 mb-8 italic leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center text-obsidian font-bold text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-stone-100">{review.name}</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
