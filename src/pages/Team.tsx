import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

// Import team images
import elijahSande from '@/assets/team/elijah-sande.jpg';
import elishaSande from '@/assets/team/elisha-sande.jpg';
import ruthSande from '@/assets/team/ruth-sande.jpg';
import ruthGuta from '@/assets/team/ruth-guta.jpg';
import bridgetteeKachingwe from '@/assets/team/bridgettee-kachingwe.jpg';
import josiahSande from '@/assets/team/josiah-sande.jpg';
import joanaChizenga from '@/assets/team/joana-chizenga.jpg';
import shiellahChizenga from '@/assets/team/shiellah-chizenga.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Elijah Jack Sande',
      position: 'Director',
      image: elijahSande,
      description: 'Co-founder and visionary leader with extensive experience in business development and strategic planning.',
      email: 'elijah@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Elisha Jack Sande',
      position: 'Director',
      image: elishaSande,
      description: 'Co-founder focused on operational excellence and business growth across all sectors.',
      email: 'elisha@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Ruth Sande',
      position: 'Operations & Admin Manager',
      image: ruthSande,
      description: 'Experienced operations manager ensuring smooth day-to-day business operations and administrative excellence.',
      email: 'ruth.sande@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Ruth Guta',
      position: 'Assistant Operations & Admin Manager',
      image: ruthGuta,
      description: 'Supporting operations and administration with attention to detail and commitment to efficiency.',
      email: 'ruth.guta@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Bridgettee C. Kachingwe',
      position: 'Finance Manager',
      image: bridgetteeKachingwe,
      description: 'Financial expert managing company finances, budgeting, and financial planning across all sectors.',
      email: 'bridgettee@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Josiah Sande',
      position: 'Business Development Manager',
      image: josiahSande,
      description: 'Driving business growth and development initiatives, identifying new opportunities and partnerships.',
      email: 'josiah@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Joana Chizenga',
      position: 'Marketing & Logistics Manager',
      image: joanaChizenga,
      description: 'Leading marketing strategies and logistics coordination to ensure effective service delivery.',
      email: 'joana@optionalgroupofcompaniesltd.com'
    },
    {
      name: 'Shiellah Chizenga',
      position: 'Legal & Compliance Manager',
      image: shiellahChizenga,
      description: 'Ensuring legal compliance and managing regulatory requirements across all business operations.',
      email: 'shiellah@optionalgroupofcompaniesltd.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Management Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the dedicated professionals who drive our vision forward and ensure 
            excellence in everything we do.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings together diverse skills and expertise 
              to guide Optional Group of Companies Ltd towards sustainable growth.
            </p>
          </div>

          {/* Directors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {teamMembers.slice(0, 2).map((member, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-lg text-primary font-semibold mb-4">{member.position}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{member.description}</p>
                      <div className="flex justify-center sm:justify-start space-x-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Management Team */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Management Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(2).map((member, index) => (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 text-center overflow-hidden">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-secondary/20 group-hover:border-secondary/40 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-secondary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 mx-auto w-24 h-24" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                    <p className="text-secondary font-semibold mb-4">{member.position}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Working Together for Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our team is united by shared values of innovation, integrity, and commitment 
            to delivering exceptional service across all our business sectors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">8</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Team Members</h3>
              <p className="text-muted-foreground">Dedicated professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">6</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Business Sectors</h3>
              <p className="text-muted-foreground">Diverse expertise areas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Commitment</h3>
              <p className="text-muted-foreground">To excellence and innovation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;