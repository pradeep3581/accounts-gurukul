import React, { useState, useEffect } from 'react';
import { CONTACT } from '../config/site';

function waLink() {
  return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(CONTACT.waMessage)}`;
}

export default function AdmissionPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  function close() {
    setVisible(false);
    setDismissed(true);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={close} />
      <div className="relative bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_20px_40px_rgba(0,35,111,0.15)] border border-outline-variant/20 w-full sm:w-96 animate-slide-up">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
        <div className="pr-6">
          <span className="inline-block bg-primary-container/10 text-primary-container text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider mb-3">
            Announcement
          </span>
          <h3 className="font-headline font-bold text-xl text-on-surface mb-2">
            Admission Going On for New Batches
          </h3>
          <p className="font-body text-on-surface-variant text-sm mb-5 leading-relaxed">
            Secure your seat for 11th, 12th & B.Com. Limited seats available — enroll now!
          </p>
          <div className="flex gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-container text-on-primary py-2.5 rounded-xl text-sm font-label font-bold hover:bg-primary transition-colors shadow-sm text-center"
            >
              Enroll Now
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-secondary text-on-secondary py-2.5 rounded-xl text-sm font-label font-bold flex items-center justify-center gap-1.5 hover:bg-[#005321] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
