import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { DMMessagingInterface } from '@/components/dm/DMMessagingInterface';
import { LoginArea } from '@/components/auth/LoginArea';
import { MessageSquare, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Messages = () => {
  useSeoMeta({
    title: 'Messages - Nostr Chat',
    description: 'Private encrypted messaging on Nostr',
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span>Nostr Chat</span>
              </Link>
              <Button variant="ghost" size="sm" asChild className="hidden md:flex">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
            </div>
            <LoginArea className="max-w-60" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto p-4 flex flex-col max-h-[calc(100vh-73px)]">
        <DMMessagingInterface className="flex-1 min-h-0" />
      </div>
    </div>
  );
};

export default Messages;
