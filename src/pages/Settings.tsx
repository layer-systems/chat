import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { MessageSquare, Home, Settings as SettingsIcon, Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { LoginArea } from '@/components/auth/LoginArea';
import { RelayListManager } from '@/components/RelayListManager';
import { useTheme } from '@/hooks/useTheme';
import type { Theme } from '@/contexts/AppContext';

const Settings = () => {
  useSeoMeta({
    title: 'Settings - Nostr Chat',
    description: 'Configure your Nostr Chat preferences',
  });

  const { theme, setTheme } = useTheme();

  const themeOptions: { value: Theme; label: string; icon: React.ReactNode; description: string }[] = [
    {
      value: 'light',
      label: 'Light',
      icon: <Sun className="h-4 w-4" />,
      description: 'Use light theme',
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: <Moon className="h-4 w-4" />,
      description: 'Use dark theme',
    },
    {
      value: 'system',
      label: 'System',
      icon: <Monitor className="h-4 w-4" />,
      description: 'Follow system preference',
    },
  ];

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
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Page Title */}
          <div className="flex items-center gap-3">
            <SettingsIcon className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Manage your preferences and configuration</p>
            </div>
          </div>

          {/* Theme Section */}
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how Nostr Chat looks on your device</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label htmlFor="theme-selector" className="text-base font-medium">
                  Theme
                </Label>
                <RadioGroup
                  id="theme-selector"
                  value={theme}
                  onValueChange={(value) => setTheme(value as Theme)}
                  className="gap-3"
                >
                  {themeOptions.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 space-y-0 border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => setTheme(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="flex items-center gap-3 flex-1 cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-muted">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.description}</div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Relay Management Section */}
          <Card>
            <CardHeader>
              <CardTitle>Relay Configuration</CardTitle>
              <CardDescription>
                Manage your Nostr relays to control where your messages are published and retrieved
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RelayListManager />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
