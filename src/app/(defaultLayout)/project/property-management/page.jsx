import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProjectDetails from '@/app/Components/ProjectDetails/ProjectDetails';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb bgImg="/assets/img/page_heading_1.webp" Title="Project Details"></BreadCumb>
      <ProjectDetails
        bannerImage={{
          src: '/assets/img/property-management-banner.webp',
          alt: 'Property Management Cleaning Services in California',
          width: 1296,
          height: 552,
        }}
        title="Property Management Cleaning & Day Porter Project"
        description={[
          'YPE Janitorial Services helps property managers maintain clean, professional spaces for tenants and visitors. Our certified team uses eco-friendly products and advanced cleaning tools to ensure every area is spotless and safe. Maintaining a clean property not only improves tenant satisfaction but also preserves the value and longevity of your building. From lobbies to restrooms, our comprehensive cleaning solutions ensure every corner of your property reflects professionalism and care.',
        ]}
        projectHighlights={[
          {
            heading: 'Comprehensive Cleaning for Property Managers',
            paragraphs: [
              'Full-service cleaning and day porter support are tailored to your property’s specific needs, with flexible schedules, high-quality standards, and responsive service guaranteed. Our team conducts regular inspections and tracks results to ensure consistent quality, tenant satisfaction, and a well-maintained environment that enhances the overall impression of your property.',
            ],
          },
          {
            heading: 'Eco-Friendly & Sustainable Practices',
            paragraphs: [
              'YPE Janitorial Services utilizes environmentally responsible cleaning products and sustainable methods to reduce chemical exposure while maintaining a pristine, healthy environment for tenants and staff. Our approach ensures your property stays safe, clean, and environmentally conscious.',
            ],
          },
          {
            heading: 'Enhanced Tenant Experience',
            paragraphs: [
              'A well-maintained property creates a positive first impression and encourages tenant retention. Our day porters are on-site during business hours to handle immediate needs, keeping public areas clean, safe, and welcoming, while our cleaning crews maintain detailed upkeep during off-hours to ensure a consistently professional environment.',
            ],
          },
          {
            heading: 'Safety & Compliance',
            paragraphs: [
              'All staff are trained in OSHA-compliant procedures to protect occupants and the property. We follow strict safety protocols for chemical handling, equipment use, and site security, giving property managers peace of mind while maintaining high-quality cleaning standards.',
            ],
          },
        ]}
        servicesList={[
          'Lobby & Common Area Cleaning',
          'On-Site Day Porter Support',
          'Restroom & Breakroom Maintenance',
          'Waste Removal & Sanitization',
          'Carpet & Floor Care',
          'Window Cleaning',
          'Post-Event Cleanups',
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
          Status: 'Finished',
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
