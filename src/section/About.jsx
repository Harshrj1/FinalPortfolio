import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('samiyamalhotra2803@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/Harsh.png" alt="grid-1" className="w-full sm:h-[256px] h-full object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m Harsh Raj</p>
                            <p className="grid-subtext">
                                My experience spans frontend and backend development, involving advanced technologies like Firebase, React, and Tailwind, delivering innovative solutions such as the JourneyJunction travel app with real-time location tracking and weather updates., I have led various projects, including an E-KYC system using computer vision for OCR, facial recognition, and liveness detection. I also developed cryptocurrency tracking platforms and real-time object detection models using CNN, Mask R-CNN, and YOLO algorithms
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/chen-Qtu3hGinLF8-unsplash.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">

                                I specialize in a diverse range of languages, frameworks, and tools, including Python, Java, React, Next.js, and Tailwind CSS, enabling me to create scalable and efficient applications. My expertise extends to machine learning, deep learning,
                                and cloud-based services like Firebase, ensuring comprehensive, robust, and high-performance solutions across various domains.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    { lat: 25.8617, lng: 85.7897, text: "I'm here!", color: 'red-500', size: 15 }
                                ]}

                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in 'Bihar, India' and open to remote work worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I have a strong passion for coding that goes beyond just work.
                                I love solving problems and turning ideas into reality through programming.
                                Learning new technologies and improving my skills excites me, as there’s always something new to discover.
                                Coding challenges push me to think in different ways and help me grow, both as a person and in my career..
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">Harshrj16@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;