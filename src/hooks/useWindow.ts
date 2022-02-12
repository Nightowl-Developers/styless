import * as React from 'react';

const useWindow = (): Window | undefined => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? window : undefined;
};

export default useWindow;