import './SecondButton.css'

export default function Button(props) {
  const { text, type } = props;

  if (!type) {
    return (
    <button type = "button" className='myBtn'>
      {text}
    </button>
    );
  } else if (type === 'simple') {
    return (
      <a href="https://babeljs.io/docs/usage">{text}</a>
    )
  }
}