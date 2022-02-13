import { renderHook, act } from '@testing-library/react-hooks';

import useCreateMaskedInput from '../hooks/useCreateMaskedInput';

describe('useDocument hook', () => {
    it('should return a masked `value` and `maxLength` prop values', async () => {
        const { result, rerender } = renderHook((_: any) => useCreateMaskedInput(
            'mm/dd/yyyy',
            '/',
            '08'
        ));

        rerender()

        act(() => {
            const { current } = result;

            expect(current.maxLength).toEqual(10);
            expect(current.value).toEqual('08/dd/yyyy');
        });
    });
});