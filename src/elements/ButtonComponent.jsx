import "./ButtonComponent.css";

export default function ButtonComponent({ buttonText, onClickHandler }) {
  return <button onClick={onClickHandler}>{buttonText}</button>;
}
