import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await fetch('/server/send_mail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const contentType = res.headers.get('content-type') || '';
        let data: any = null;

        if (contentType.includes('application/json')) {
          data = await res.json();
        } else {
          // Non-JSON response (e.g. raw PHP source or HTML error). Read text for diagnostics.
          const text = await res.text();
          const snippet = text.slice(0, 1000);
          throw new Error('Server did not return JSON. This often means PHP is not running and the file was served as text. Response snippet: ' + snippet);
        }

        if (!res.ok) throw new Error(data.message || 'Failed to send message');

        toast({ title: 'Message Sent!', description: data.message || "We'll get back to you soon." });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } catch (err: any) {
        console.error(err);
        const message = err?.message || 'Failed to send message';
        toast({ title: 'Error', description: message, variant: 'destructive' });
      }
    })();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-hero py-20 relative overflow-hidden">
        <Parallax translateY={[-30, 30]}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
          </div>
        </Parallax>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our team today. We're here to help you find the perfect 
              solution for your needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information */}
<motion.section 
  variants={stagger}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className="py-20"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Info Cards */}
    <motion.div 
      variants={stagger}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
    >
      {/* Location */}
      <motion.div variants={fadeInUp}>
        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <CardContent className="pt-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4"
            >
              <MapPin className="h-8 w-8 text-white" />
            </motion.div>
            <CardTitle className="text-xl text-foreground mb-4">Our Location</CardTitle>
            <CardDescription className="text-muted-foreground">
              Behind Luanar City Campus<br />
              Lilongwe, Malawi<br />
              P.O. Box 2407, Blantyre
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      {/* Phone */}
      <motion.div variants={fadeInUp}>
        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <CardContent className="pt-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4"
            >
              <Phone className="h-8 w-8 text-white" />
            </motion.div>
            <CardTitle className="text-xl text-foreground mb-4">Phone Numbers</CardTitle>
            <CardDescription className="text-muted-foreground">
              +265 998 419 201<br />
              +265 881 301 364<br />
              Available Mon - Fri: 8AM - 5PM
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      {/* Email */}
      <motion.div variants={fadeInUp}>
        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <CardContent className="pt-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4"
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
            <CardTitle className="text-xl text-foreground mb-4">Email Address</CardTitle>
            <CardDescription className="text-muted-foreground">
              info@optionalgroupofcompaniesltd.com<br />
              We respond within 24 hours
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>

    {/* Contact Form & Map */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Contact Form */}
      <motion.div variants={fadeInUp} className="w-full">
        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-foreground">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mr-3"
              >
                <MessageSquare className="h-6 w-6 text-primary" />
              </motion.div>
              Send us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="+265 XXX XXX XXX"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-primary">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Map */}
      <motion.div variants={fadeInUp} className="w-full">
        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-foreground">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mr-3"
              >
                <MapPin className="h-6 w-6 text-primary" />
              </motion.div>
              Find Us
            </CardTitle>
            <CardDescription>
              Visit our office in Lilongwe for face-to-face consultations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6027194862756!2d33.78765!3d-13.96692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzAxLjciUyAzM8KwNDcnMTUuNiJF!5e0!3m2!1sen!2smw!4v1635000000000!5m2!1sen!2smw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Optional Group of Companies Ltd Location"
              ></iframe>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <p className="font-semibold">Office Hours:</p>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  </div>
</motion.section>

      {/* CTA Section */}
      <motion.section 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're here to help you succeed. Whether you need our services or have questions, 
              don't hesitate to reach out to our friendly team.
            </p>
            <motion.div 
              variants={stagger}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={fadeInUp}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-primary transform hover:scale-105 transition-transform duration-300">
                  <a href="tel:+265998419201">Call Now</a>
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="transform hover:scale-105 transition-transform duration-300">
                  <a href="mailto:info@optionalgroupofcompaniesltd.com">Send Email</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
          </motion.section>
        </motion.div>
        <Parallax translateY={[0, -20]}>
          <Footer />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Contact;