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
        Title="Trusted Cleaning & Porter Services"
        Content="We deliver reliable, professional cleaning and porter services for commercial spaces. From lobbies and restrooms to high-traffic zones, our team ensures your property stays clean, safe, and presentable at all times."
        feature1="Daily & Weekly Cleaning"
        feature2="Day Porter Services"
        listItem={[
          'Comprehensive commercial cleaning',
          'Sanitized high-touch surfaces',
          'Well-maintained public spaces',
        ]}
        avatar="/assets/img/avatar_1.png"
        name="Olivia Smith"
        designation="Founder & CEO"
      ></About1>

      <Services1></Services1>

      <Choose1
        img1="/assets/img/feature_img_1.jpg"
        content="We specialize in cleaning and maintaining commercial properties. From entryways to restrooms, we ensure every space is spotless, stocked, and ready for business."
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
        subTitle="Reach out to schedule commercial cleaning or porter services."
        address="2972 Westheimer Rd. <br/>Santa Ana, Illinois 5486"
        email="info@cleanservice.com <br/>support@cleanservice.com"
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
