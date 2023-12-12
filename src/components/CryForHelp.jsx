import { useState, useEffect } from "react";
import "animate.css";

function CryForHelp() {
  const sos = [
    "This site doesn't support small screens",
    "Moye Moye🤡",
    "The developer fainted while designing the mobile site.",
    "Just kidding he is thinking about working on it...",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const audio = new Audio("./src/assets/inkiPinki-ponki.mp3");
    audio.play();

    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        return prevIndex === sos.length - 1 ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
      audio.pause();
    };
  }, [sos.length]);

  const animationClasses = [
    "animate__backInDown",
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
    "animate__fadeInBottomRight",
    "animate__fadeInBottomRight",
    "animate__fadeInBottomRight",
    "animate__flipInX",
    "animate__flipInY",
    "animate__lightSpeedOutRight",
    "animate__flipOutY",
    "animate__hinge",
    "animate__jackInTheBox",
    "animate__zoomInDown",
    "animate__zoomInDown",
  ];

  const randomAnimationClass =
    animationClasses[Math.floor(Math.random() * animationClasses.length)];

  return (
    <div
      className={`flex w-full bg-indigo-600 h-screen items-center justify-center`}
    >
      <h2
        className={`text-white font-bold text-6xl text-center animate__animated ${randomAnimationClass}`}
      >
        {sos[currentMessageIndex]}
      </h2>
    </div>
  );
}

export default CryForHelp;
