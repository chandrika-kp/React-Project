function App(props) {
  const currDate = new Date();

  return (
    <div>
       <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
