import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* 1. TAGLINE SECTION */}
        <section className="bg-surface-container-low py-20 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface tracking-tight leading-tight">
              Strong Concepts. <br className="md:hidden" /><span className="text-primary">Better Results.</span>
            </h1>
            <p className="mt-6 text-on-surface-variant text-lg md:text-xl font-body max-w-2xl mx-auto">
              Limited seats per batch to maintain quality teaching.
            </p>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section className="py-20 px-6 bg-surface">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-surface-container-highest">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students learning in classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface">About Accounts Gurukul</h2>
              <div className="space-y-4 text-on-surface-variant font-body text-lg leading-relaxed">
                <p>
                  Accounts Gurukul is a dedicated commerce coaching institute in Siliguri.
                </p>
                <p>
                  We focus on helping students of Class 11, 12, B.Com and CA Foundation build strong concepts and score better in exams.
                </p>
                <p>
                  With 5+ years of teaching experience, our aim is simple — make Accounts and commerce subjects easy to understand and practical to apply in exams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TEACHER SECTION */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/20 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md border-4 border-surface-container-low">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Ashis Thakur - Teacher" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface">Meet Your Teacher</h2>
                <div className="space-y-4 text-on-surface-variant font-body text-lg leading-relaxed">
                  <p>
                    Accounts Gurukul is led by <strong>Ashis Thakur</strong>, an experienced NBU teacher with 5+ years of teaching experience in commerce subjects.
                  </p>
                  <p>
                    His teaching style is friendly and concept-focused, so students don't just memorize — they actually understand.
                  </p>
                  <p>
                    Every student gets personal attention, and no doubt is ignored. The goal is to make students confident in subjects like Accounts, Economics, and Business Studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TEACHING APPROACH & 5. WHY CHOOSE US */}
        <section className="py-20 px-6 bg-surface">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Approach */}
            <div>
              <h2 className="font-headline font-bold text-3xl text-on-surface mb-8">Our Teaching Approach</h2>
              <div className="space-y-6">
                {[
                  { icon: 'translate', text: 'Concepts explained in easy language (English + Hindi)' },
                  { icon: 'edit_square', text: 'Regular practice and question solving' },
                  { icon: 'live_help', text: 'Doubt clearing after every class' },
                  { icon: 'sports_score', text: 'Focus on exam pattern and scoring' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className="font-body text-lg text-on-surface-variant pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="font-headline font-bold text-3xl text-on-surface mb-8">What Makes Us Different</h2>
              <div className="space-y-6">
                {[
                  { icon: 'group', text: 'Small batch size (around 10 students)' },
                  { icon: 'person_raised_hand', text: 'Personal attention to every student' },
                  { icon: 'mood', text: 'Friendly and comfortable learning environment' },
                  { icon: 'trending_up', text: 'Regular tracking of student performance' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className="font-body text-lg text-on-surface-variant pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 6. TRUST SECTION */}
        <section className="py-20 px-6 bg-primary-container text-on-primary-container text-center">
          <div className="container mx-auto max-w-4xl space-y-6">
            <span className="material-symbols-outlined text-5xl opacity-80">verified_user</span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl">Student Results Speak For Us</h2>
            <p className="font-body text-xl md:text-2xl leading-relaxed opacity-90">
              We have helped many students improve their marks and build strong understanding in commerce subjects.
            </p>
          </div>
        </section>

        {/* 7. LOCATION SECTION & 8. CTA SECTION */}
        <section className="py-20 px-6 bg-surface">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Ready to Join?</h2>
                <p className="font-body text-xl text-on-surface-variant">
                  Contact us on WhatsApp to know more about batches and timings.
                </p>
                <p className="font-label text-sm text-primary mt-2 font-medium bg-primary/10 inline-block px-3 py-1 rounded-full">
                  Limited seats per batch
                </p>
              </div>
              
              <a 
                href="https://wa.me/918509550774?text=Hi%20Sir,%20I%20want%20to%20know%20more%20about%20Accounts%20Gurukul%20classes." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-label font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Now
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline font-bold text-2xl text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                Visit Us
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-md border border-outline-variant/20 bg-surface-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.284951002682!2d88.40850357522865!3d26.703342276772656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441006c079377%3A0x860da71078475749!2sAccounts%20Gurukul!5e0!3m2!1sen!2sin!4v1776834071083!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Accounts Gurukul Location"
                ></iframe>
              </div>
            </div>

          </div>
        </section>

      </main>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918509550774?text=Hi%20Sir,%20I%20want%20to%20know%20more%20about%20Accounts%20Gurukul%20classes." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
