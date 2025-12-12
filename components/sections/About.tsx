"use client";

import React, { useRef } from 'react';
import Section from '../Section';
import Card from '../Card';
import FadeIn from '../FadeIn';
import { motion, useInView, LayoutGroup } from 'framer-motion';
import { teamMembers } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  // margin: large negative value to trigger much earlier when scrolling up
  // amount: 0.1 means trigger when only 10% visible
  const isInView = useInView(ref, { once: false, amount: 0.1, margin: "0px 0px -500px 0px" });

  return (
    <Section 
      id="ueber-uns" 
      title=""
      subtitle=""
      background="white"
    >
      {/* We use LayoutGroup to allow elements to share layoutIds and animate between them */}
      <LayoutGroup>
        <div ref={ref} className="max-w-4xl mx-auto">
          
          {/* Headline */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 flex justify-center items-center mb-4">
              <span>Wer hinter</span>
              
              <div className="relative mx-2 h-12 flex items-center justify-center" style={{ minWidth: '85px' }}>
                {/* The "Eqiro" text - only visible when NOT in view */}
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 1 }}
                  animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {!isInView && (
                    <>
                      <motion.span
                        layoutId="eqi-highlight"
                        className="inline-block text-gray-900 font-bold"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        Eqi
                      </motion.span>
                      <motion.span
                        layoutId="ro-highlight"
                        className="inline-block text-gray-900 font-bold"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        ro
                      </motion.span>
                    </>
                  )}
                </motion.div>

                {/* Logo - fades in/out, absolutely centered */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 text-blue-600">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M75 25H35L20 50L35 75H75" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M30 50H65" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </div>

              <span>steht</span>
            </h2>
            
            {/* Subtitle - now directly under the title */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Zwei kreative Köpfe mit Leidenschaft für Qualität. Junge Perspektiven, erfahrene Hände – Fullstack-Entwicklung aus Zürich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative z-10">
                <Card className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 h-full bg-white/80 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold text-gray-400">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center justify-center md:justify-start">
                      {member.name === "Lion Hereqi" ? (
                        <>
                          <span>Lion Her</span>
                          <span className="relative inline-flex">
                            {/* Placeholder for layout */}
                            <span className="opacity-0">eqi</span>
                            
                            {/* The "eqi" arriving from title - only when in view */}
                            {isInView && (
                              <motion.span 
                                layoutId="eqi-highlight"
                                className="absolute left-0 top-0 text-gray-900 font-bold"
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                              >
                                eqi
                              </motion.span>
                            )}
                          </span>
                        </>
                      ) : member.name === "Mustafa Sagaaro" ? (
                        <>
                          <span>Mustafa Sagaa</span>
                          <span className="relative inline-flex">
                            <span className="opacity-0">ro</span>
                            {/* The "ro" arriving from title */}
                            {isInView && (
                              <motion.span 
                                layoutId="ro-highlight"
                                className="absolute left-0 top-0 text-gray-900 font-bold"
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                              >
                                ro
                              </motion.span>
                            )}
                          </span>
                        </>
                      ) : (
                        member.name
                      )}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      &quot;{member.description}&quot;
                    </p>
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                      {/* Social Icons kept simple for brevity in this update, assuming they persist via map */}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </LayoutGroup>
    </Section>
  );
}