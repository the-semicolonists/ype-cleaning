'use client';
import { useEffect, useRef, useState } from 'react';
import data from '../../Data/faq.json';
import Link from 'next/link';
import Image from 'next/image';

const ServiceDetails = () => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          <div className="col-xl-8 col-lg-7">
            <div className="cs_service_details">
              <Image
                src="/assets/img/service_banner.jpg"
                alt="Commercial Cleaning and Porter Services Banner"
                width={854}
                height={378}
              />
              <h2>Professional Cleaning & Porter Services</h2>
              <p>
                We specialize in providing high-quality commercial cleaning and porter services for
                office buildings, apartment complexes, retail centers, and more. Our uniformed team
                is trained, insured, and ready to maintain the cleanliness and functionality of your
                property — inside and out.
              </p>
              <p>
                Whether you need day porters to handle daily upkeep or a full cleaning crew for
                nightly janitorial service, we tailor our solutions to meet your property’s unique
                needs and schedule. We focus on cleanliness, safety, and first impressions — because
                how your property looks matters.
              </p>

              <div className="row">
                <div className="col-md-6">
                  <Image
                    src="/assets/img/service_img_8.jpg"
                    alt="Day Porter Cleaning Restrooms"
                    width={415}
                    height={198}
                  />
                </div>
                <div className="col-md-6">
                  <Image
                    src="/assets/img/service_img_9.jpg"
                    alt="Commercial Office Trash Pickup"
                    width={415}
                    height={198}
                  />
                </div>
              </div>

              <p>
                Our porters handle tasks like trash removal, spill cleanup, restroom restocking,
                lobby maintenance, and more — all while being polite and professional in
                public-facing areas. We also provide flexible deep cleaning schedules including
                carpet shampooing, window washing, floor buffing, and disinfection.
              </p>

              <h2>Why Property Managers Choose Us</h2>
              <p>
                We understand the importance of reliability and consistency. Our crews show up on
                time, follow detailed checklists, and report issues proactively. Our customer
                service team is responsive and solutions-oriented, helping you maintain building
                cleanliness without the headache.
              </p>

              <div className="row">
                <div className="col-xl-6">
                  <Image
                    src="/assets/img/service_img_10.jpg"
                    alt="Lobby Cleaning Porter Team"
                    width={415}
                    height={184}
                  />
                </div>
                <div className="col-xl-6">
                  <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_font cs_mp_0">
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i>
                      </span>
                      <span>Daily Porter & Janitorial Staffing</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i>
                      </span>
                      <span>Lobby, Restroom & Common Area Cleaning</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i>
                      </span>
                      <span>Disinfection & Odor Control</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i>
                      </span>
                      <span>Trash Collection & Exterior Sweeping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cs_height_20 cs_height_lg_20"></div>

            {/* FAQ Section */}
            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? 'active' : ''}`}
                >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <h2 className="cs_fs_18 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye"></i>
                      <i className="bi bi-eye-slash"></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1">
              {/* Services List */}
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator"></div>
                <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                  <li>
                    <Link href="/service/service-details">
                      <span>Commercial Cleaning</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      <span>Day Porter Staffing</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      <span>Office Janitorial Services</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      <span>Restroom Sanitation</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/service-details">
                      <span>Post-Event Cleanups</span>
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Emergency Call Card */}
              <div className="cs_sidebar_widget cs_accent_bg">
                <div className="cs_card cs_style_6">
                  <h3 className="cs_fs_30 cs_white_color cs_mb_30">Emergency Cleaning Services</h3>
                  <div className="cs_card_icon cs_center cs_mb_32">
                    <Image
                      src="/assets/img/icons/phone-call_2.svg"
                      alt="Emergency Cleaning Phone"
                      width={59}
                      height={49}
                    />
                  </div>
                  <p className="cs_white_color cs_mb_5">Need urgent cleanup?</p>
                  <a
                    href="tel:+15551234567"
                    className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23"
                  >
                    +1 (555) 123-4567
                  </a>
                  <p className="cs_card_subtitle cs_white_color cs_mb_33">
                    Our emergency team is available for urgent disinfection, water cleanup, or
                    after-hours porter services.
                  </p>
                  <Link href="/contact" className="cs_card_btn">
                    <span>Contact Now</span>
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ServiceDetails;
