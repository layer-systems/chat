import { useSeoMeta } from '@unhead/react';

const Index = () => {
  useSeoMeta({
    title: 'Nostr Chat',
    description: 'A modern Nostr chat client with secure messaging, lightning zaps, and real-time social discovery.',
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Nostr Chat
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Secure conversations, fast discovery, and lightning-powered appreciation in one place.
        </p>
      </div>
    </div>
  );
};

export default Index;
