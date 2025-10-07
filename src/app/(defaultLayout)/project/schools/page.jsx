import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProjectDetails from '@/app/Components/ProjectDetails/ProjectDetails';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb bgImg="/assets/img/page_heading_1.webp" Title="Project Details"></BreadCumb>
      <ProjectDetails
        bannerImage={{
          src: '/assets/img/school-banner.webp',
          alt: 'Educational Facility Cleaning Services',
          width: 1296,
          height: 552,
        }}
        title="Educational Facility Cleaning Services"
        description={[
          'A clean and well-maintained school or university creates a safe, healthy, and productive environment for students, staff, and visitors. YPE Janitorial Services provides comprehensive cleaning solutions for classrooms, lecture halls, dormitories, cafeterias, gyms, and common areas, ensuring every space is hygienic, welcoming, and conducive to learning.',
        ]}
        projectHighlights={[
          {
            heading: 'Specialized Cleaning for Schools and Universities',
            paragraphs: [
              'Our trained and certified cleaning staff deliver customized programs that meet the rigorous standards required for educational environments. Each project begins with a detailed assessment of your campus, followed by a tailored action plan and ongoing inspections to ensure consistent, high-quality results that support student and staff health.',
            ],
          },
          {
            heading: 'Why Educational Institutions Trust YPE Janitorial Services',
            paragraphs: [
              'We use hospital-grade disinfectants and eco-friendly products to minimize germs and prevent the spread of illness, cleaning classrooms, lecture halls, and labs during off-hours while providing on-demand support in high-traffic areas throughout the day. All staff follow OSHA regulations and school safety guidelines to ensure a compliant, safe, and risk-free environment for everyone on campus.',
            ],
          },
        ]}
        servicesList={[
          'Classroom & Lecture Hall Cleaning',
          'Dormitory & Residence Hall Maintenance',
          'Restroom & Cafeteria Sanitization',
          'Gym, Library, and Common Area Cleaning',
          'Day Porter Support for On-Demand Needs',
          'Trash Removal and Recycling Management',
        ]}
        galleryImages={[
          {
            src: '/assets/img/portfolio_img_10.jpg',
            alt: 'Classroom Cleaning',
            width: 412,
            height: 226,
          },
          {
            src: '/assets/img/portfolio_img_11.jpg',
            alt: 'Dormitory Cleaning',
            width: 412,
            height: 226,
          },
        ]}
        sidebarInfo={{
          Category: 'School & University Cleaning Services',
          Client: 'Sample University',
          'Start Date': '01 September 2025',
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
