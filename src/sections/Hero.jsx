import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { DragControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import DelayedLoader from '../components/DelayLoader.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/constants.js';
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const hackerRoomRef = useRef();
    const initialPosition = useRef([2, -8, 2]);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id={"home"}>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am <span>Teimur</span>
                    <span className="waving-hand">🏋️</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building Software and Future
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<DelayedLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera  isMobile={isMobile}>
                            <HackerRoom
                                ref={hackerRoomRef}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />

                        </HeroCamera>
                        <group>
                                <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        <OrbitControls enableRotate enablePan enableZoom />
                        {hackerRoomRef.current && (
                            <DragControls
                                transformGroup
                                objects={[hackerRoomRef.current]}
                                onDragEnd={() => {
                                    if (hackerRoomRef.current) {
                                        hackerRoomRef.current.position.set(
                                            initialPosition.current[0],
                                            initialPosition.current[1],
                                            initialPosition.current[2]
                                        );
                                    }
                                }}
                            />
                        )}
                    </Suspense>
                </Canvas>
            </div>
            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <a href={"#about"} className={"w-fit"}>
                    <Button name={"Let's work together"} isBeam containerClass={"sm:w-fit w-full sm:min-w-96 hover:border-b-4 border-green-500 hover:bg-purple-800 "} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
