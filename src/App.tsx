import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { NameEntryScreen } from './components/NameEntryScreen';
import { EnvelopeReveal } from './components/EnvelopeReveal';
import { InvitationLetter } from './components/InvitationLetter';

type ScreenState = 'welcome' | 'name-entry' | 'envelope' | 'invitation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('welcome');
  const [visitorName, setVisitorName] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Check URL query parameters in case a recipient name was passed, but always allow customization
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const nameParam = params.get('name');
      if (nameParam && nameParam.trim()) {
        const decoded = nameParam.trim();
        setVisitorName(decoded);
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  // Scroll to top smoothly whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleStartWelcome = () => {
    // If name is already present from previous entry or query, we can go to name-entry to confirm or envelope
    setCurrentScreen('name-entry');
  };

  const handleSubmitName = (enteredName: string) => {
    setVisitorName(enteredName);
    setCurrentScreen('envelope');
  };

  const handleOpenComplete = () => {
    setCurrentScreen('invitation');
  };

  const handleReplay = () => {
    setVisitorName('');
    setCurrentScreen('welcome');
    // Clean up query parameter without page reload
    if (window.history && window.history.replaceState) {
      const url = window.location.pathname;
      window.history.replaceState({}, '', url);
    }
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FBF7ED] text-[#24352F] flex flex-col justify-between selection:bg-[#D6B66C]/30 selection:text-[#0B382D]">
      <main className="w-full flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {currentScreen === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <WelcomeScreen
                onStart={handleStartWelcome}
                soundEnabled={soundEnabled}
                onToggleSound={toggleSound}
              />
            </motion.div>
          )}

          {currentScreen === 'name-entry' && (
            <motion.div
              key="name-entry"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <NameEntryScreen
                initialName={visitorName}
                onSubmitName={handleSubmitName}
                onBack={() => setCurrentScreen('welcome')}
                soundEnabled={soundEnabled}
              />
            </motion.div>
          )}

          {currentScreen === 'envelope' && (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45 }}
              className="w-full"
            >
              <EnvelopeReveal
                visitorName={visitorName}
                onOpenComplete={handleOpenComplete}
                onEditName={() => setCurrentScreen('name-entry')}
                soundEnabled={soundEnabled}
              />
            </motion.div>
          )}

          {currentScreen === 'invitation' && (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <InvitationLetter
                visitorName={visitorName}
                onReplay={handleReplay}
                onBackToEnvelope={() => setCurrentScreen('envelope')}
                soundEnabled={soundEnabled}
                onToggleSound={toggleSound}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
