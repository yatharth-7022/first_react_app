export default function handleButtonClick(buttonName) {
  const [clickedButton, setClickedButton] = useState("");
  setClickedButton(buttonName);
  console.log(buttonName);
}
