// app/about-us/page.tsx
"use client";

import React from "react";
import Navbar from "@/components/UI/navbar/navbar";
import Link from "next/link";
import Footer from "../footer/footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-25 to-green-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_76%_36%_/_0.15)] to-[hsl(35_84%_55%_/_0.1)]"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[hsl(48_96%_75%)] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[hsl(142_76%_65%)] rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-radial-gradient(circle, hsl(142_76%_36%_/_0.05) 0%, transparent 70%)"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                Leading Renewable Energy Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-green-300">LidienVentures</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed font-light max-w-3xl mx-auto">
              Pioneering Kenya&lsquo;s renewable energy revolution with
              innovative, sustainable solutions that power progress
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 hover:bg-white/15 transition-all duration-300">
                🌱 Eco-Innovation
              </span>
              <span className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 hover:bg-white/15 transition-all duration-300">
                ⚡ Sustainable Power
              </span>
              <span className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 hover:bg-white/15 transition-all duration-300">
                💚 Green Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-25/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-green-500 font-semibold text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
                Building a Sustainable{" "}
                <span className="text-green-600">Future</span>
              </h2>
              <div className="space-y-6 text-green-800">
                <p className="text-lg leading-relaxed font-light">
                  Founded with a vision to transform Kenya&lsquo;s energy
                  landscape, LidienVentures has been at the forefront of
                  renewable energy innovation since our inception. We recognized
                  the immense potential of sustainable power to drive economic
                  growth while preserving our environment.
                </p>
                <p className="leading-relaxed font-light">
                  From modest beginnings, we&lsquo;ve evolved into a
                  comprehensive renewable energy partner serving residential,
                  commercial, and industrial clients across Kenya. Our growth
                  has been guided by an unwavering commitment to excellence,
                  innovation, and meaningful customer relationships.
                </p>
                <p className="leading-relaxed font-light">
                  Today, we take pride in being one of Kenya&lsquo;s most
                  trusted sustainable energy providers, with a track record of
                  successful installations and a growing community of clients
                  experiencing the benefits of reliable, cost-effective green
                  energy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/solutions/solar_power_generation_2.jpg"
                  alt="Our Solar Installation Team"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm font-light">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-xs font-light">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-green-100 transform group-hover:-translate-y-2 transition-all duration-500">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 text-white text-4xl shadow-lg">
                  🎯
                </div>
                <h3 className="text-3xl font-bold text-green-900 mb-6 text-center">
                  Our Mission
                </h3>
                <p className="text-green-800 leading-relaxed text-lg font-light text-center">
                  To deliver affordable, reliable, and sustainable energy
                  solutions that empower Kenyan households and businesses to
                  achieve energy independence while significantly reducing their
                  environmental impact through cutting-edge green technologies.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-emerald-100 transform group-hover:-translate-y-2 transition-all duration-500">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 text-white text-4xl shadow-lg">
                  🔭
                </div>
                <h3 className="text-3xl font-bold text-green-900 mb-6 text-center">
                  Our Vision
                </h3>
                <p className="text-green-800 leading-relaxed text-lg font-light text-center">
                  To emerge as East Africa&lsquo;s premier renewable energy
                  innovator, accelerating the transition to clean energy and
                  building a sustainable legacy for future generations through
                  transformative eco-friendly solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4 mb-6">
              Core <span className="text-green-600">Values</span>
            </h2>
            <p className="text-green-700 text-lg font-light leading-relaxed">
              The foundational principles that guide our mission to create a
              sustainable, energy-efficient future for Kenya
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "We continuously explore cutting-edge technologies and methodologies to deliver pioneering sustainable energy solutions.",
              },
              {
                icon: "⭐",
                title: "Excellence",
                description:
                  "We maintain uncompromising quality standards in every project, using premium components and meticulous craftsmanship.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                description:
                  "We build lasting trust through transparent operations, honest counsel, and reliable post-installation support.",
              },
              {
                icon: "🌍",
                title: "Sustainability",
                description:
                  "We champion environmental stewardship and promote sustainable energy practices across East Africa.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-green-50"
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-green-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-green-700 leading-relaxed font-light text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-25 to-emerald-25"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4 mb-6">
              Meet Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-green-700 text-lg font-light">
              The passionate professionals driving our mission for a
              sustainable, energy-independent Kenya
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Chief Executive Officer",
                image: "/images/teammate.jpg",
                bio: "15+ years in renewable energy leadership. Passionate about sustainable development and green technology innovation.",
              },
              {
                name: "Jane Smith",
                role: "Technical Director",
                image: "/images/teammate.jpg",
                bio: "Solar engineering expert with numerous successful large-scale installations and sustainable energy projects.",
              },
              {
                name: "Mike Johnson",
                role: "Operations Manager",
                image: "/images/teammate.jpg",
                bio: "Ensures flawless project execution and maintains our high quality standards for sustainable energy solutions.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-white to-green-25 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                </div>
                <h4 className="text-xl font-bold text-green-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-green-500 font-semibold mb-4 bg-green-100 px-4 py-1.5 rounded-full text-sm inline-block">
                  {member.role}
                </p>
                <p className="text-green-700 text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-green-200">Impact</span>
            </h2>
            <p className="text-green-100 text-xl font-light leading-relaxed">
              Driving meaningful change through sustainable energy solutions
              across Kenya
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "10MW+", label: "Clean Capacity Installed" },
              { number: "1000+", label: "Satisfied Clients" },
              { number: "15+", label: "Counties Served" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-5xl font-bold mb-3 text-green-200 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm font-light opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
              Trust & Quality
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4 mb-6">
              Certifications &{" "}
              <span className="text-green-600">Partnerships</span>
            </h2>
            <p className="text-green-700 text-lg font-light">
              Recognized by industry leaders and certified for uncompromising
              quality and safety standards
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              {
                src: "/images/cert.jpg",
                alt: "Energy Regulatory Commission",
              },
              {
                src: "/images/cert.jpg",
                alt: "ISO Certified",
              },
              {
                src: "/images/cert.jpg",
                alt: "SunPower Partner",
              },
              {
                src: "/images/cert.jpg",
                alt: "Green Energy Certified",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 group"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-16 object-contain rounded-2xl  grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95 font-light">
            Join thousands of satisfied customers who have embraced clean,
            reliable sustainable energy with LidienVentures
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact-us"
              className="bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-3 text-lg group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                💬
              </span>
              Get In Touch
            </Link>
            <Link
              href="/solutions"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl flex items-center gap-3 text-lg group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                🔍
              </span>
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
