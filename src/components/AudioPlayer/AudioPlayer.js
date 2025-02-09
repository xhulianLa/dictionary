import { useEffect, useState, useRef } from "react";
import { ReactComponent as PauseIcon } from "../../assets/icons/pause2.svg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import styles from "./AudioPlayer.module.css";

function AudioPlayer({ audioLink }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(audioLink));

    useEffect(() => {
        const audio = audioRef.current;

        if (isPlaying) {
            audio.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset playback to the beginning
        }

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        audio.src = audioLink;

        const handleEnded = () => {
            setIsPlaying(false);
        };

        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("ended", handleEnded);
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audioLink]);

    const handlePlayPause = () => {
        console.log(audioLink);
        setIsPlaying((prev) => !prev);
    };

    return (
        <button
            disabled={!audioLink}
            className={styles.listen_button}
            onClick={handlePlayPause}
        >
            {isPlaying ? <PauseIcon className={styles.icon} /> : <PlayIcon className={styles.icon} />}
        </button>
    );
}

export default AudioPlayer;