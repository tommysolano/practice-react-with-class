import { Component } from "react"

class Button extends Component {
  render(){
    console.log("ejecutando metodo render de Button")
    return(
      <button>
        Enviar
      </button>
    )
  }
}

class App extends Component {
  state = {
    valor: 3
  }
  render(){
    return (
      <div>
        <p>Hola mundo</p>
        <Button/>
        <button className={this.state.valor} onClick={() => this.setState({ valor: 2})}>
          Enviar en app
        </button> 
      </div>
    ) 
  }
}

export default App;
