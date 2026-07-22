function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Divya" />
      <Greeting name="Rajora" />
    </div>
  );
}

export default App;