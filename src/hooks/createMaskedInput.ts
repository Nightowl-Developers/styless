import * as React from 'react';
import {useCreateChangeHandler} from "./index";

export interface UseCreateInputMaskProps {
    /**
     * the default value of the input for pre-population
     */
    defaultValue?: string;
    /**
     * list of dependencies for the onChange useCallback
     */
    deps?: React.DependencyList;
    /**
     * is the component disabled?
     */
    disabled?: boolean;
    /**
     * the text to mask by
     */
    mask: string;
    /**
     * the character to split the mask and input text by.
     */
    maskDelimiter: string;
    /**
     * the user's onChange handler.
     *
     * @param event - event from input
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const createInputMask = ({
    defaultValue,
    deps,
    disabled = false,
    mask,
    maskDelimiter,
    onChange,
}: UseCreateInputMaskProps) => {
    const [inputValue, setInputValue] = React.useState(defaultValue);

    const handleOnInputChange = useCreateChangeHandler((
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        // @todo: is the last character typed suppose to be the delimiter
        const eventValue = event.target.value;
        let maskedValue = eventValue;
        const lastTypedIndex = eventValue.length - 1;
        const lastTypedCharacter = eventValue[lastTypedIndex];

        // if the last typed character's index in the mask contains the delimiter
        if (mask[lastTypedIndex] === maskDelimiter) {
            // if the last typed character is not the delimiter
            if (lastTypedCharacter !== maskDelimiter) {
                // @todo: append the delimiter in the proper position
                maskedValue = eventValue.slice(lastTypedIndex) + maskDelimiter + lastTypedCharacter;
            }

            // break mask and event by delimiter
            const maskParts = mask.split(maskDelimiter);
            const maskedParts = maskedValue.split(maskDelimiter);

            // construct new value for the masked user input
            maskedValue = maskParts.map((maskPart: string, index: number) => {
                    // return the proper part
                    return !!maskedParts[index]
                        ? maskedParts[index]
                        : maskPart;
                })
                .join(maskDelimiter);
        }

        // update state
        setInputValue(maskedValue);

        // run the user's onChange code
        onChange?.(event);
    }, disabled, deps);

    return [
        inputValue,
        handleOnInputChange,
    ]
}

export default createInputMask;
