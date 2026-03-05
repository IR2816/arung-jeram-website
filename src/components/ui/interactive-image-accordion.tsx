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
        imageUrl: '/images/gallery/river-scenery.webp',
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
        relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[280px] sm:w-[400px]' : 'w-[50px] sm:w-[70px]'}
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
            />

            {/* Dark overlay for better text readability */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isActive ? 'opacity-20' : 'opacity-60'}`}></div>

            {/* Caption Text */}
            <div
                className={`
          absolute inset-0 flex flex-col items-center justify-end p-6 text-white
          transition-all duration-300 ease-in-out
        `}
            >
                <span
                    className={`
            font-bold whitespace-nowrap transition-all duration-500
            ${isActive
                            ? 'text-xl sm:text-2xl mb-2 translate-y-0 opacity-100'
                            : 'text-lg rotate-90 mb-20 sm:mb-24 opacity-80'
                        }
          `}
                >
                    {item.title}
                </span>

                {isActive && (
                    <p className="text-xs sm:text-sm text-gray-200 text-center animate-fade-in line-clamp-2">
                        {item.description}
                    </p>
                )}
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
        <section className="bg-white py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
                            Petualangan Lengkap di Satu Tempat
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                            Dari jeram yang memacu adrenalin hingga ketenangan berkemah di tepi sungai, Sembar Adventure menyediakan segalanya untuk liburan tak terlupakan.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#paket"
                                className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300"
                            >
                                Lihat Paket
                            </a>
                            <a
                                href="#booking"
                                className="inline-block bg-white text-gray-900 border border-gray-200 font-semibold px-8 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300"
                            >
                                Booking Sekarang
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 overflow-x-auto p-4 scrollbar-hide snap-x">
                            {accordionItems.map((item, index) => (
                                <div key={item.id} className="snap-center">
                                    <AccordionItem
                                        item={item}
                                        isActive={index === activeIndex}
                                        onMouseEnter={() => handleItemHover(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
