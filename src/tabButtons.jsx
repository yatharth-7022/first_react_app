export default function TabButtons(props) {
  return (
    <menu>
      {props.label.map((prop) => (
        <li>
          <button
            className={props.clickedButton === prop ? "active" : undefined}
            onClick={() => props.onButtonClick(prop)}
          >
            {prop}
          </button>
        </li>
      ))}
      {}
    </menu>
  );
}
