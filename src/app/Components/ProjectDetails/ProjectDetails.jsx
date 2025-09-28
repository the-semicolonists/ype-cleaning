import Image from 'next/image';

const ProjectDetails = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_portfolio_details">
          <Image src="/assets/img/portfolio_banner.jpg" alt="img" width={1296} height={552} />

          <h2>Commercial Cleaning & Porter Services Project</h2>
          <p>
            We deliver expert commercial cleaning and porter services throughout California. This
            project showcases our daily maintenance and facility support for a multi-tenant office
            complex. From lobbies and restrooms to elevators and outdoor spaces, our team ensures
            everything is clean, safe, and presentable at all times.
          </p>
          <p>
            Using eco-conscious products and modern tools, our staff maintains high standards of
            hygiene and appearance. Each team member is fully trained, insured, and focused on
            supporting building operations efficiently.
          </p>

          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-xl-8 col-lg-7">
              <h2>Reliable Day Porter & Commercial Cleaning</h2>
              <p>
                Services are tailored to the building’s needs and peak usage times. Our porters are
                on-site during business hours to handle restocking, waste removal, spills, and other
                on-demand tasks — while our cleaning crews manage detailed upkeep during off-hours.
              </p>
              <p>
                We offer flexible service agreements, competitive rates, and responsive support.
                Whether it’s a single office suite or a full commercial property, our goal is to
                exceed expectations with every visit.
              </p>

              <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mb_30 p-0">
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Lobby & Common Area Cleaning</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Daily Day Porter Support</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Restroom & Breakroom Maintenance</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Trash Removal & Sanitization</span>
                </li>
              </ul>

              <div className="row cs_row_gap_30">
                <div className="col-md-6">
                  <Image
                    src="/assets/img/portfolio_img_10.jpg"
                    alt="Commercial cleaning crew"
                    width={412}
                    height={226}
                  />
                </div>
                <div className="col-md-6">
                  <Image
                    src="/assets/img/portfolio_img_11.jpg"
                    alt="Day porter on duty"
                    width={412}
                    height={226}
                  />
                </div>
              </div>

              <p>
                Our commercial cleaning services help extend the life of facilities, boost
                cleanliness perception, and create a professional experience for tenants, employees,
                and visitors alike.
              </p>
            </div>

            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <ul className="cs_categories cs_mp_0">
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">Category:</span>
                      <span>Commercial Cleaning & Porter Services</span>
                    </li>
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">Client:</span>
                      <span>Downtown Office Center</span>
                    </li>
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">Start Date:</span>
                      <span>01 March 2025</span>
                    </li>
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">Status:</span>
                      <span>Ongoing</span>
                    </li>
                  </ul>

                  <div className="cs_rating_wrapper">
                    <h3 className="cs_fs_18 cs_semibold mb-0">Rating:</h3>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>

                  <div className="cs_social_btns cs_style_1">
                    <a href="#" className="cs_center cs_radius_50">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="cs_center cs_radius_50">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="cs_center cs_radius_50">
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="cs_center cs_radius_50">
                      <i className="bi bi-facebook"></i>
                    </a>
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
