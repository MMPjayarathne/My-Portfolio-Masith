"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { FaCalendarAlt } from "react-icons/fa"; 

const experiences = [
  {
    id: 1,
    title: "Software Engineer - Intern",
    subtitle: "Dec 2023 - Jul 2024",
    description: `
      <p><strong>As a Software Engineering Intern, I played a key role in enhancing the IDPS generic data distribution framework by integrating cloud-based solutions and improving system functionalities. My contributions include:</strong></p>
      <ul class="list-disc pl-6">
        <li><strong>Developed a data distribution framework</strong> using Spring Boot with Maven, integrated with Snowflake Data Warehouse, and deployed it in the AWS environment under the guidance of Software Architects.</li>
        <li><strong>Introduced and deployed a Wiremock-based feature</strong> for endpoint mocking, integrated with AWS Lambda and API Gateway.</li>
        <li><strong>Created and managed Datadog monitors</strong> to track API call latencies, setting up alerts to notify teams of performance issues, leading to faster response times.</li>
        <li><strong>Collaborated with QA Analysts</strong> to fix bugs, contributing to system stability.</li>
        <li><strong>Integrated various AWS services</strong>, including SQS, SNS, Cognito, EC2, Lambda, DynamoDB, and API Gateway, to enhance system capabilities and performance.</li>
        <li><strong>Enhanced the API Catalog’s frontend (ReactJs, Swagger UI)</strong> and backend (Node.js) functionalities, including user-based API gateway restrictions.</li>
        <li><strong>Actively participated in agile practices</strong>, including Sprints and code reviews, while maintaining comprehensive documentation.</li>
      </ul>
      <p>This experience provided me with valuable insights into full-stack development, cloud integration, and agile methodologies.</p>
    `,
    companyName: "London Stocks Exchange Group (LSEG)", 
    companyLogo: "/experience/lseg.png",
  },
];

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState<number>(0);

  const handleExperienceChange = (index: number) => {
    setActiveExperience(index);
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-background py-16"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="flex-1 md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 border-b-4 border-secondary pb-2">
            Industry Experience
          </h1>

          <div className="relative w-full max-w-3xl h-auto">
            {experiences.map((experience, index) => (
              <Card
                key={experience.id}
                className={`transition-transform duration-500 ease-in-out ${
                  index === activeExperience
                    ? "scale-100 opacity-100 z-10"
                    : "scale-90 opacity-50 z-0"
                }`}
              >
                <div
                  onClick={() => handleExperienceChange(index)}
                  className="flex p-6 cursor-pointer flex-col md:flex-row"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 mr-6 flex items-center justify-center rounded-full overflow-hidden mb-4 md:mb-0">
                    <img
                      src={experience.companyLogo}
                      alt="Company Logo"
                      className="h-full w-full object-contain"  // Fix zoom issue
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
                      {experience.companyName}
                    </div>

                    <div
                      className="mt-4 text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: experience.description,
                      }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src={experiences[activeExperience].companyLogo}
              alt="Selected Company Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
