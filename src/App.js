import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <span>
          <a
            className="App-footer-img"
            href="https://github.com/pipclubbs/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{" "}
          {""} by Phillippa Clubbs
        </span>
      </footer>
    </div>
  );
}

export default App;
