import * as React from 'react';
import MaskedInput from '../components/MaskedInput';

/**
 * Returns the props necessary to create a masked input out of an ordinary HTML input.
 * 
 * @param mask - the mask to apply
 * @param onChange - the onChange event handler for the input
 * @param value - the controlled value prop of the input
 * 
 * @returns - the props to spread to your input component
 */
const useCreateMaskedInput = (mask: string, maskDelimiter: string, value: string) => {
    const maskParts = mask.split(maskDelimiter);
    const valueParts = value.split(maskDelimiter);

    const maskValue = (maskParts: string[], valueParts: string[]) => {
        return maskParts.map((maskPart: string, index: number) => {
            if (valueParts[index]) {
                return valueParts[index];
            }

            return maskPart;
        }).join(maskDelimiter);
    };

    const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let lengthWithoutDelimiters = 0;

        maskParts.forEach(() => {
            lengthWithoutDelimiters += maskParts.length

            if (event.currentTarget.value.length === lengthWithoutDelimiters) {
                setMaskedValue(
                    maskValue(
                        maskParts,
                        event.currentTarget.value.split(maskDelimiter)
                    )
                );
            }
        });
    }, [
        maskParts
    ]);

    const [maskedValue, setMaskedValue] = React.useState<string>(maskValue(maskParts, valueParts));

    return {
        // the max length of the input
        maxLength: mask.length,
        // the onChange handler for a masked input
        onChange,
        // the masked value
        value: maskedValue,
    };
};

export default useCreateMaskedInput;