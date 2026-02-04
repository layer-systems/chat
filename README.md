# Nostr Chat

**Private, Decentralized Messaging on Nostr**

Nostr Chat is a dedicated Progressive Web App (PWA) for secure, censorship-resistant messaging on the Nostr protocol. Part of the [layer.systems](https://layer.systems) ecosystem, it provides a streamlined, privacy-focused chat experience with end-to-end encryption and Lightning Network integration.

## 🎯 Vision

Nostr Chat aims to be the go-to messaging application for the Nostr network, offering:

- **True Privacy**: End-to-end encrypted conversations using NIP-04 and NIP-17
- **Censorship Resistance**: No central servers, no gatekeepers, no surveillance
- **User Sovereignty**: Your keys, your data, your conversations
- **Lightning Integration**: Send value instantly with Lightning Network zaps
- **Progressive Web App**: Install and use like a native app on any device
- **Interoperability**: Connect seamlessly with the broader Nostr ecosystem

## ✨ Key Features

- **🔐 End-to-End Encryption**: Military-grade encryption using NIP-44 for all messages
- **💬 Direct Messaging**: Private 1-on-1 conversations with NIP-17 support
- **⚡ Lightning Zaps**: Send instant payments directly in chat using NIP-57
- **🔑 Nostr Identity**: Use your existing Nostr keys or create new ones
- **🌐 Decentralized**: No single point of failure or control
- **📱 Progressive Web App**: Install on any device with offline support
- **🎨 Modern UI**: Beautiful, responsive interface with light/dark themes
- **🔄 Multi-Relay**: Connect to multiple relays for maximum availability

## 🛠 Technology Stack

Built on the robust MKStack framework, Nostr Chat leverages modern web technologies:

- **React 18.x**: Latest React with hooks, concurrent rendering, and performance optimizations
- **TypeScript**: Full type safety for reliable code
- **TailwindCSS 3.x**: Utility-first CSS framework for responsive design
- **Vite**: Lightning-fast build tool and development server
- **shadcn/ui**: 48+ accessible UI components built with Radix UI
- **Nostrify**: Comprehensive Nostr protocol framework
- **React Router**: Client-side routing for seamless navigation
- **TanStack Query**: Powerful data fetching and state management
- **PWA Support**: Service workers and manifest for installable app experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- A Nostr key pair (or create one in the app)
- Modern web browser with WebExtension support for Nostr signing (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/layer-systems/chat.git
cd chat
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory, ready for deployment.

## 📱 Using Nostr Chat

1. **Connect Your Key**: Use a Nostr browser extension (like nos2x or Alby) or enter your private key
2. **Start Messaging**: Select a contact or enter a user's npub to start a conversation
3. **Send Zaps**: Attach Lightning payments to your messages (requires Lightning wallet connection)
4. **Stay Private**: All messages are end-to-end encrypted using NIP-44 encryption

## 🔧 Core Components

### Messaging Features
- **DMMessagingInterface**: Full-featured chat interface with conversation list and message area
- **DMConversationList**: Browse and manage all your conversations
- **DMChatArea**: Real-time message display with encryption indicators
- **LoginArea**: Seamless authentication with account switching
- **ZapButton & ZapDialog**: Integrated Lightning payment UI

### Nostr Integration
- **useNostr**: Core Nostr protocol queries and subscriptions
- **useDMContext**: Direct messaging state management (NIP-04 & NIP-17)
- **useCurrentUser**: Authentication and user session management
- **useNostrPublish**: Publish encrypted messages and events
- **useAuthor**: Fetch and display user profiles

### Payment Integration
- **useZaps**: Lightning Network payment functionality (NIP-57)
- **useWallet**: Unified wallet detection (WebLN + Nostr Wallet Connect)
- **useNWC**: Nostr Wallet Connect integration (NIP-47)

## 🔐 Supported NIPs (Nostr Implementation Possibilities)

Nostr Chat implements the following Nostr protocols:

- **NIP-01**: Basic protocol flow and event kinds
- **NIP-02**: Contact lists and follow relationships  
- **NIP-04**: Encrypted Direct Messages (legacy)
- **NIP-05**: Nostr address verification
- **NIP-07**: Browser extension signing
- **NIP-17**: Private Direct Messages (modern, recommended)
- **NIP-19**: bech32-encoded entities (npub, nsec, note, etc.)
- **NIP-44**: Versioned Encryption (used with NIP-17)
- **NIP-47**: Nostr Wallet Connect
- **NIP-57**: Lightning Zaps
- **NIP-65**: Relay List Metadata

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components (48+ available)
│   ├── auth/            # Authentication UI (LoginArea, LoginDialog)
│   ├── dm/              # Direct messaging interface
│   └── NostrProvider.tsx # Nostr protocol provider
├── hooks/               # Custom React hooks
│   ├── useNostr.ts      # Core Nostr integration
│   ├── useDMContext.ts  # DM state management
│   ├── useCurrentUser.ts # Auth state
│   ├── useZaps.ts       # Lightning payments
│   └── ...              # Many more utility hooks
├── contexts/            # React context providers
│   ├── AppContext.tsx   # Global app state
│   ├── DMContext.tsx    # DM provider (NIP-04 & NIP-17)
│   └── NWCContext.tsx   # Wallet connect provider
├── pages/               # Route pages
│   ├── Index.tsx        # Landing page
│   ├── Messages.tsx     # Main chat interface
│   └── NotFound.tsx     # 404 page
├── lib/                 # Utility functions
└── App.tsx              # Root app component
```

## 🎨 UI Components

Nostr Chat includes 48+ production-ready shadcn/ui components:

**Layout**: Card, Separator, Sheet, Sidebar, ScrollArea, Resizable  
**Navigation**: Breadcrumb, NavigationMenu, Menubar, Tabs, Pagination  
**Forms**: Button, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider  
**Feedback**: Alert, AlertDialog, Toast, Progress, Skeleton  
**Overlay**: Dialog, Popover, HoverCard, Tooltip, ContextMenu, DropdownMenu  
**Data Display**: Table, Avatar, Badge, Calendar, Chart, Carousel

All components are:
- Fully accessible (WCAG 2.1 AA)
- Customizable with Tailwind CSS
- Type-safe with TypeScript
- Theme-aware (light/dark mode)

## 🔒 Security & Privacy

- **End-to-End Encryption**: All messages encrypted with NIP-44
- **No Data Collection**: Zero tracking, zero analytics, zero surveillance
- **Client-Side Keys**: Your keys never leave your device
- **Open Source**: Fully transparent and auditable code
- **Censorship Resistant**: Decentralized architecture with no single point of failure
- **Multi-Relay**: Automatic failover if relays go down

## 🧪 Development

### Running Tests

```bash
npm test
```

This runs:
- TypeScript type checking
- ESLint code quality checks
- Vitest unit tests
- Production build verification

### Code Quality

The project maintains high code quality standards:
- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: Comprehensive linting rules
- **Testing**: Vitest with React Testing Library
- **Type Safety**: Full type coverage across the codebase

## 🌍 Deployment

Nostr Chat can be deployed to any static hosting service:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Other Platforms
The `dist/` folder after `npm run build` can be deployed to:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static file server

## 🤝 Contributing

Contributions are welcome! This project is part of the layer.systems ecosystem and follows standard open-source practices.

### Areas for Contribution
- 🐛 Bug fixes and issue reports
- ✨ New features and improvements
- 📚 Documentation enhancements
- 🌍 Internationalization and translations
- 🎨 UI/UX improvements

### Development Guidelines
- Follow TypeScript best practices
- Maintain test coverage for new features
- Use semantic commit messages
- Keep dependencies up to date
- Document new NIPs or features

## 🔗 Related Projects

Part of the **layer.systems** ecosystem:
- [layer.systems](https://layer.systems) - Main project hub
- Built with [MKStack](https://soapbox.pub/mkstack) - Nostr app framework

## 📚 Resources

- [Nostr Protocol](https://nostr.com) - Learn about Nostr
- [NIPs Repository](https://github.com/nostr-protocol/nips) - Protocol specifications
- [Nostr Clients](https://usenostr.org) - Discover other Nostr apps
- [Lightning Network](https://lightning.network) - Learn about Lightning payments

## 📄 License

Open source software - build on it, learn from it, improve it.

---

**Built with ❤️ for the Nostr community**

*Decentralized messaging that respects your privacy and freedom.*