import { motion } from "motion/react";
import { Utensils, Star } from "lucide-react";

const menuCategories = [
  {
    title: "Signature Fusion",
    items: [
      { name: "Chicken 65", price: "₹280", desc: "Tender, crispy, and spicy - our legendary house special.", highlight: true },
      { name: "Chilly Chicken", price: "₹260", desc: "Soft, tasty, and perfectly glazed with a spicy kick.", highlight: true },
      { name: "Fusion Paneer Tikka", price: "₹240", desc: "Marinated cottage cheese with a secret fusion twist." },
    ]
  },
  {
    title: "Artisanal Brews",
    items: [
      { name: "Obsidian Cold Brew", price: "₹180", desc: "12-hour slow-steeped signature dark roast." },
      { name: "Gold Leaf Latte", price: "₹220", desc: "Creamy latte topped with a hint of edible gold dust." },
      { name: "Emerald Mint Tea", price: "₹150", desc: "Refreshing garden mint with premium green tea leaves." },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <Utensils className="text-gold w-10 h-10" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            The <span className="gold-gradient-text">Fusion</span> Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-xl mx-auto"
          >
            A curated selection of dishes that blend traditional flavors with modern culinary techniques.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-serif font-bold text-gold border-b border-gold/20 pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className={`group p-4 rounded-2xl transition-all ${item.highlight ? 'bg-gold/5 border border-gold/10' : 'hover:bg-white/5'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-stone-100 group-hover:text-gold transition-colors">
                          {item.name}
                        </h4>
                        {item.highlight && (
                          <span className="flex items-center gap-1 text-[10px] font-bold uppercase bg-gold text-obsidian px-2 py-0.5 rounded-full">
                            <Star className="w-2 h-2 fill-current" />
                            Must Try
                          </span>
                        )}
                      </div>
                      <span className="font-serif font-bold text-gold">{item.price}</span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[2rem] glass-card text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h3 className="text-2xl font-serif font-bold mb-4">Craving something else?</h3>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto">
            Our full menu features over 50+ fusion delights, artisanal coffees, and refreshing mocktails.
          </p>
          <button className="px-10 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-obsidian transition-all">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
