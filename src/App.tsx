// import './App.css';

const message = 'welcome to this site!';

function App() {
  return (
    <div className="App">
      <h1>Vitest-Unit-Testing-React-Vite-Typescript</h1>
      {/* <p>Message: {message}</p> */}
      <p>Message: {surround(message, '[]')}</p>
    </div>
  );
}

export default App;
