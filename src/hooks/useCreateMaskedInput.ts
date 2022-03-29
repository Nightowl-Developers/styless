import * as React from 'react';
import MaskedInput from '../components/MaskedInput';
import {ElementType} from "react";
import {useControlled} from "./index";
import {maskUserInput} from "../utils/maskUserInput";

export interface UseMaskedInputProps {
    defaultValue: string;
    mask: string;
    maskDelimiter: string;
    maxLength: number;
    name: string,
    value: string;
}

/**
 * Returns the props necessary to create a masked input out of an ordinary HTML input.
 *
 * @param mask - the mask to apply.
 * @param maskDelimiter - the character that delimits the mask.
 * @param value - the controlled value prop of the input.
 *
 * @returns - the props to spread to your input component
 */
const useMaskedInput = ({
    defaultValue,
    mask,
    maskDelimiter,
    name,
    value: valueProp,
}: UseMaskedInputProps) => {
    const [value, setValue] = useControlled<string>({
        controlled: valueProp,
        default: defaultValue,
        name,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const maskedText = maskUserInput(mask, maskDelimiter, event.currentTarget.value);

        setValue(maskedText);
    };

    return [
        value,
        handleChange,
    ];
};

export default useMaskedInput;
