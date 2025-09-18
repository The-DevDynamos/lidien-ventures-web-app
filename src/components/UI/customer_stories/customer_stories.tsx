"use client";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { IoIosQuote } from "react-icons/io";

const CustomerStoriesSection = () => {
  const [activeStory, setActiveStory] = useState("Mariam");

  const stories: any = {
    Mariam: {
      name: "Kevin Maina",
      location: "Kiambu",
      solution: "Biogas Solution",
      avatar: "👩🏾",
      quote: '"Biogas cut our firewood use to zero"',
      testimonial:
        "We no longer spend hours collecting firewood. The biogas system turns our farm waste into clean cooking fuel. It's amazing and saves us so much time and money.",
      rating: 5,
    },
    Amina: {
      name: "Amina",
      location: "Nairobi",
      solution: "Solar Energy",
      avatar: "👩🏽",
      quote: '"Solar power transformed our home"',
      testimonial:
        "Since installing solar panels, we have reliable electricity 24/7. Our children can study at night, and we save over 5,000 shillings monthly on kerosene and charging fees.",
      rating: 5,
    },
    Ali: {
      name: "June Wekesa",
      location: "Bungoma",
      solution: "LPG Distribution",
      avatar: "👨🏽",
      quote: '"LPG delivery service is a lifesaver"',
      testimonial:
        "The reliable LPG delivery means we always have clean cooking fuel. No more last-minute trips to town or worrying about running out. The service is punctual and affordable.",
      rating: 4,
    },
  };

  const activeData = stories[activeStory];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Customer Stories
          </h2>
          <p className="text-lg text-gray-600">
            Real people, real results from clean energy solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Customer tabs */}
          <div className="flex justify-center mb-8 gap-4 flex-wrap">
            {Object.keys(stories).map((storyKey) => (
              <button
                key={storyKey}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  activeStory === storyKey
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
                onClick={() => setActiveStory(storyKey)}
              >
                {stories[storyKey].name}, {stories[storyKey].location}
              </button>
            ))}
          </div>

          {/* Testimonial card */}
          <div className="rounded-lg border bg-white text-gray-800 shadow-sm p-8 lg:shadow-md">
            <div className="text-center">
              <div className="inline-flex p-2 bg-green-100 rounded-full mb-4">
                <IoIosQuote className="w-8 h-8 text-green-500" />
              </div>

              <div className="text-6xl mb-4">{activeData.avatar}</div>

              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {activeData.quote}
              </h3>

              {/* Star rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < activeData.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                {activeData.testimonial}
              </p>

              <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
                <div className="font-semibold text-gray-800">
                  {activeData.name}
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-gray-600">{activeData.location}</div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-green-600 font-medium">
                  {activeData.solution}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;
