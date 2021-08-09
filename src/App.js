import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container shadow rounded-3 mt-5">
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
    </div>
  );
}

export default App;
