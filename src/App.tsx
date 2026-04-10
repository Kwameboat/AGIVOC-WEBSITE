/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Admissions from './components/Admissions';
import GalleryAndReviews from './components/GalleryAndReviews';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Admissions />
        <GalleryAndReviews />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
}


