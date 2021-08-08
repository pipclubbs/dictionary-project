import logo from "./pip.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header d-flex">
          <img src={logo} alt="logo" className="img-fluid" />
          <span className="App-header-text">Dictionary</span>
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
