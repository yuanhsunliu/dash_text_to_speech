import React from 'react';
import PropTypes from 'prop-types';
import { DashTextToSpeech as RealComponent } from '../LazyLoader';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const DashTextToSpeech = (props) => {
    return (
        <React.Suspense fallback={null}>
            <RealComponent {...props}/>
        </React.Suspense>
    );
};

DashTextToSpeech.defaultProps = {};

DashTextToSpeech.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    text: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    pitch: PropTypes.number,

    /**
     * The value displayed in the input.
     */
    rate: PropTypes.number,

    /**
     * The value displayed in the input.
     */
    volume: PropTypes.number,

    /**
     * The value displayed in the input.
     */
    paused: PropTypes.bool,

    /** Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default DashTextToSpeech;

export const defaultProps = DashTextToSpeech.defaultProps;
export const propTypes = DashTextToSpeech.propTypes;