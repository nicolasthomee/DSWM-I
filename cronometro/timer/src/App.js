import React, {Component} from 'react';
import './assets/style.css'
import cronometro from './assets/cronometro.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0, 
      botao: 'INICIAR'
    };

    this.iniciarCronometro = this.iniciarCronometro.bind(this);
    this.zerarCronometro = this.zerarCronometro.bind(this);
    this.timer = null;

  }

  iniciarCronometro(){
    let estado = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      
      estado.botao = 'INICIAR';
    } else {
      this.timer = setInterval(()=>{
        let estado = this.state;
        estado.numero += 0.1;
        this.setState(estado);
      }, 100);

      estado.botao = 'PAUSAR';

    }
    this.setState(estado);
    
  }

  zerarCronometro(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let estado = this.state;
    estado.numero = 0;
    estado.botao = 'INICIAR';
    this.setState(estado);
  }

  render(){
    return(
      <div className='container'>
        <img src={cronometro} className='img'/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='botao' onClick={this.iniciarCronometro}>{this.state.botao}</a>
          <a className='botao' onClick={this.zerarCronometro}>ZERAR</a>
        </div>
      </div>
    );
  }
}

export default App;