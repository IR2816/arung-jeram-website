'use client'

import React, { useState } from 'react';
import Image from 'next/image';

// --- Data for the adventure accordion ---
const accordionItems = [
    {
        id: 1,
        title: 'Family Trip',
        imageUrl: '/images/Rafting/webp/5.webp',
        description: 'Serunya petualangan bareng keluarga di arus tenang.',
    },
    {
        id: 2,
        title: 'Adventure Trip',
        imageUrl: '/images/Rafting/webp/10.webp',
        description: 'Tantang adrenalinmu di jeram-jeram menantang.',
    },
    {
        id: 3,
        title: 'Camping Ground',
        imageUrl: '/images/gallery/camping-ground.jpg',
        description: 'Bermalam di bawah bintang tepi sungai.',
    },
    {
        id: 4,
        title: 'Sembar Sunset Cafe',
        imageUrl: '/images/cafe2/cafe-new.webp',
        description: 'Santai sore dengan pemandangan lembah.',
    },
    {
        id: 5,
        title: 'Outbound & Paintball',
        imageUrl: '/images/Rafting/webp/7.webp',
        description: 'Bangun kekompakan tim dalam keseruan.',
    },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
    item: typeof accordionItems[0];
    isActive: boolean;
    onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
    return (
        <div
            className={`
        relative rounded-[2rem] overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isActive
                    ? 'w-full lg:w-[400px] h-[400px] lg:h-[450px]'
                    : 'w-full lg:w-[70px] h-[80px] lg:h-[450px]'
                }
      `}
            onMouseEnter={onMouseEnter}
            onClick={onMouseEnter}
        >
            {/* Background Image */}
            <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />

            {/* Dark overlay for better text readability */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-60'}`}></div>

            {/* Caption Text */}
            <div
                className={`
          absolute inset-0 flex flex-col items-center justify-center lg:justify-end p-6 text-white
          transition-all duration-300 ease-in-out
        `}
            >
                <div className={`flex flex-col items-center transition-all duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2 lg:-rotate-90 lg:-translate-y-20'}`}>
                    <span
                        className={`
            font-black tracking-tight whitespace-nowrap transition-all duration-500 uppercase font-outfit
            ${isActive
                                ? 'text-2xl sm:text-3xl mb-2 opacity-100'
                                : 'text-lg lg:text-xl opacity-80'
                            }
          `}
                    >
                        {item.title}
                    </span>

                    {isActive && (
                        <p className="text-sm md:text-base text-emerald-100/80 text-center animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-xs line-clamp-2 font-medium">
                            {item.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemHover = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section id="fasilitas" className="bg-white py-12 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Premium Facilities
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase font-outfit">
                            Satu Tempat <br />
                            <span className="text-emerald-500">Sejuta</span> Cerita.
                        </h2>
                        <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Dari jeram yang memacu adrenalin hingga ketenangan berkemah di tepi sungai, kami menyediakan segalanya untuk liburan tak terlupakan.
                        </p>
                        <div className="mt-10 flex flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#paket"
                                className="inline-block bg-emerald-950 text-white font-black px-8 h-16 flex items-center justify-center rounded-2xl shadow-xl hover:bg-black transition-all duration-300 hover:scale-105 active:scale-95 text-sm uppercase tracking-wider"
                            >
                                Jelajahi Paket
                            </a>
                            <a
                                href="#booking"
                                className="inline-block bg-white text-emerald-950 border border-emerald-950/10 font-black px-8 h-16 flex items-center justify-center rounded-2xl shadow-sm hover:bg-emerald-50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm uppercase tracking-wider"
                            >
                                Reservasi
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 w-full max-w-[500px] lg:max-w-none mx-auto">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => handleItemHover(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

