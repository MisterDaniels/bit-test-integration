import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import "./styles.css";

class ItemsList extends Component {
    
    render() {
        return(
            <Transition timeout={ 4000 } in={ true } appear>
                { status => (
                    <ul className={`box box-${status}`}>
                        <li>Animation</li>
                        <li>Transition</li>
                        <li>CSSTransition</li>
                        <li>SwitchTransition</li>
                        <li>TransitionGroup</li>
                    </ul>
                ) }
            </Transition>
        );
    }

}

export default ItemsList;