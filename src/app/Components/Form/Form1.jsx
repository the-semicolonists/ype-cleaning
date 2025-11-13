const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfVtPHtKB01NV0K1QtzJ0gQvH-xbwzywKTmbmBcnwZLQTAzwA/formResponse';

const FORM_FIELDS = {
  name: 'entry.593462008', // Full Name
  email: 'entry.1181636442', // Email
  serviceType: 'entry.322454373', // Service Type
  message: 'entry.1966040205', // Message
};

const SERVICES = ['Home Cleaning', 'Office Cleaning', 'Carpet Cleaning', 'Window Cleaning'];

const Form1 = () => {
  return (
    <form
      className="row cs_row_gap_30 cs_gap_y_30"
      id="cs_form"
      action={FORM_ACTION}
      method="POST"
      target="_blank"
    >
      <div className="col-sm-6">
        <input
          type="text"
          name={FORM_FIELDS.name}
          placeholder="Your Name"
          className="cs_form_field cs_radius_5"
          required
        />
      </div>
      <div className="col-sm-6">
        <input
          type="email"
          name={FORM_FIELDS.email}
          placeholder="Your Email"
          className="cs_form_field cs_radius_5"
          required
        />
      </div>
      <div className="col-sm-12 position-relative">
        <select
          name={FORM_FIELDS.serviceType}
          className="form-select cs_form_field cs_radius_5"
          required
        >
          <option value="">Choose a service</option>
          {SERVICES.map((service, idx) => (
            <option key={idx} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12">
        <textarea
          name={FORM_FIELDS.message}
          rows="6"
          placeholder="Message"
          className="cs_form_field"
        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="cs_btn cs_style_1 wow fadeInRight">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default Form1;
