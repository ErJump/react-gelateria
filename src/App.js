import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header className="px-3 py-2">
        <h1>React Gelateria</h1>
      </header>
      <main className="container">
        <div className="row">
          <Menu/>
        </div>
      </main>
    </div>
  );
}

export default App;
