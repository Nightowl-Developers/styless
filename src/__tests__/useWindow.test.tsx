import { renderHook, act } from '@testing-library/react-hooks';
import { renderHook as renderServerHook } from '@testing-library/react-hooks/server';

import useWindow from '../hooks/useWindow';

describe('useDocument hook', () => {
    it('should return the document on client-side', async () => {
        const window = renderHook((_: any) => useWindow());

        await act(() => {
            expect(window).not.toEqual(undefined);
        });
    });

    it('should return `undefined` on server-side', async () => {
        const window = renderServerHook((_: any) => useWindow());

        await act(() => {
            expect(window).not.toEqual(undefined);
        });
    })
});