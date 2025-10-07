import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      {/* Home - No dropdown */}
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      {/* Services */}
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Cleaning
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Porter Service
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {/* Projects */}
      <li className="menu-item-has-children">
        <Link href="/project" onClick={() => setMobileToggle(false)}>
          Industries
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/project/schools" onClick={() => setMobileToggle(false)}>
                Schools & Universities
              </Link>
            </li>
            <li>
              <Link href="/project/property-management" onClick={() => setMobileToggle(false)}>
                Property Management
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {/*
      // Removed Pages
      <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
                Team
              </Link>
            </li>            
            <li>
              <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>                   
          </ul>
        </DropDown>
      </li>      

      // Removed News
      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          News
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>          
            <li>
              <Link href="/blog/blog-details" onClick={() => setMobileToggle(false)}>
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      */}

      {/* Contact */}
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
