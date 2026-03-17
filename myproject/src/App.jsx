import React from "react";
import { menuData } from "./MenuData";

const MenuSection = ({ title, items }) => (
  <section className="mb-16">
    <div className="flex items-center mb-8">
      <h2 className="text-2xl md:text-3xl font-serif font-black text-amber-900 uppercase tracking-tighter">
        {title}
      </h2>
      <div className="ml-4 flex-grow h-px bg-amber-200"></div>
    </div>

    <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col border-l-2 border-transparent hover:border-amber-400 pl-4 transition-all group"
        >
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-bold text-gray-800 uppercase tracking-tight group-hover:text-amber-700">
              {item.name}
            </h3>
            <span className="font-mono text-lg font-bold text-amber-900 ml-4 whitespace-nowrap">
              {item.price} RON
            </span>
          </div>
          <p className="text-gray-500 mt-1 leading-relaxed italic text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-[#fffcf5] text-gray-900">
      {/* Rainbow Header Accent */}
      <div className="h-2 w-full bg-linear-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-600"></div>

      <header className="py-20 px-6 text-center bg-white border-b border-amber-100">
        <h1 className="text-5xl md:text-8xl font-serif font-black text-amber-950 mb-2 tracking-tighter">
          GRAND BODEGA
        </h1>
        <p className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-amber-700">
          By Rainbow Coffee & More
        </p>
      </header>

      <main className="max-w-5xl mx-auto py-16 px-6">
        <MenuSection title="Cafea & Specialități" items={menuData.cafea} />
        <MenuSection title="Cocktailuri" items={menuData.cocktails} />
        <MenuSection title="Bere" items={menuData.bere} />
        <MenuSection title="Shots" items={menuData.shots} />
      </main>

      <footer className="bg-amber-950 text-amber-50 py-16 px-6 text-center">
        <div className="max-w-xs mx-auto border border-amber-800 p-8">
          <p className="font-serif italic text-2xl mb-4 text-amber-200">
            Ne vedem la bar.
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-70 leading-loose">
            Luni — Duminică
            <br />
            07:00 — Late
          </p>
        </div>
        <div className="mt-10 opacity-40 text-[9px] uppercase tracking-[0.2em]">
          © 2026 Rainbow Coffee Co. | Toate drepturile rezervate
        </div>
      </footer>
    </div>
  );
}

export default App;
