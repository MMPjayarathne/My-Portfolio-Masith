"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { FaCalendarAlt } from "react-icons/fa";

const volunteerExperiences = [
  {
    id: 1,
    title: "President",
    subtitle: "Oct 2024 - Present",
    description: 
      "Leading the Software Engineering Students' Association (SESA) by motivating the executive team, organizing events like workshops and hackathons, building industry relationships, and engaging with students for feedback. Working closely with faculty for strategic planning to align initiatives with academic and professional goals.",
    organizationName: "Software Engineering Students' Association, University of Kelaniya, Sri Lanka",
    organizationLogo: "/volunteer/sesa.jpg", 
  },
  {
    id: 2,
    title: "Junior Treasurer",
    subtitle: "Mar 2019 - Nov 2019",
    description:
      "Organized fundraising events and managed event logistics, including handling budgets and financial reports.",
    organizationName: "IEEE Computer Chapter, University of Kelaniya, Sri Lanka",
    organizationLogo: "/volunteer/ieee.png", 
  },
];

export default function Volunteer() {
  const [activeVolunteerExperience, setActiveVolunteerExperience] = useState<number>(0);

  const handleVolunteerExperienceChange = (index: number) => {
    setActiveVolunteerExperience(index);
  };

  return (
    <section
      id="volunteer-experience"
      className="min-h-screen flex items-center justify-center bg-background py-16"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row">

        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src={volunteerExperiences[activeVolunteerExperience].organizationLogo}
              alt="Selected Organization Logo"
              className="h-full w-full object-contain" // Fix zoom issue with object-contain
            />
          </div>
        </div>

        <div className="flex-1 md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
            Volunteer Experience
          </h1>

          <div className="relative w-full max-w-3xl h-auto">
            {volunteerExperiences.map((experience, index) => (
              <Card
                key={experience.id}
                className={`transition-transform duration-500 ease-in-out ${
                  index === activeVolunteerExperience
                    ? "scale-100 opacity-100 z-10"
                    : "scale-90 opacity-50 z-0"
                }`}
              >
                <div
                  onClick={() => handleVolunteerExperienceChange(index)}
                  className="flex p-6 cursor-pointer flex-col md:flex-row" 
                >

                  <div className="w-16 h-16 md:w-24 md:h-24 mr-6 flex items-center justify-center rounded-full overflow-hidden mb-4 md:mb-0">
                    <img
                      src={experience.organizationLogo}
                      alt="Organization Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                      <h2 className="text-xl font-semibold text-primary">
                        {experience.title}
                      </h2>
                      <div className="mt-2 md:mt-0 flex items-center gap-2 text-sm text-muted-foreground">
                        <FaCalendarAlt size={14} />
                        <span>{experience.subtitle}</span>
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-gray-600">
                      {experience.organizationName}
                    </div>

                    <div className="mt-4 text-gray-700">
                      <p>{experience.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
