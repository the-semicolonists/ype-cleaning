import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import About2 from '../Components/About/About2';
import Services2 from '../Components/Services/Services2';
import Faq1 from '../Components/Faq/Faq1';
import Video1 from '../Components/Video/Video1';
import Form2 from '../Components/Form/Form2';
import Team1 from '../Components/Team/Team1';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Brand1 from '../Components/Brand/Brand1';
import Project2 from '../Components/Project/Project2';
import Counter1 from '../Components/Counter/Counter1';
import Blog2 from '../Components/Blog/Blog2';

const page = () => {
  return (
    <div>
      <HeroBanner2
        bgimg="/assets/img/hero_bg_1.jpg"
        subtitle="Apartment Building Cleaning"
        title="Clean, Safe, and Inviting Buildings"
        conetnt="We provide fast and reliable cleaning for lobbies, hallways, elevators, and common areas to keep your building spotless."
        btnname="Get a Quote"
        btnurl="/about"
        videoname="See Us in Action"
      ></HeroBanner2>

      <About2
        img1="/assets/img/about_img_4.jpg"
        img2="/assets/img/about_img_5.jpg"
        expNumber="20"
        expTitle="YEARS"
        exYear="SINCE 2005"
        subTitle="About Us"
        Title="Trusted Building Cleaning Experts"
        Content="We specialize in cleaning apartment buildings, focusing on high-traffic areas and common spaces to ensure a clean and welcoming environment."
        box1="Lobby & Hallway Cleaning"
        boxContent1="Keep entryways and hallways clean and inviting."
        box2="Elevators & Stairwells"
        boxContent2="Sanitized and spotless elevators and stairwells every day."
        avatar="/assets/img/avatar_1.png"
        name="Olivia Smith"
        designation="Founder & CEO"
      ></About2>

      <Services2></Services2>
      <Faq1></Faq1>
      <Video1></Video1>
      <Form2></Form2>
      <Team1></Team1>
      <Testimonial2></Testimonial2>
      <Brand1></Brand1>
      <Project2></Project2>
      <Counter1></Counter1>
      <Blog2></Blog2>
    </div>
  );
};

export default page;
