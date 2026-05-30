import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdmissionPopup from '../components/AdmissionPopup';
import { CONTACT, STATS, COURSES } from '../config/site';

function waLink() {
  return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(CONTACT.waMessage)}`;
}

function CourseCard({ course }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col h-full hover:-translate-y-3 transition-all duration-300 relative group shadow-sm hover:shadow-[0px_20px_40px_rgba(0,35,111,0.08)] border border-transparent hover:border-primary-container/10">
      {course.popular && (
        <div className="absolute -top-4 -right-4 bg-error text-on-error text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-lg z-10 animate-pulse">
          Popular
        </div>
      )}
      <div className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl">{course.icon}</span>
      </div>
      <div className="mb-4">
        <span className={`inline-block ${course.tagColor} text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider`}>
          {course.tag}
        </span>
        <h3 className="font-headline font-bold text-2xl text-on-surface">{course.title}</h3>
      </div>
      <p className="font-body text-on-surface-variant flex-grow mb-8 text-sm leading-relaxed">
        {course.description}
      </p>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-surface-container-highest text-primary-container font-label font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 group-hover:bg-primary-container group-hover:text-on-primary transition-colors focus:ring-4 focus:ring-primary-container/30"
      >
        <span className="material-symbols-outlined text-xl">chat</span>
        Join via WhatsApp
      </a>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdmissionPopup />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center bg-surface overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-high opacity-80"></div>
          </div>
          <div className="container mx-auto px-8 md:px-16 z-10 relative flex flex-col md:flex-row items-center gap-16 pt-20 pb-24">
            <div className="md:w-1/2 flex flex-col items-start space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed-variant px-4 py-2 rounded-full text-sm font-label font-medium shadow-sm">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>5+ Years Experience | Limited Seats</span>
              </div>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-tight tracking-tighter text-on-surface">
                Top Commerce Coaching for <span className="text-gradient">11th, 12th & B.Com</span> in Siliguri
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Elevate your academic journey with personalized attention and scholarly expertise. Preparing students for absolute commerce mastery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label font-bold flex items-center justify-center gap-3 hover:bg-[#005321] transition-all shadow-[0px_20px_40px_rgba(0,110,47,0.15)] group focus:ring-4 focus:ring-secondary/30"
                >
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat</span>
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-label font-bold flex items-center justify-center gap-3 hover:bg-surface-dim transition-all focus:ring-4 focus:ring-surface-variant/50"
                >
                  <span className="material-symbols-outlined">call</span>
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-[0px_40px_80px_rgba(0,35,111,0.08)] bg-surface-container-lowest">
                <img 
                  alt="Students in a modern, well-lit classroom" 
                  className="object-cover w-full h-full object-center hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQn9Q1l4dILgW6rc0jEQlSvSX8zxb4rvu3RYVQpx4oAoR33NP97NttpMJBPJMcjcCaHTwR3YAtFXd-4LdjHVebQ_0gExqjvh-s1dAxlOa1eNAOJKGNaMGub6XeM2ogg6JwSV1tGAXA4_IEsQwznnPHMgM1oycXcTvUuXYR-iMnyc62Ha4MaIQkGIVYUBjvFr69AMmIC_Y_9pThJSOlSJuGe2XgDSRrzYIzXyIkbfhmEkGR-prSKXPQgl1vNhym6TpEua7zPpJyEUjO"
                />
              </div>
              
              {/* Floating Stat */}
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0px_20px_40px_rgba(0,35,111,0.06)] border border-outline-variant/15 flex items-center gap-4 animate-bounce hover:animate-none transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-2xl text-on-surface">300+</p>
                  <p className="font-label text-sm text-on-surface-variant">Successful Students</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Stats Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center px-8 hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-5xl text-primary-container mb-4 filter drop-shadow-md">{stat.icon}</span>
                  <h3 className="font-headline font-extrabold text-5xl mb-2 text-on-surface">{stat.value}</h3>
                  <p className="font-label text-on-surface-variant font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-32 bg-surface">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
              <span className="text-primary-container font-label font-bold tracking-widest uppercase mb-4 text-sm bg-primary-container/10 px-4 py-1.5 rounded-full inline-block">Our Curriculum</span>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-6">Academic Programs</h2>
              <p className="font-body text-on-surface-variant text-lg">Comprehensive coaching designed to build a strong foundation and ensure conceptual clarity for future commerce professionals.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {COURSES.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
              <span className="text-primary-container font-label font-bold tracking-widest uppercase mb-4 text-sm bg-primary-container/10 px-4 py-1.5 rounded-full inline-block">Contact Details</span>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface mb-6">Reach Accounts Gurukul</h2>
              <p className="font-body text-on-surface-variant text-lg">All contact details are available here for quick access.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a
                href={`tel:${CONTACT.phone}`}
                className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/20 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform"
              >
                <span className="material-symbols-outlined text-4xl text-primary-container">call</span>
                <div>
                  <p className="font-label text-sm uppercase tracking-wider text-on-surface-variant">Phone</p>
                  <p className="font-headline font-bold text-xl text-on-surface">{CONTACT.phone}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(CONTACT.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/20 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform"
              >
                <span className="material-symbols-outlined text-4xl text-secondary">chat</span>
                <div>
                  <p className="font-label text-sm uppercase tracking-wider text-on-surface-variant">WhatsApp</p>
                  <p className="font-headline font-bold text-xl text-on-surface">Chat with us</p>
                </div>
              </a>
              <div className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/20 flex flex-col items-center text-center gap-3">
                <span className="material-symbols-outlined text-4xl text-primary-container">location_on</span>
                <div>
                  <p className="font-label text-sm uppercase tracking-wider text-on-surface-variant">Address</p>
                  <p className="font-headline font-bold text-xl text-on-surface">{CONTACT.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
