// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//componente de class
//stateless
class AppClassComponentStateFullSistaxeSugar extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {name: "", numberDuplicado: 1};
  }

  handleChange(event){
    const name = event.target.value;
    this.setState({name});
  }

  handleClick(e){
    e.preventDefault();
    console.log(this.numberDuplicado);
    this.setState({numberDuplicado: this.state.numberDuplicado * 2});
  }

  handleReset(e){
    e.preventDefault();
    this.setState({numberDuplicado: 1});
  }

  render(){
    const { name, numberDuplicado } = this.state;
    return (
      <div>
        <div>Digite seu nome</div>
        <input onChange={this.handleChange} type="text" />
        <div>Seu Nome é: {name}</div>
        <br />
        Número inicial : 1
        <br />
        <a onClick={this.handleClick} href="https:\\www.google.com.br">Click aqui para duplica o numero</a>
        <br />
        Número Duplicado: {numberDuplicado}
        <br />
        Resetar Number
        <a onClick={this.handleReset} href="https:\\www.google.com.br">Click aqui</a>
      </div>
    )
  }
}
//componente funcional
//stateless
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default AppClassComponentStateFullSistaxeSugar;
