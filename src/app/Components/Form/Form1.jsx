const Form1 = () => {
  return (
    <form className="row cs_row_gap_30 cs_gap_y_30" id="cs_form">
      <div className="col-sm-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="col-sm-6">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="col-sm-6">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="col-sm-6 position-relative">
        <select className="form-select cs_form_field cs_radius_5">
          <option value="cleaning-choose">Choose an option</option>
          <option value="home-cleaning">Home Cleaning</option>
          <option value="office-cleaning">Office Cleaning</option>
          <option value="carpet-cleaning">Carpet Cleaning</option>
          <option value="window-cleaning">Window Cleaning</option>
        </select>
      </div>
      <div className="col-12">
        <textarea
          name="message"
          rows="6"
          placeholder="Message"
          className="cs_form_field"
        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="cs_btn cs_style_1 wow fadeInRight">
          <span>Submit</span>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default Form1;
