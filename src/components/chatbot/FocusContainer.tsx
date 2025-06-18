import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FocusContainer = ({ children, behavior, block, className }) => {
    const focusRef = useRef(null);

    useEffect(() => {
        focusRef?.current.scrollIntoView({ behavior, block });
    }, [behavior, block]);

    return (
        <div ref={focusRef} className={className}>
            {children}
        </div>
    );
};

FocusContainer.propTypes = {
    children: PropTypes.node,
    behavior: PropTypes.string,
    block: PropTypes.string,
};

FocusContainer.defaultProps = {
    children: {},
    behavior: 'smooth',
    block: 'start',
};

export default FocusContainer;
