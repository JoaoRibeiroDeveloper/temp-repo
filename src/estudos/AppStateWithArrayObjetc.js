// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//componente de class
//stateless
class AppStateWithArrayObjetc extends Component{

  state = {
    inscritos: [
      {
        id: 1,
        name: "João Victor Pereira Ribeiro"
      },
      {
        id: 2,
        name: "Pedro Agusto"
      },
      {
        id: 3,
        name: "José Marcos Pereira Ribeiro"
      }
  ]
  };

  //lifeClyce methods
  //lifeclyce mehtods sao methodos que controla o clico de vida de um component
  //traducao : componente montrou
  //quando o componenete montra inteiramente ele executa esse funcao
  componentDidMount(){
    console.log("passou pelo didmouth")
    setTimeout(() => {
      const { inscritos } = this.state;
      const inscritos2 = [...inscritos, {id: 4, name: "Marcos Antốnio"}];
      this.setState({inscritos: inscritos2});
    },1000)
  }
  //traducao: component autualizou quando o componente é atualizado pelo seu state
  //ele chame essa funcion
  componentDidUpdate(){
    console.log("Passado pelo atualizado");
  }
  //traducao: componente desmotou
  //qaundo um componente desmota(quando sai no x ou atualiza a tela o componente e desmontado) ele executa essa function
  // componentWillUnmount(){

  // }
  
  render(){
    const { inscritos } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {inscritos.map(inscrito => (
              <tr key={inscrito.id}>
                <td>{inscrito.id}</td>
                <td>{inscrito.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        {[<b>Hello Word</b>, <b>Hello Word 2</b> ]}
      </div>
    )
  }
}

export default AppStateWithArrayObjetc;
