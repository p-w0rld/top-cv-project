import "./ContactForm.css";
import ButtonComponent from "../../../../elements/ButtonComponent";

export default function ContactForm({
  contactData,
  handleChange,
  handleContactFormSubmit,
}) {
  return (
    <form id="contact-form" onSubmit={handleContactFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={contactData.phoneNumber}
          onChange={handleChange}
        ></input>
      </div>
      <ButtonComponent buttonText="add" />
    </form>
  );
}
