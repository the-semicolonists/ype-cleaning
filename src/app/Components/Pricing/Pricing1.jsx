'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import PricingCard from './PricingCard.jsx';

const Pricing1 = () => {
  const [isActive, setIsActive] = useState('monthly');

  return (
    <section className="cs_tabs cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <div className="cs_section_heading_left">
            <SectionTitle
              SubTitle="Our Price Plans"
              Title="Choose The Right Plan That Fits Your Property"
            />
          </div>
        </div>

        <ul className="cs_tab_links cs_style_1 cs_type_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mp_0 wow fadeInUp">
          <li
            className={`${isActive === 'monthly' ? 'active' : ''}`}
            onClick={() => setIsActive('monthly')}
          >
            <a>Monthly</a>
          </li>
          <li
            className={`${isActive === 'yearly' ? 'active' : ''}`}
            onClick={() => setIsActive('yearly')}
          >
            <a>Yearly</a>
          </li>
        </ul>

        <div className="cs_tab_body">
          {/* Monthly Plans */}
          <div className={`cs_tab ${isActive === 'monthly' ? 'active' : ''}`}>
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              {/* Basic Monthly */}
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="$500"
                    planName="Monthly Plan"
                    title="Basic Cleaning"
                    subTitle="Ideal for Small Buildings"
                    featureList={[
                      'Lobby & Entryway Cleaning',
                      'Trash Removal (3x/week)',
                      'Light Dusting & Surface Wipe',
                      'Restroom Check & Refill',
                      'Emergency Spill Response',
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  />
                </div>
              </div>

              {/* Standard Monthly */}
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1 active">
                  <PricingCard
                    price="$850"
                    planName="Monthly Plan"
                    title="Standard Cleaning"
                    subTitle="For Medium-Sized Properties"
                    featureList={[
                      'Daily Porter Services',
                      'Restroom Sanitation (Daily)',
                      'Common Area Maintenance',
                      'Trash & Recycling',
                      'Light Window & Floor Care',
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  />
                </div>
              </div>

              {/* Premium Monthly */}
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="$1,200"
                    planName="Monthly Plan"
                    title="Premium Cleaning"
                    subTitle="Full-Service, Large Buildings"
                    featureList={[
                      'Full-Time Day Porter',
                      'Lobby, Hallways, Restrooms',
                      'Power Washing & Deep Floor Care',
                      'Interior Window Cleaning',
                      'Custom Schedules & Reports',
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yearly Plans */}
          <div className={`cs_tab ${isActive === 'yearly' ? 'active' : ''}`}>
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              {/* Basic Yearly */}
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="$5,000"
                    planName="Annual Plan"
                    title="Basic Cleaning"
                    subTitle="Ideal for Small Buildings"
                    featureList={[
                      'Lobby & Entryway Cleaning',
                      'Trash Removal (3x/week)',
                      'Light Dusting & Surface Wipe',
                      'Restroom Check & Refill',
                      'Emergency Spill Response',
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  />
                </div>
              </div>

              {/* Standard Yearly */}
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1 active">
                  <PricingCard
                    price="$8,800"
                    planName="Annual Plan"
                    title="Standard Cleaning"
                    subTitle="For Medium-Sized Properties"
                    featureList={[
                      'Daily Porter Services',
                      'Restroom Sanitation (Daily)',
                      'Common Area Maintenance',
                      'Trash & Recycling',
                      'Light Window & Floor Care',
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  />
                </div>
              </div>

              {/* Premium Yearly */}
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="$12,500"
                    planName="Annual Plan"
                    title="Premium Cleaning"
                    subTitle="Full-Service, Large Buildings"
                    featureList={[
                      'Full-Time Day Porter',
                      'Lobby, Hallways, Restrooms',
                      'Power Washing & Deep Floor Care',
                      'Interior Window Cleaning',
                      'Custom Schedules & Reports',
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs_height_120 cs_height_lg_80"></div>
      </div>
    </section>
  );
};

export default Pricing1;
