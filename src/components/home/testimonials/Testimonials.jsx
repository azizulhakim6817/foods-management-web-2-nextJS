"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahat Chowdhury",
      role: "Verified Buyer",
      text: "SwiftCart is genuinely fast. I ordered a laptop in the morning and it was delivered by evening. Exceptional service!",
      img: "https://i.pravatar.cc/150?u=rahat",
    },
    {
      name: "Sumi Akter",
      role: "Power User",
      text: "The checkout process is so smooth, it literally feels like shopping at the speed of thought. My go-to platform for tech.",
      img: "https://i.pravatar.cc/150?u=sumi",
    },
    {
      name: "Arif Ahmed",
      role: "Tech Enthusiast",
      text: "I was skeptical about delivery times, but they proved me wrong. Best customer support I have encountered in years.",
      img: "https://i.pravatar.cc/150?u=arif",
    },
    {
      name: "Jannat Ferdaus",
      role: "Fashion Blogger",
      text: "The curation of products here is unmatched. I find things on SwiftCart that aren't available anywhere else locally.",
      img: "https://i.pravatar.cc/150?u=jannat",
    },
    {
      name: "Tanvir Hossain",
      role: "Regular Shopper",
      text: "Affordable prices and authentic products. I've never had to worry about the quality of what I receive.",
      img: "https://i.pravatar.cc/150?u=tanvir",
    },
  ];

  return (
    <section className="py-24 overflow-hidden ">
      <div className="container mx-auto px-2 md:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-(--color-primary)/10 text-(--color-primary) font-bold tracking-wider uppercase text-xs mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl  font-black text-gray-900 leading-tight dark:text-white">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-(--color-accent)">
              thousands
            </span>{" "}
            of happy shoppers.
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="swiper-fade-edges">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={6000} // Speed of the transition (6 seconds for a full slide move)
            autoplay={{
              delay: 0, // No pause between slides
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Stops animation when user hovers to read
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !pb-20"
          >
            {testimonials.map((user, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative p-1 h-full rounded-[2.5rem] bg-linear-to-b from-gray-100 to-transparent hover:from-(--color-primary)/40 transition-all duration-500 ">
                  <div className="relative h-full p-8 md:p-12 rounded-[calc(2.5rem-4px)] bg-gray-50 group-hover:bg-white transition-colors duration-500 flex flex-col  dark:bg-black dark:text-white dark:group-hover:bg-black ">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-10 text-gray-200 group-hover:text-(--color-primary)/20 transition-colors  dark:bg-black dark:text-white">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V4H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H0.017V4H10.017V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z" />
                      </svg>
                    </div>

                    <p className="relative text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-10 flex-grow italic  dark:bg-black dark:text-white">
                      "{user.text}"
                    </p>

                    <div className="flex items-center gap-5 mt-auto">
                      <div className="relative">
                        <div className="absolute inset-0 bg-(--color-primary) rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                        <img
                          src={user.img}
                          className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                          alt={user.name}
                        />
                      </div>
                      <div>
                        <p className="font-black text-gray-900 text-lg leading-none mb-1">
                          {user.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            {user.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
