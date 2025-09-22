import Image from 'next/image';

const ProjectDetails = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_portfolio_details">
          <Image src="/assets/img/portfolio_banner.jpg" alt="img" width={1296} height={552} />

          <h2>Our Work in Apartment Building Cleaning</h2>
          <p>
            We provide professional apartment building cleaning services across California. Our team
            ensures common areas, lobbies, hallways, elevators, and stairwells are spotless and
            safe. We tailor each cleaning plan to your building’s needs, from daily maintenance to
            deep cleaning sessions.
          </p>
          <p>
            Using eco-friendly products and modern equipment, we maintain high hygiene standards.
            Our trained staff is reliable, insured, and committed to keeping your property in top
            condition for residents and visitors alike.
          </p>

          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-xl-8 col-lg-7">
              <h2>Your Trusted Apartment Cleaning Partner</h2>
              <p>
                Scheduling is flexible to minimize disruption for residents. We offer one-time deep
                cleaning, recurring maintenance, and specialized services like carpet cleaning,
                window washing, and sanitization of shared facilities.
              </p>
              <p>
                Pricing is transparent and depends on building size and frequency. Free estimates
                are provided, and our goal is always to deliver exceptional results efficiently and
                safely.
              </p>

              <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mb_30 p-0">
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Lobby & Hallway Cleaning</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Elevator & Stairwell Sanitization</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Window & Glass Cleaning</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check"></i>
                  </span>
                  <span>Carpet & Floor Deep Cleaning</span>
                </li>
              </ul>

              <div className="row cs_row_gap_30">
                <div className="col-md-6">
                  <Image
                    src="/assets/img/portfolio_img_10.jpg"
                    alt="img"
                    width={412}
                    height={226}
                  />
                </div>
                <div className="col-md-6">
                  <Image
                    src="/assets/img/portfolio_img_11.jpg"
                    alt="img"
                    width={412}
                    height={226}
                  />
                </div>
              </div>

              <p>
                Our apartment cleaning services are designed to maintain a clean, safe, and
                welcoming environment. Regular maintenance and deep cleaning help extend the life of
                surfaces and keep residents satisfied.
              </p>
            </div>

            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <ul className="cs_categories cs_mp_0">
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">Category:</span>
                      <span>Apartment Cleaning Services</span>
                    </li>
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">Client:</span>
                      <span>California Residences</span>
                    </li>
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">Start Date:</span>
                      <span>01 March 2025</span>
                    </li>
                    <li>
                      <span className="cs_fs_18 cs_semibold cs_heading_color">End Date:</span>
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
