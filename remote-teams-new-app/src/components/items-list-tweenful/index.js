import React, { useEffect, useState } from 'react';
import Tweenful, { elastic } from 'react-tweenful';

import { Observer } from 'react-tweenful';
import './styles.css';

const props = {
    delay: 1000,
    render: true,
    duration: 1600,
    easing: elastic(2, 0.1),
    loop: false,
    animate: { translateX: '400px' }
}

const ObserverDemo = () => {
    
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setTimeout(() => setShouldRender(false), 3000);
    }, []);

    return (
        <Observer>
            <div>
                { shouldRender &&
                    <Tweenful.div { ...props }>
                        <img alt="Basketball" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Basketball_Ball_Icon.png"></img>
                    </Tweenful.div>
                }
            </div>
        </Observer>
    );

}

export default ObserverDemo;