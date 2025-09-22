import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Choose1 from '../Components/Choose/Choose1';
import BeforeAfter from '../Components/BeforeAfter/BeforeAfter';
import Project1 from '../Components/Project/Project1';
import Contact1 from '../Components/ContactInfo/Contact1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Pricing1 from '../Components/Pricing/Pricing1';
import Process from '../Components/Process/Process';
import Blog3 from '../Components/Blog/Blog3';

const page = () => {
  return (
    <div>
      <HeroBanner1></HeroBanner1>

      <About1
        img1="/assets/img/about_img_1.jpg"
        img2="/assets/img/about_img_2.jpg"
        img3="/assets/img/about_img_3.jpg"
        expNumber="20"
        expYers="Years"
        expTitle="Experience"
        number="(208) 555-0112"
        subTitle="About Us"
        Title="Professional Apartment Building Cleaning"
        Content="We provide reliable cleaning services for apartment buildings, focusing on lobbies, hallways, elevators, and common areas. Our team ensures a clean, safe, and welcoming environment for all residents."
        feature1="Lobby & Hallway Cleaning"
        feature2="Elevator & Stairwell Cleaning"
        listItem={[
          'Thorough cleaning of all common areas',
          'Sanitized high-traffic spaces',
          'Polished floors and spotless surfaces',
        ]}
        avatar="/assets/img/avatar_1.png"
        name="Olivia Smith"
        designation="Founder & CEO"
      ></About1>

      <Services1></Services1>

      <Choose1
        img1="/assets/img/feature_img_1.jpg"
        content="We specialize in maintaining apartment building hygiene. From elevators to common areas, every space is cleaned thoroughly and efficiently."
        btnName="Read more"
        btnUrl="/about"
        img2="/assets/img/feature_img_2.jpg"
        img3="/assets/img/feature_img_3.jpg"
      ></Choose1>

      {/* <BeforeAfter
        title="Recent Completed Cleaning Projects"
        subTitle="Before & After"
        bgImg="/assets/img/before_after_bg_1.svg"
        beforeImg="/assets/img/before_img_1.jpg"
        afterTitle="After"
        afterImg="/assets/img/after_img_1.jpg"
        beforeTitle="Before"
      ></BeforeAfter> */}

      {/* <Project1></Project1> */}

      <Contact1
        Title="Contact Information"
        subTitle="Reach out to schedule cleaning services for your apartment building."
        address="2972 Westheimer Rd. <br/>Santa Ana, Illinois 5486"
        email="info@cleanapts.com <br/>support@cleanapts.com"
        number="(402) 4521 5458 44 <br/> (123) 2154 5464 55"
        clientNumber="1012"
        img="/assets/img/contact_img_1.jpg"
        client="Happy Clients"
        subtitle2="Contact us"
        title2="Book an Appointment"
      ></Contact1>

      <Testimonial1
        subtitle="Testimonials"
        title="What Our Clients Say <br> About Us"
        bgImg="/assets/img/testimonial_bg_1.jpg"
      ></Testimonial1>

      {/* <Pricing1></Pricing1> */}
      <Process></Process>
      {/* <Blog3></Blog3> */}
    </div>
  );
};

export default page;
