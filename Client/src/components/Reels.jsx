// src/components/ShortsPage.js
import React, { useEffect, useRef, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdComment, MdShare } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Reels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRefs = useRef([]);
    const { posts } = useSelector((store) => store.post)
    console.log(posts)

    const handleScroll = (e) => {
        const newIndex = Math.round(e.target.scrollTop / window.innerHeight);
        setCurrentIndex(newIndex);
    };

    const handleVideoClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo) {
            currentVideo.play();
        }

        return () => {
            if (currentVideo) {
                currentVideo.pause();
            }
        };
    }, [currentIndex]);

    return (
        <div className="relative overflow-hidden h-screen bg-black">
        <div className="flex flex-col h-full overflow-y-scroll snap-y snap-mandatory" onScroll={handleScroll}>
            {posts.map((video, index) => (
                <div key={index} className="snap-start h-screen flex flex-col items-center justify-center">
                    <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="w-full h-full object-cover"
                        src={video.image}
                        loop
                    />
                    <div className="absolute bottom-4 w-full flex justify-between px-6 text-white">
                        <div className="flex flex-col">
                            <button className="text-3xl mb-2"><FaHeart /></button>
                            <button className="text-3xl"><MdComment /></button>
                        </div>
                        <div className="flex flex-col">
                            <button className="text-3xl mb-2"><MdShare /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Reels;
