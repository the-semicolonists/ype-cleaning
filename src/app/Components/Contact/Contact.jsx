import Form3 from '../Form/Form3';

const Contact = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_50">
          <div className="col-lg-6">
            <div className="cs_contact_desc">
              <h3 className="cs_fs_24 cs_mb_33">Contact Information</h3>
              <div className="cs_contact_info_grid">
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-telephone-inbound-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">Phone Number :</h3>
                    <a href="tel:+14246009155">+1 424-600-9155</a>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">Email Address :</h3>
                    <a href="mailTo:needhelpype@gmail.com">needhelpype@gmail.com</a>
                    <br />
                    <a href="mailTo:ypeneedhelp@gmail.com">ypeneedhelp@gmail.com</a>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">Our Address :</h3>
                    <p className="mb-0">
                      5419 Hollywood Blvd <br />
                      Los Angeles, CA 90027
                    </p>
                  </div>
                </div>
                <div className="cs_iconbox cs_style_5">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">Working Time :</h3>
                    <p className="mb-0">Mon - Fri :</p>
                    <p className="mb-0">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_44 cs_height_lg_30"></div>
            {/* <div className="cs_social_desc">
              <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
              <p className="cs_mb_22">
                Algae can quickly take over a Cleaning if not addressed promptly. Learn effective.
              </p>
              <div className="cs_social_btns cs_style_1">
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="cs_center cs_accent_bg_light">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6">
            <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
              <h3 className="cs_fs_24 cs_mb_33">Send Message</h3>
              <Form3></Form3>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="cs_navigation_map wow fadeInUp">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7345933294328!2d-118.31057802428131!3d34.10193897313837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf50f5242043%3A0xf85d22e7922270b4!2s5419%20Hollywood%20Blvd%2C%20Los%20Angeles%2C%20CA%2090027!5e0!3m2!1sen!2sus!4v1759855733034!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
