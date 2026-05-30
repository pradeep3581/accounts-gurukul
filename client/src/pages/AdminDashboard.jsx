import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex">
      {/* NavigationDrawer */}
      <nav className="fixed left-0 top-0 flex-col bg-[#f4f3fa] dark:bg-slate-900 text-[#1E3A8A] dark:text-blue-400 font-['Inter'] text-sm font-medium h-screen w-72 rounded-r-xl shadow-xl shadow-blue-900/5 transition-all duration-250 ease-in-out z-40 hidden md:flex">
        <div className="p-8">
          <h1 className="font-['Manrope'] font-bold text-[#1E3A8A] mb-8 text-2xl">Accounts Gurukul</h1>
          <div className="flex items-center gap-4 mb-8">
            <img alt="Admin User" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDhJb0M3VQFn5nJrlvwT2wZ14PRqHFgq9Ni9i1qv5yZDk82c3L1EZRuk9do_MuvTvehYBcBg-k0Dxh9HjXDYGN86xmwKT1uBs6j8PLOLVwr_sb3u0wAZJInpWh_CNzeyus2NP9hrTiFdW03ccWUYz1kQRB2F17GdhrXSNEFm0GgGIk1DEyq6E_-IYiZqBeesOrMI763IdMx3uTYQjSXDF_qh562MYS_LNTl4tVTySL8DmsBmiButHMy6U6H89j2W6Nk6wjK5kxy9ZB" />
            <div>
              <p className="font-headline font-bold text-on-surface">Academic Registrar</p>
              <p className="text-xs text-on-surface-variant">Admin Control Panel</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 space-y-2">
          <a className="flex items-center gap-4 px-4 py-3 bg-[#1E3A8A] text-white rounded-lg mx-2 my-1 transition-colors group" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-[#444651] dark:text-slate-300 mx-2 my-1 hover:bg-[#e3e1e9] dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">upload_file</span>
            <span>Upload Results</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-[#444651] dark:text-slate-300 mx-2 my-1 hover:bg-[#e3e1e9] dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">reviews</span>
            <span>Testimonials</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 md:ml-72 flex flex-col min-h-screen">
        <header className="sticky top-0 w-full flex justify-between items-center px-8 py-4 max-w-full mx-auto bg-[#faf8ff] dark:bg-slate-950 text-[#1E3A8A] dark:text-blue-400 font-['Manrope'] font-bold tracking-tight text-2xl docked full-width z-50 md:hidden border-b border-outline-variant/15">
          <button className="text-[#1E3A8A] hover:text-[#1E3A8A] transition-colors duration-300 scale-95 transition-transform p-2">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
          <span className="font-['Manrope'] font-extrabold tracking-tighter text-2xl">Accounts Gurukul</span>
          <div className="w-10"></div>
        </header>
        
        <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full flex-1">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-background mb-2">Overview</h2>
              <p className="text-on-surface-variant font-label text-base">Welcome back. Here is the latest data for Accounts Gurukul.</p>
            </div>
            <button className="bg-primary-container text-on-primary px-6 py-3 rounded-xl font-label font-semibold shadow-sm hover:bg-primary transition-colors flex items-center gap-2 w-fit">
              <span className="material-symbols-outlined text-xl">add</span>
              Quick Action
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-surface-container-lowest rounded-2xl p-8 relative overflow-hidden group border border-outline-variant/15">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                </div>
                <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold px-3 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-on-background mb-1 relative z-10">1,248</h3>
              <p className="text-on-surface-variant font-label text-sm relative z-10">Total Enrolled Students</p>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 relative overflow-hidden group border border-outline-variant/15">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                </div>
                <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold px-3 py-1 rounded-full">New</span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-on-background mb-1 relative z-10">342</h3>
              <p className="text-on-surface-variant font-label text-sm relative z-10">Recent Results Uploaded</p>
            </div>
          </div>

          {/* Upload Form Area */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-12 mb-16 border border-outline-variant/15">
            <div className="max-w-3xl">
              <h2 className="font-headline text-2xl font-bold text-on-background mb-2">Upload Student Results</h2>
              <p className="text-on-surface-variant font-body text-base mb-10">Add new academic achievements to the public board.</p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-label text-sm font-semibold text-on-background" htmlFor="student_name">Student Name</label>
                    <input className="w-full bg-surface-container-lowest border-0 rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-container shadow-sm" id="student_name" placeholder="e.g. Ananya Sharma" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-sm font-semibold text-on-background" htmlFor="student_marks">Marks / Score</label>
                    <input className="w-full bg-surface-container-lowest border-0 rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-container shadow-sm" id="student_marks" placeholder="e.g. 98% in Accountancy" type="text" />
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <label className="block font-label text-sm font-semibold text-on-background">Student Photo</label>
                  <div className="border-2 border-dashed border-outline-variant/50 rounded-2xl p-10 bg-surface-container-lowest text-center hover:bg-surface transition-colors cursor-pointer relative group">
                    <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" type="file" />
                    <div className="w-16 h-16 mx-auto bg-surface-container rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-3xl text-on-surface-variant">cloud_upload</span>
                    </div>
                    <p className="font-headline text-lg font-bold text-on-background mb-1">Click to upload or drag and drop</p>
                    <p className="font-label text-sm text-on-surface-variant">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                  </div>
                </div>
                
                <div className="pt-6 flex justify-end gap-4">
                  <button className="px-6 py-3 rounded-xl font-label font-semibold text-on-surface-variant hover:bg-surface-container transition-colors" type="button">Cancel</button>
                  <button className="bg-primary-container text-on-primary px-8 py-3 rounded-xl font-label font-semibold shadow-sm hover:bg-primary transition-colors" type="submit">Publish Result</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
