import { Component } from "react"

class Button extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    console.log("componentDidMount")  
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate", prevProps, prevState)
  }

  componentWillUnmount(){
    console.log("componentWillUnmount", this.props, this.state)
  }

  render(){
    console.log("ejecutando metodo render de Button")
    return(
      <button onClick={() => this.setState({prop: 1})}>
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
        {this.state.valor === 3
        ? <Button chanchito="feliz"/>
        : null}
        <button className={this.state.valor} onClick={() => this.setState({ valor: 2})}>
          Enviar en app
        </button> 
      </div>
    ) 
  }
}

export default App;
