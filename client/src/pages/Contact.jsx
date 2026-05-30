import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const whatsappNumber = "918509550774";
  const whatsappMessage = "Hi Sir, I want to know more about Accounts Gurukul classes.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = "tel:+918509550774";

  return (
    <div className="min-h-screen flex flex-col bg-surface pb-20 md:pb-0"> {/* Padding bottom for mobile sticky bar */}
      <Header />
      
      <main className="flex-grow">
        {/* 1. HEADER */}
        <section className="bg-surface-container-low py-16 px-6 text-center">
          <div className="container mx-auto max-w-3xl">
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface tracking-tight">
              Contact Accounts Gurukul
            </h1>
            <p className="mt-4 text-on-surface-variant text-lg md:text-xl font-body">
              Have questions or want to join? Contact us directly for quick response.
            </p>
          </div>
        </section>

        {/* 2. PRIMARY ACTION SECTION */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-2xl flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-label font-bold text-xl hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>

            <a
              href={callUrl}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-5 rounded-2xl font-label font-bold text-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Call Now
            </a>
          </div>
        </section>

        {/* 4. TRUST LINE */}
        <section className="pb-12 px-6 text-center">
          <div className="inline-block bg-error/10 text-error px-6 py-3 rounded-full font-label font-bold text-sm md:text-base border border-error/20 shadow-sm">
            Limited seats per batch. Contact early to secure your spot.
          </div>
        </section>

        {/* 3. LOCATION SECTION */}
        <section className="py-16 px-6 bg-surface-container-low">
          <div className="container mx-auto max-w-4xl space-y-8">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface text-center">
              Visit Us
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 bg-surface-container relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.284951002682!2d88.40850357522865!3d26.703342276772656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441006c079377%3A0x860da71078475749!2sAccounts%20Gurukul!5e0!3m2!1sen!2sin!4v1776834071083!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Accounts Gurukul Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button (Hidden on mobile to prioritize bottom bar) */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-outline-variant/30 z-50 flex p-3 gap-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a 
          href={callUrl}
          className="flex-1 flex items-center justify-center gap-2 bg-primary/10 text-primary py-3.5 rounded-xl font-label font-bold text-base active:bg-primary/20 transition-colors"
        >
          <span className="material-symbols-outlined">call</span>
          Call
        </a>
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-label font-bold text-base active:bg-[#20bd5a] transition-colors shadow-md"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
