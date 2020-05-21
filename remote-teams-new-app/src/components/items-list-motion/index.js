import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { screens } from './data';
import "./styles.css";

export default function ItemsListMotion() {

    const [selected, setSelected] = useState(0);

    return (
        <AnimateSharedLayout>
            <ol style={{ transform: "translateZ(0)" }}>
                { screens.map(({ title, color }, i) => (
                    <motion.li
                        animate
                        key={ i }
                        className={`title ${i === selected && "selected"}`}
                        style={{ color: i === selected ? color: "#333" }}
                        onClick={ () => setSelected(i) }>
                            { i === selected && (
                                <motion.div
                                    layoutId="underline"
                                    className="underline"
                                    style={{ backgroundColor: color }} />
                            )}
                            { title }
                    </motion.li>
                ))}
            </ol>
        </AnimateSharedLayout>
    );

}