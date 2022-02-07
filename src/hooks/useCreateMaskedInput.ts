import * as React from 'react';

/**
 * Returns the props necessary to create a masked input out of an ordinary HTML input.
 * 
 * @param mask - the mask to apply
 * @param value - the controlled value prop of the input
 * 
 * @returns - the props to spread to your input component
 */
const useCreateMaskedInput = (mask: string, maskDelimiter: string, value: string) => {
    const [maskedValue, setMaskedValue] = React.useState<string>(
        mask.split(maskDelimiter).map((char: string, index: number) => {
            if (value[index]) {
                return value[index];
            }

            return char;
        }).join(maskDelimiter)
    );

    return {
        // the max length of the input
        maxLength: mask.length,
        // the masked value
        value: maskedValue,
    };
};

export default useCreateMaskedInput;