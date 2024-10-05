import React, { Component } from 'react';
import './estilo.css';

import biscoito from './assets/biscoito.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            numeroAleatorio: null,
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        this.gerarNumeroAleatorio = this.gerarNumeroAleatorio.bind(this);

        this.frases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.',
        ];
    }

    quebraBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);
    }

    gerarNumeroAleatorio() {
        const numero = Math.floor(Math.random() * 100) + 1;
        this.setState({ numeroAleatorio: numero });
    }

    render() {
        return (
            <div className="container">
                <img src={biscoito} className="img" alt="Biscoito da Sorte" />
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
                <Botao nome="Gerar número aleatorio entre 1 e 100" acaoBtn={this.gerarNumeroAleatorio} />
                {this.state.numeroAleatorio !== null && (
                    <h3 className="numeroAleatorio">Número sorteado: {this.state.numeroAleatorio}</h3>
                )}
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;
