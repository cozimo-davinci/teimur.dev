import { Html, useProgress } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

const CanvasLoader = () => {
    const { progress } = useProgress();
    const [displayProgress, setDisplayProgress] = useState(progress);

    useEffect(() => {
        // Delay the update until after the current render completes
        const id = setTimeout(() => {
            setDisplayProgress(progress);
        }, 0);
        return () => clearTimeout(id);
    }, [progress]);

    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className="canvas-loader" />
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {displayProgress !== 0 ? `${displayProgress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    );
};

export default React.memo(CanvasLoader);
