import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LoginArea } from '@/components/auth/LoginArea';
import { MessageSquare, Lock, Zap, Shield, Users, Globe, ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  useSeoMeta({
    title: 'Nostr Chat - Decentralized Secure Messaging',
    description: 'Experience truly private, censorship-resistant messaging on Nostr. No phone numbers, no servers, complete freedom.',
  });

  const features = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'End-to-End Encrypted',
      description: 'Military-grade encryption ensures your conversations stay private',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Censorship Resistant',
      description: 'Built on Nostr protocol - no central authority can shut it down',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Lightning Fast',
      description: 'Real-time messaging with instant Lightning Network payments',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Your Identity, Your Data',
      description: 'Own your account with cryptographic keys - no sign-ups required',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Globally Distributed',
      description: 'Decentralized relay network ensures messages reach anywhere',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Open & Interoperable',
      description: 'Connect with users across any Nostr client or application',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl">Nostr Chat</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild className="hidden sm:inline-flex">
                <Link to="/messages">Open App</Link>
              </Button>
              <LoginArea className="max-w-60" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Powered by Nostr Protocol</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Messaging That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 mt-2">
              Can't Be Silenced
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience true freedom with decentralized, encrypted messaging. No phone numbers, 
            no accounts, no surveillance. Just pure, unstoppable communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" asChild className="text-lg px-8 h-12 shadow-lg hover:shadow-xl transition-all">
              <Link to="/messages" className="flex items-center gap-2">
                Start Messaging
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 h-12">
              <a href="https://nostr.com" target="_blank" rel="noopener noreferrer">
                Learn About Nostr
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Nostr Chat?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on revolutionary technology that puts privacy and freedom first
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Take Back Your Privacy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands using Nostr Chat for truly private conversations. 
              No sign-up required - just connect your Nostr key and start messaging.
            </p>
            <div className="pt-4">
              <Button size="lg" asChild className="text-lg px-8 h-12 shadow-lg hover:shadow-xl transition-all">
                <Link to="/messages" className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm">Built with MKStack on Nostr</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="https://github.com/nostr-protocol/nostr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Nostr Protocol
              </a>
              <a href="https://github.com/nostr-protocol/nips" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                NIPs
              </a>
              <a href="https://usenostr.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
