import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const h1 = React.createElement('h1', {}, 'React');
  const p = React.createElement('p', {}, 'Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные изменяются.');
  const img = React.createElement('img', { src: logo, alt: "logo" });
  const container = React.createElement('div', {}, h1, p, img);
  return (
    <div className="App">
      {container}
      <h1>React</h1>
      <p>Создавать интерактивные пользовательские интерфейсы на React — приятно и просто.
        Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях.
        React будет своевременно их обновлять, когда данные изменяются.</p>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
