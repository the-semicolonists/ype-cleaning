'use client';
import SectionTitle2 from '../Common/SectionTitle2';
import data from '../../Data/process.json';
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const Process = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="cs_bg_filed" data-background="/assets/img/process_bg_1.jpg">
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
          <SectionTitle2 SubTitle="Working Process" Title="Our Simple Working Process" />
        </div>

        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.map((item, i) => (
            <div key={i} className="col-xl-3 col-md-6">
              <div className="cs_card cs_style_3 position-relative">
                <div className="cs_card_content cs_white_bg cs_radius_35 text-center">
                  <div className="cs_card_icon cs_center cs_heading_color cs_mb_22">
                    <Image src={item.img} alt={item.title} width={60} height={60} />
                  </div>
                  <h3 className="cs_fs_24 cs_semibold cs_mb_10">{item.title}</h3>
                  <p className="mb-0">{item.desc}</p>
                </div>

                {/* Decorative SVGs */}
                <svg
                  width="160"
                  height="238"
                  viewBox="0 0 160 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100.821 237.029H72.9299V214.498H100.821C119.567 214.498 134.817 200.855 134.817 184.085V50.8337C134.817 35.2827 120.673 22.6291 103.29 22.6291H5.51724L0 11.3635L5.51724 0.0979004H103.287C134.558 0.0979004 160 22.8579 160 50.8337V184.085C160 213.28 133.452 237.029 100.821 237.029Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  width="186"
                  height="164"
                  viewBox="0 0 186 164"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M176.385 163.309H56.5362C25.362 163.309 0 138.219 0 107.376V7.10943L12.5535 0.555664L25.1071 7.10943V107.376C25.1071 124.521 39.2073 138.472 56.5362 138.472H176.385L186 150.89L176.385 163.309Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  width="129"
                  height="128"
                  viewBox="0 0 129 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.55219 128.01C1.6859 128.01 0.982422 127.314 0.982422 126.457V124.87C0.982422 124.013 1.6859 123.317 2.55219 123.317C3.41848 123.317 4.12196 124.013 4.12196 124.87V126.457C4.12196 127.317 3.41848 128.01 2.55219 128.01ZM2.55219 110.552C1.6859 110.552 0.982422 109.856 0.982422 108.999V107.413C0.982422 106.556 1.6859 105.86 2.55219 105.86C3.41848 105.86 4.12196 106.556 4.12196 107.413V108.999C4.12196 109.856 3.41848 110.552 2.55219 110.552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Process;
