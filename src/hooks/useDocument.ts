import * as React from 'react';

const useDocument = (): Document | undefined => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    });

    return isClient ? document : undefined;
};

export default useDocument;