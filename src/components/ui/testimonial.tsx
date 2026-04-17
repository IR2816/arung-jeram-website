import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
    id: number | string
    name: string
    avatar: string
    description: string
    reviewUrl?: string
    stars?: number
}

interface TestimonialCarouselProps
    extends React.HTMLAttributes<HTMLDivElement> {
    testimonials: Testimonial[]
    showArrows?: boolean
    showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
    HTMLDivElement,
    TestimonialCarouselProps
>(
    (
        { className, testimonials, showArrows = true, showDots = true, ...props },
        ref,
    ) => {
        const [currentIndex, setCurrentIndex] = React.useState(0)
        const [exitX, setExitX] = React.useState<number>(0)

        const handleDragEnd = (
            event: MouseEvent | TouchEvent | PointerEvent,
            info: PanInfo,
        ) => {
            if (Math.abs(info.offset.x) > 100) {
                setExitX(info.offset.x)
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
                    setExitX(0)
                }, 200)
            }
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "h-72 w-full flex items-center justify-center",
                    className
                )}
                {...props}
            >
                <div className="relative w-80 h-64">
                    {testimonials.map((testimonial, index) => {
                        const isCurrentCard = index === currentIndex
                        const isPrevCard =
                            index === (currentIndex + 1) % testimonials.length
                        const isNextCard =
                            index === (currentIndex + 2) % testimonials.length

                        if (!isCurrentCard && !isPrevCard && !isNextCard) return null

                        return (
                            <motion.div
                                key={testimonial.id}
                                className={cn(
                                    "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing",
                                    "bg-white shadow-xl",
                                    "dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)]",
                                )}
                                style={{
                                    zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                                }}
                                drag={isCurrentCard ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.7}
                                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                                initial={{
                                    scale: 0.95,
                                    opacity: 0,
                                    y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                                    rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                                }}
                                animate={{
                                    scale: isCurrentCard ? 1 : 0.95,
                                    opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                                    x: isCurrentCard ? exitX : 0,
                                    y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                                    rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                {showArrows && isCurrentCard && (
                                    <div className="absolute inset-x-0 top-2 flex justify-between px-4">
                                        <span className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary">
                                            &larr;
                                        </span>
                                        <span className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary">
                                            &rarr;
                                        </span>
                                    </div>
                                )}

                                <div className="p-6 flex flex-col items-center gap-3">
                                    <div className="relative">
                                      <img
                                          src={testimonial.avatar}
                                          alt={testimonial.name}
                                          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md border-2 border-emerald-50"
                                      />
                                      {testimonial.reviewUrl && (
                                        <a href={testimonial.reviewUrl} target="_blank" rel="noopener noreferrer" className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-md hover:scale-110 transition-transform">
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Maps_icon.svg/512px-Google_Maps_icon.svg.png" alt="Google Maps" className="w-5 h-5 object-contain" />
                                        </a>
                                      )}
                                    </div>
                                    <div className="text-center space-y-1">
                                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-none">
                                          {testimonial.name}
                                      </h3>
                                      {testimonial.stars && (
                                          <div className="flex justify-center gap-0.5 text-amber-400">
                                              {[...Array(testimonial.stars)].map((_, i) => (
                                                  <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                  </svg>
                                              ))}
                                          </div>
                                      )}
                                    </div>
                                    <p className="text-center text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-4 px-2">
                                        "{testimonial.description}"
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                    {showDots && (
                        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-colors",
                                        index === currentIndex
                                            ? "bg-emerald-500"
                                            : "bg-gray-300",
                                    )}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
