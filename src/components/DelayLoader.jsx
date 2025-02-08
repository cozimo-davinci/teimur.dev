import React, { useState, useEffect } from 'react';
import CanvasLoader from './CanvasLoader';

const DelayedLoader = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Delay until after the first render
        setMounted(true);
    }, []);

    return mounted ? <CanvasLoader /> : null;
};

export default DelayedLoader;
