import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
  const faqData = [
    {
      title: 'What areas do you clean?',
      desc: 'We clean lobbies, restrooms, breakrooms, offices, hallways, elevators, and outdoor areas as needed.',
    },
    {
      title: 'Do you offer day porter services?',
      desc: 'Yes, our day porters handle daily maintenance tasks, including trash removal, restocking supplies, and addressing on-demand cleaning needs.',
    },
    {
      title: 'Are your cleaning products safe?',
      desc: 'We use eco-friendly and OSHA-compliant cleaning products that are safe for people, pets, and the environment.',
    },
    {
      title: 'Can I schedule emergency cleanings?',
      desc: 'Absolutely. Our emergency cleaning team is available for urgent disinfection, spill cleanup, or after-hours cleaning services.',
    },
    {
      title: 'Do you provide deep cleaning services?',
      desc: 'Yes, we offer scheduled deep cleaning including carpet shampooing, window washing, floor buffing, and full disinfection of your facilities.',
    },
  ];

  return (
    <div>
      <BreadCumb bgImg="/assets/img/page_heading_1.webp" Title="Porter Service"></BreadCumb>
      <ServiceDetails
        bannerImage={{
          src: '/assets/img/hero_bg_1.webp',
          alt: 'Commercial Cleaning and Porter Services Banner',
          width: 854,
          height: 378,
        }}
        title="Professional Cleaning & Porter Services"
        description={[
          'We specialize in providing high-quality commercial cleaning and porter services for office buildings, apartment complexes, retail centers, and more. Our uniformed team is trained, insured, and ready to maintain the cleanliness and functionality of your property — inside and out.',
          'Whether you need day porters to handle daily upkeep or a full cleaning crew for nightly janitorial service, we tailor our solutions to meet your property’s unique needs and schedule. We focus on cleanliness, safety, and first impressions — because how your property looks matters.',
          'Our porters handle tasks like trash removal, spill cleanup, restroom restocking, lobby maintenance, and more — all while being polite and professional in public-facing areas. We also provide flexible deep cleaning schedules including carpet shampooing, window washing, floor buffing, and disinfection.',
          'We understand the importance of reliability and consistency. Our crews show up on time, follow detailed checklists, and report issues proactively. Our customer service team is responsive and solutions-oriented, helping you maintain building cleanliness without the headache.',
        ]}
        galleryImages={[
          {
            src: '/assets/img/hero_bg_2.webp',
            alt: 'Day Porter Cleaning Restrooms',
            width: 415,
            height: 198,
          },
          {
            src: '/assets/img/hero_bg_3.webp',
            alt: 'Commercial Office Trash Pickup',
            width: 415,
            height: 198,
          },
          {
            src: '/assets/img/service_img_1.webp',
            alt: 'Lobby Cleaning Porter Team',
            width: 415,
            height: 184,
          },
        ]}
        highlights={[
          {
            heading: 'Why Property Managers Choose Us',
            paragraphs: [
              'We understand the importance of reliability and consistency. Our crews show up on time, follow detailed checklists, and report issues proactively.',
              'Our customer service team is responsive and solutions-oriented, helping you maintain building cleanliness without the headache.',
            ],
          },
        ]}
        servicesList={[
          'Daily Porter & Janitorial Staffing',
          'Lobby, Restroom & Common Area Cleaning',
          'Disinfection & Odor Control',
          'Trash Collection & Exterior Sweeping',
        ]}
        faqData={faqData} // keeps your original FAQ.json content
        sidebarServices={[
          { title: 'Commercial Cleaning', link: '/contact' },
          { title: 'Day Porter Staffing', link: '/contact' },
          { title: 'Office Janitorial Services', link: '/contact' },
          { title: 'Restroom Sanitation', link: '/contact' },
          { title: 'Post-Event Cleanups', link: '/contact' },
        ]}
        emergencyInfo={{
          phone: '+1 (424) 600-9155',
          description:
            'Our emergency team is available for urgent disinfection, water cleanup, or after-hours porter services.',
        }}
      />
    </div>
  );
};

export default page;
