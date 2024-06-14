import React from 'react';

export default function CustomButton({ children, className, ...props }) {
    return (
        <button
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}