import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Container from 'react-bootstrap/Container';


class Intro extends Component {
    render() {
        return (
            <section className="position-relative">
                <Container className="intro h-75 d-flex align-self-center"  >
                    <h1 className="middle align-self-center">A long time ago, in a galaxy far, <br />far away....</h1>

                </Container>
                <div id="board">
                    <div id="content">
                        <p id="title">Episode I</p>
                        <p id="subtitle">THE CODER'S MENACE</p>
                        <p> Episode IV, A NEW HOPE It is a period of civil war. Rebel spaceships, striking from a hidden base,
                            have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed
                            to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough
                            power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard
                            her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Intro;