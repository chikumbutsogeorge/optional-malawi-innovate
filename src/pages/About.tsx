import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Optional Group
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A proudly Malawian-owned company committed to creating sustainable solutions 
            and making a positive impact on our communities.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  Optional Group of Companies Ltd is a proudly Malawian-owned company established on 
                  19th July 2021 and officially registered on 20th August 2021 with the Registrar 
                  of Companies in Malawi.
                </p>
                <p className="mb-6">
                  The company was founded by Elijah Jack Sande and Elisha Jack Sande after thorough 
                  research on the pressing needs of Malawians in their daily lives. We recognized 
                  the gaps in various sectors and committed ourselves to providing innovative solutions.
                </p>
                <p>
                  We operate across six (6) core sectors, providing diverse services tailored to meet 
                  the evolving needs of individuals, businesses, and communities throughout Malawi.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground">2021</div>
                  <div className="text-muted-foreground">Year Founded</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground">6</div>
                  <div className="text-muted-foreground">Core Sectors</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 h-full">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative and sustainable solutions that meet the evolving needs of our customers, 
                  while upholding our commitment to quality, integrity, and social responsibility. We strive to 
                  create value for stakeholders, drive growth and profitability, and make a positive impact on 
                  the communities in which we operate.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="p-8 h-full">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Creating a sustainable future through innovation, collaboration, and responsible business practices. 
                  We envision a Malawi where businesses can thrive while contributing to the development and 
                  prosperity of our communities and nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our decision-making and define who we are as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace new ideas, technologies, and approaches to solve problems and create value.'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and ethical practices at all times.'
              },
              {
                title: 'Quality',
                description: 'We are committed to delivering excellence in every service and solution we provide.'
              },
              {
                title: 'Social Responsibility',
                description: 'We strive to make a positive impact on the communities where we operate.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;