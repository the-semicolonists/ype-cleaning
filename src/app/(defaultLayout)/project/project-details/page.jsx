import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProjectDetails from '@/app/Components/ProjectDetails/ProjectDetails';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb bgImg="/assets/img/page_heading_1.webp" Title="Project Details"></BreadCumb>
      <ProjectDetails
        bannerImage={{
          src: '/assets/img/portfolio_banner.jpg',
          alt: 'Property Management Cleaning Services in California',
          width: 1296,
          height: 552,
        }}
        title="Property Management Cleaning & Day Porter Project"
        description={[
          'YPE Janitorial Services helps property managers maintain clean, professional spaces for tenants and visitors.',
          'Our certified team uses eco-friendly products and advanced cleaning tools to ensure every area is spotless and safe.',
        ]}
        projectHighlights={[
          {
            heading: 'Comprehensive Cleaning for Property Managers',
            paragraphs: [
              'Full-service cleaning and day porter support tailored to your property’s needs.',
              'Flexible schedules, high-quality standards, and responsive service guaranteed.',
            ],
          },
        ]}
        servicesList={[
          'Lobby & Common Area Cleaning',
          'On-Site Day Porter Support',
          'Restroom & Breakroom Maintenance',
          'Waste Removal & Sanitization',
        ]}
        galleryImages={[
          {
            src: '/assets/img/portfolio_img_10.jpg',
            alt: 'Cleaning team',
            width: 412,
            height: 226,
          },
          {
            src: '/assets/img/portfolio_img_11.jpg',
            alt: 'Day porter on duty',
            width: 412,
            height: 226,
          },
        ]}
        sidebarInfo={{
          Category: 'Property Management Cleaning & Day Porter Services',
          Client: 'Downtown Office Center',
          'Start Date': '01 March 2025',
          Status: 'Ongoing',
        }}
        rating={5}
        socialLinks={[
          { href: '#', icon: 'linkedin' },
          { href: '#', icon: 'twitter' },
          { href: '#', icon: 'youtube' },
          { href: '#', icon: 'facebook' },
        ]}
      />
    </div>
  );
};

export default page;
