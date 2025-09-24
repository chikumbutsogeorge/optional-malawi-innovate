import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)]"
        style={{ backgroundSize: '44px 44px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8" variants={containerVariants}>
          {/* Company Info */}
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="bg-white/20 p-2 rounded-lg backdrop-blur-sm"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-white font-bold text-xl">OG</span>
              </motion.div>
              <div>
                <h3 className="font-bold text-xl text-white">Optional Group</h3>
                <p className="text-sm text-white/80">of Companies Ltd</p>
              </div>
            </motion.div>
            <motion.p 
              className="text-white/90 mb-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              "Creating a sustainable future through innovation, collaboration, and responsible business practices."
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold text-lg mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul className="space-y-2" variants={containerVariants}>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/team", label: "Team" },
                { to: "/contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                      whileHover={{ width: '100%' }}
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold text-lg mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Contact Info
            </motion.h4>
            <motion.div 
              className="space-y-2 text-white/80"
              variants={containerVariants}
            >
              {[
                "Behind Luanar City Campus",
                "Lilongwe, Malawi",
                "P.O. Box 2407, Blantyre",
                "+265 998 419 201",
                "+265 881 301 364",
                "info@optionalgroupofcompaniesltd.com"
              ].map((item, index) => (
                <motion.p
                  key={item}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-white/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p 
            className="text-white/80"
            whileHover={{ scale: 1.02 }}
          >
            © {new Date().getFullYear()} Optional Group of Companies Ltd. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;