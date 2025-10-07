'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServiceDetails = ({
  bannerImage = {
    src: '/assets/img/service_banner.jpg',
    alt: 'Commercial Cleaning and Porter Services Banner',
    width: 854,
    height: 378,
  },
  title = 'Professional Cleaning & Porter Services',
  description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ],
  galleryImages = [
    { src: '/assets/img/service_img_8.jpg', alt: 'Image 1', width: 415, height: 198 },
    { src: '/assets/img/service_img_9.jpg', alt: 'Image 2', width: 415, height: 198 },
    { src: '/assets/img/service_img_10.jpg', alt: 'Image 3', width: 415, height: 184 },
  ],
  highlights = [
    {
      heading: 'Why Property Managers Choose Us',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
    },
  ],
  servicesList = [
    'Daily Porter & Janitorial Staffing',
    'Lobby, Restroom & Common Area Cleaning',
    'Disinfection & Odor Control',
    'Trash Collection & Exterior Sweeping',
  ],
  faqData = [
    {
      title: 'What areas do you service?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Do you provide emergency services?',
      desc: 'Yes, we provide 24/7 emergency cleaning and disinfection.',
    },
  ],
  sidebarServices = [
    { title: 'Commercial Cleaning', link: '/service/service-details' },
    { title: 'Day Porter Staffing', link: '/service/service-details' },
    { title: 'Office Janitorial Services', link: '/service/service-details' },
    { title: 'Restroom Sanitation', link: '/service/service-details' },
    { title: 'Post-Event Cleanups', link: '/service/service-details' },
  ],
  emergencyInfo = {
    phone: '+1 (424) 600-9155',
    description:
      'Our emergency team is available for urgent disinfection, water cleanup, or after-hours porter services.',
  },
}) => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    setOpenItemIndex(index === openItemIndex ? -1 : index);
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
          {/* Main Content */}
          <div className="col-xl-8 col-lg-7">
            <div className="cs_service_details">
              <Image
                src={bannerImage.src}
                alt={bannerImage.alt}
                width={bannerImage.width}
                height={bannerImage.height}
                style={{
                  width: `${bannerImage.width}px`,
                  height: `${bannerImage.height}px`,
                  objectFit: 'cover',
                }}
              />

              <h2>{title}</h2>
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="row">
                {galleryImages.slice(0, 2).map((img, i) => (
                  <div key={i} className="col-md-6">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      style={{
                        width: `${img.width}px`,
                        height: `${img.height}px`,
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}
              </div>

              {description.length > 2 &&
                description.slice(2).map((para, i) => <p key={i}>{para}</p>)}

              {highlights.map((item, i) => (
                <div key={i}>
                  <h2>{item.heading}</h2>
                  {item.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              ))}

              <div className="row">
                <div className="col-xl-6">
                  {galleryImages[2] && (
                    <Image
                      src={galleryImages[2].src}
                      alt={galleryImages[2].alt}
                      width={galleryImages[2].width}
                      height={galleryImages[2].height}
                      style={{
                        width: `${galleryImages[2].width}px`,
                        height: `${galleryImages[2].height}px`,
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </div>
                <div className="col-xl-6">
                  <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_font cs_mp_0">
                    {servicesList.map((service, i) => (
                      <li key={i}>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i>
                        </span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="cs_height_20 cs_height_lg_20"></div>
              <div className="cs_accordians_wrapper cs_style_1 p-0">
                {faqData.map((item, index) => (
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
          </div>

          {/* Sidebar */}
          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1">
              {/* Services List */}
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator"></div>
                <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                  {sidebarServices.map((service, i) => (
                    <li key={i}>
                      <Link href={service.link}>
                        <span>{service.title}</span>
                        <span>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                  ))}
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
                      style={{ width: '59px', height: '49px', objectFit: 'contain' }}
                    />
                  </div>
                  <p className="cs_white_color cs_mb-5">Need urgent cleanup?</p>
                  <a
                    href={`tel:${emergencyInfo.phone}`}
                    className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23"
                  >
                    {emergencyInfo.phone}
                  </a>
                  <p className="cs_card_subtitle cs_white_color cs_mb_33">
                    {emergencyInfo.description}
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
