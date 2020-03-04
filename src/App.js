import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Intro from './components/Intro.js';
import Game from './components/Game.js';
import Container from 'react-bootstrap/Container';


class App extends Component {
    render() {
        return (
            <div clasName="App">
                <div className="pic" style={{
                    background: `url("${process.env.PUBLIC_URL + '/img/stars.jpeg'}") no-repeat center /cover `
                }} >
                    <img className="starwarsImg" Src={process.env.PUBLIC_URL + "/img/title.png"} />
                    <div className=" center ">
                        <a href="#game" className="start btn btn-lg btn-outline-warning "> Click to play </a>
                    </div>
                    <Container className="filler position-relative h-100 align-items-center ">
                        <Intro />
                    </Container>
                </div>
                <div className="ml-5 game" style={{
                    background: `url("${process.env.PUBLIC_URL + '/img/background.jpg'}") no-repeat center / cover`
                }}>
                    <section className="gameSection align-items-center " id="game">
                        <Container className="filler justify-content-start">
                            <Game />
                        </Container>
                    </section>
                    <footer>
                        <img className="yoda" Src={process.env.PUBLIC_URL + "/img/babyyoda.png"} />
                    </footer>
                </div>

            </div>
        )
    }
}

export default App;