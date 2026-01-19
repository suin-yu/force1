import React, { useRef, useEffect, useState } from 'react';
import './FlipDigit.css';

const FlipDigit = ({ digit }) => {
    // We only need to store the *previous* digit in state to render it during animation.
    // The *current* digit comes directly from props.
    const [prevDigit, setPrevDigit] = useState(digit);
    const [isFlipping, setIsFlipping] = useState(false);

    // Keep track of the last digit we saw to detect changes
    const lastDigitRef = useRef(digit);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (digit !== lastDigitRef.current) {
            // Digit changed!
            const oldDigit = lastDigitRef.current;
            lastDigitRef.current = digit;

            // Start animation:
            // 1. Set prevDigit to the old value (so we can see it flipping down)
            setPrevDigit(oldDigit);
            setIsFlipping(true);

            // 2. Clear existing timer
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            // 3. Stop flipping after animation
            timeoutRef.current = setTimeout(() => {
                setIsFlipping(false);
                // Sync prevDigit to current so static state is correct
                setPrevDigit(digit);
            }, 600);
        }
    }, [digit]);

    return (
        <div className="flip-container">
            {/* Static Top (Next/Current Digit) */}
            <div className="flip-leaf top flip-static-top">
                <span>{digit}</span>
            </div>

            {/* Static Bottom (Prev Digit) - Visible underneath before flip */}
            <div className="flip-leaf bottom flip-static-bottom">
                <span>{prevDigit}</span>
            </div>

            {/* Animating Top Leaf (Prev Digit) - Folds down */}
            {isFlipping && (
                <div className="flip-leaf top animating">
                    <span>{prevDigit}</span>
                </div>
            )}

            {/* Animating Bottom Leaf (Next/Current Digit) - Folds down */}
            {isFlipping && (
                <div className="flip-leaf bottom animating">
                    <span>{digit}</span>
                </div>
            )}

            {/* Final state fix: When not flipping, bottom static shows current */}
            {!isFlipping && (
                <div className="flip-leaf bottom flip-static-bottom" style={{ zIndex: 5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                    <span>{digit}</span>
                </div>
            )}
        </div>
    );
};

export default FlipDigit;
