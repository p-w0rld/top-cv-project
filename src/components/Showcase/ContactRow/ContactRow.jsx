import "./ContactRow.css";

export default function ContactRow({
  name,
  email,
  phoneNumber,
  removeCallback,
}) {
  const removeHandler = () => {
    removeCallback(name);
  };
  return (
    <div onClick={removeHandler} className="contact-row hover">
      <div className="remove">Click to remove</div>
      <div className="left-column">{name}</div>
      <div className="right-column">
        <span>
          {email} {phoneNumber}
        </span>
      </div>
    </div>
  );
}
