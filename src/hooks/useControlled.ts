import * as React from 'react';

const useControlled = (value: string | number | boolean | undefined) => {
    /**
     * controlled components are components whose state are controlled
     * by the react api.
     * 
     * this variable makes a component controlled when value is provided.
     */
    const [controlledValue, setControlledValue] = React.useState<
        string | number | boolean | undefined
    >(value || undefined);

    /**
     * is the component controlled or uncontrolled?
     * 
     * @returns - whether the component is controlled or uncontrolled.
     */
    const isControlled = () => value !== undefined;

    /**
     * Sets the controlled variable value when the component is controlled.
     * 
     * @param value - the value from an event.
     */
    const setValue = (value: string | number | boolean | undefined) => {
        if (isControlled()) {
            setControlledValue(value);
        }
    };

    /**
     * we mimick the api for the React.useState hook in our own.
     * 
     * the first value returned within the array is the state 
     * variable. when the component is controlled, it returns 
     * the `controlledValue` variable, when uncontrolled, it 
     * returns the `value` argument.
     * 
     * the second value returned within the array is the setState 
     * variable, when the setState variable is used, it will set 
     * the controlled variables state.
     * 
     * important: the setState variable will do nothing when the 
     * component is uncontrolled.
     */
    return [
        isControlled() ? controlledValue : value,
        setValue
    ];
};

export default useControlled;