/**
 * Takes a user's input and integrates it into the mask to re-display.
 *
 * @param mask - the text mask.
 * @param maskDelimiter - the text mask delimiter.
 * @param userInput - the user's input.
 */
export const maskUserInput = (mask: string, maskDelimiter: string, userInput: string): string => {
    const maskParts = mask.split(maskDelimiter);
    const inputParts = userInput.split(maskDelimiter);

    return maskParts.map((maskPart: string, index: number) => {
        // merges the maskPart and the inputPart together
        return inputParts[index] + maskPart.substring(inputParts[index].length, maskPart[index].length);
    }).join(maskDelimiter);
};
