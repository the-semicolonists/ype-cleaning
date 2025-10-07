import Image from 'next/image';

const ProjectDetails = ({
  bannerImage = {
    src: '/assets/img/portfolio_banner.jpg',
    alt: 'Project Banner',
    width: 1296,
    height: 552,
  },
  title = 'Project Title',
  description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ],
  projectHighlights = [
    {
      heading: 'Project Highlights',
      paragraphs: [
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      ],
    },
  ],
  servicesList = [
    'Lobby & Common Area Cleaning',
    'On-Site Day Porter Support',
    'Restroom & Breakroom Maintenance',
    'Waste Removal & Sanitization',
  ],
  galleryImages = [
    { src: '/assets/img/portfolio_img_10.jpg', alt: 'Gallery Image 1', width: 412, height: 226 },
    { src: '/assets/img/portfolio_img_11.jpg', alt: 'Gallery Image 2', width: 412, height: 226 },
  ],
  sidebarInfo = {
    Category: 'Commercial Cleaning & Porter Services',
    Client: 'Sample Client',
    'Start Date': '01 January 2025',
    Status: 'Ongoing',
  },
  rating = 5,
  socialLinks = [
    { href: '#', icon: 'linkedin' },
    { href: '#', icon: 'twitter' },
    { href: '#', icon: 'youtube' },
    { href: '#', icon: 'facebook' },
  ],
}) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_portfolio_details">
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

          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-xl-8 col-lg-7">
              {projectHighlights.map((section, i) => (
                <div key={i} className="mb-3">
                  <h2 className="mb-1">{section.heading}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              ))}

              <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mb_30 p-0">
                {servicesList.map((service, i) => (
                  <li key={i}>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check"></i>
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="row cs_row_gap_30">
                {galleryImages.map((img, i) => (
                  <div key={i} className="col-md-6">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                    />
                  </div>
                ))}
              </div> */}
            </div>

            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <ul className="cs_categories cs_mp_0">
                    {Object.entries(sidebarInfo).map(([key, value], i) => (
                      <li key={i}>
                        <span className="cs_fs_18 cs_semibold cs_heading_color">{key}:</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="cs_rating_wrapper">
                    <h3 className="cs_fs_18 cs_semibold mb-0">Rating:</h3>
                    <div className="cs_rating" data-rating={rating}>
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>

                  <div className="cs_social_btns cs_style_1">
                    {socialLinks.map((link, i) => (
                      <a key={i} href={link.href} className="cs_center cs_radius_50">
                        <i className={`bi bi-${link.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ProjectDetails;
