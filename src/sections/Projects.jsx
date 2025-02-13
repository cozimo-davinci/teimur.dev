import React, { Suspense, useState } from 'react';
import { myProjects } from "../constants/constants.js";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import DelayedLoader from "../components/DelayLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className="c-space my-20" id="work">
            <p className="head-text">My Work</p>
            {/* Set up a grid with 2 columns on large screens */}
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

                {/* Canvas Column – appears on the left */}
                <div className="border border-black-300 bg-black-200 rounded-lg min-h-[500px]">
                    <Canvas className="w-full h-full">
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<DelayedLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom />
                    </Canvas>
                </div>

                {/* Main Content Column – appears on the right */}
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    {/* Spotlight image */}
                    <div className="absolute top-0 right-0">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>
                    {/* Logo */}
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                         style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
                    </div>
                    {/* Text content */}
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-2xl text-white animatedText font-semibold">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>
                    {/* Tags and Link */}
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>
                        <a className="flex items-center gap-2 cursor-pointer text-white-600 hover:animate-bounce hover:border-b-2 hover:border-white"
                           href={currentProject.href} target="_blank" rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow"/>
                        </a>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn hover:scale-105 hover:border-b-4 hover:border-white"
                                onClick={() => handleNavigation("previous")}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                        </button>
                        <button className="arrow-btn hover:scale-105 hover:border-b-4 hover:border-white"
                                onClick={() => handleNavigation("next")}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                    <div className="flex items-center mt-5 gap-2">
                        <span className="relative flex h-3 w-3">
                            <span
                                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentProject.status === "In progress" ? "bg-yellow-400" : "bg-green-400"} opacity-75`}/>
                            <span
                                className={`relative inline-flex rounded-full h-3 w-3 ${currentProject.status === "In progress" ? "bg-yellow-500" : "bg-green-500"}`}/>
                        </span>
                        <p className="text-white text-medium font-medium">{currentProject.status}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
