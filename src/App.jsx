import logo from './logo.svg';
import './App.css';

function App() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="last name" />
        <input type="email" name="email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
