'use client';
import Image from 'next/image';
import Link from 'next/link';

const FooterCleaning = () => {
  const exploreLinks = [
    { title: 'Commercial Cleaning', href: '/services/commercial' },
    { title: 'Day Porter Services', href: '/services/porter' },
    { title: 'Floor & Surface Care', href: '/services/floor-care' },
    { title: 'Window & Glass Cleaning', href: '/services/window-cleaning' },
    { title: 'Disinfection Services', href: '/services/sanitization' },
  ];

  const workingHours = [
    { day: 'Mon - Fri', time: '8:00 AM - 6:00 PM' },
    { day: 'Sat - Sun', time: '9:00 AM - 4:00 PM' },
  ];

  return (
    <footer
      className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg"
      data-src="assets/img/footer_bg.jpg"
    >
      <div className="container">
        {/* Newsletter */}
        <div className="cs_footer_newsletter cs_style_1">
          <div className="cs_footer_newsletter_left cs_accent_bg cs_center">
            <Image src="/assets/img/logo.png" alt="Cleaning Logo" width={225} height={65} />
          </div>
          <div className="cs_footer_newsletter_right">
            <h3 className="cs_fs_24 cs_semibold cs_white_color mb-0">
              Subscribe for Cleaning Tips & Industry Updates
            </h3>
            <form className="cs_footer_newsletter_form">
              <input type="text" placeholder="Enter Your Email" />
              <button className="cs_btn cs_style_1">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="cs_main_footer cs_white_color">
        <div className="container">
          <div className="cs_footer_row">
            {/* About */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  About Us
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <p>
                  We provide dependable commercial cleaning and porter services for offices, retail,
                  and mixed-use facilities. Our mission is to maintain clean, safe, and professional
                  spaces for businesses to thrive.
                </p>
                <div className="cs_social_btns cs_style_1">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon) => (
                    <a key={icon} href="#" className="cs_social_btn cs_center">
                      <i className={`bi bi-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Services
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_menu">
                  {exploreLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Contact Us
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> 5419 Hollywood Blvd Los Angeles, CA 90027
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:+14246009155">+1 424-600-9155</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:info@cleaningpros.com">info@ypejanitorial.com</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Working Hours */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Working Hours
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_working_hours">
                  {workingHours.map((item, idx) => (
                    <li key={idx}>
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="cs_footer_bottom cs_white_color">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <div className="cs_footer_copyright">© 2024 Cleaning Pros. All Rights Reserved.</div>
            <div>
              <Image
                src="/assets/img/payment_card.svg"
                alt="Payment Methods"
                width={191}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCleaning;
