import React, { Component } from 'react';
import { Slide, Fade, Bounce } from 'react-awesome-reveal';

import './styles.css';

class ItemsListSlide extends Component {
    
    render() {
        return (
            <Fade triggerOnce>
                <ul className="box">
                    <Slide>
                        <li>Slide</li>
                    </Slide>
                    <li>Cascade</li>
                    <li>Damping</li>
                    <li>Direction</li>
                    <Bounce>
                        <li>Bounce</li>
                    </Bounce>
                    <li>Delay</li>
                </ul>
            </Fade>
        )
    }

}

export default ItemsListSlide;