import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btm--medium', 'btn--large'];

export const Button = ({
        children, 
        type, 
        onClick, 
        buttonStyle, 
        buttonSize,
        id
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) 
            ? buttonStyle 
            : STYLES(0);

            const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
            if (id === "contactme") {
              return (
                <Link to="/contactme" className="btn-mobile">
                  <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                  >
                    {children}
                  </button>
                </Link>
              );
            }
            else if (id === "demo") {
                return (
                <Link to="/projects" className="btn-mobile">
                  <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                  >
                    {children}
                  </button>
                </Link>
                );
            }
            else {
              return (
                <Link to="/projects" className="btn-mobile">
                  <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                  >
                    {children}
                  </button>
                </Link>
              );
            }
};