import React, { useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const ParallaxVideo = () => {
    const parallax = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const openModal = () => {
        setIsPlaying(true);
    };

    const closeModal = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const togglePlayback = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <div className={`modal ${isPlaying ? 'open' : ''}`} onClick={togglePlayback} >
                <video ref={videoRef} src="/images/parallax/video_how_to_viewlo.mp4" controls autoPlay={isPlaying} onClick={(e) => e.stopPropagation()} onPause={handlePause} />
            </div>
            
            <section id="parallax-video" className="parallax" ref={parallax}>
                <div className="overlay" style={{backgroundColor: 'white'}}/>
                <Container>
                    <Row>
                        <div className="video-btn wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">               
                            <button onClick={openModal} className="play-btn">
                                <i className="fas fa-play"></i>
                            </button>
                            <span className="video-text" style={{color: 'black'}}>What is ViewLo?</span>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ParallaxVideo;
