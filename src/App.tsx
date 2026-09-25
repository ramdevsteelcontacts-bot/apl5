import { LanguageProvider } from '@/i18n/LanguageProvider';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import AppDownload from '@/components/AppDownload';
import { Registration } from '@/components/Registration';
import { Highlights } from '@/components/Highlights';
import { Rules } from '@/components/Rules';
import { Announcements } from '@/components/Announcements';
import { TournamentInfo } from '@/components/TournamentInfo';
import { Gallery } from '@/components/Gallery';
import { Committee } from '@/components/Committee';
import { Sponsors } from '@/components/Sponsors';
import { Contact } from '@/components/Contact';
import { PastSeasons } from '@/components/PastSeasons';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-apl-bg text-apl-ink overflow-x-hidden">
        <Navbar />

        <main>
          <Hero />

          <Registration />

          {/* ARM APP DOWNLOAD */}
          <AppDownload />

          <Highlights />

          <Rules />

          <Announcements />

          <TournamentInfo />

          <Gallery />

          <Committee />

          {/* SPONSORS / BHAMASHAH */}
          <Sponsors />

          <Contact />

          <PastSeasons />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;