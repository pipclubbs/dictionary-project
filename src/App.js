import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <span>Dictionary</span>
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
    </div>
  );
}

export default App;
