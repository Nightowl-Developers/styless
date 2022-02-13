import { renderHook, act } from '@testing-library/react-hooks';
import { renderHook as renderServerHook } from '@testing-library/react-hooks/server';

import useDocument from '../hooks/useDocument';

describe('useDocument hook', () => {
    it('should return `document` on client-side', async () => {
        const document = renderHook((_: any) => useDocument());

        act(() => {
            expect(document).not.toEqual(undefined);
        });
    });
    
    it('should return `undefined` on server-side', async () => {
        const document = renderServerHook((_: any) => useDocument());

        act(() => {
            expect(document).not.toEqual(undefined);
        });
    });
});