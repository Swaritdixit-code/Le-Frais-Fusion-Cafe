import { motion } from "motion/react";
import { Coffee, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="bg-stone-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="text-gold w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-tight text-gold">
                LE FRAIS FUSION CAFE
              </span>
            </div>
            <p className="text-stone-400 max-w-md mb-8 leading-relaxed">
              Nagole's premier destination for fusion cuisine and artisanal coffee. 
              We provide a cozy atmosphere perfect for work, study, or catching up with loved ones.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#d4af37" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                Plot No 61, Mamatha Nagar Colony, Nagole, Hyderabad, Telangana 500068
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                078933 33289
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                hello@lefraiscafe.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold mb-6 uppercase tracking-widest text-sm">Opening Hours</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-stone-200">10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span className="text-stone-200">09:00 AM - 11:30 PM</span>
              </li>
            </ul>
            <div className="mt-8 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
              <p className="text-xs text-emerald-400 font-medium">
                Dine-in • Takeaway • Delivery
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-stone-600 text-xs">
          <p>© 2026 Le Frais Fusion Cafe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
