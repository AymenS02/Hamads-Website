import { useEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const imgRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const box = boxRef.current;

    const random = (min, max) => {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    };

    const randomX = random(10, 20);
    const randomY = random(20, 30);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(8, 12);

    // GSAP animation for the image
    gsap.set(img, {
      x: randomX(-1),
      y: randomY(1),
      rotation: randomAngle(-1),
    });

    const moveX = (target, direction) => {
      gsap.to(target, {
        duration: randomTime(),
        x: randomX(direction),
        ease: "sine.inOut",
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    };

    const moveY = (target, direction) => {
      gsap.to(target, {
        duration: randomTime(),
        y: randomY(direction),
        ease: "sine.inOut",
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    };

    const rotate = (target, direction) => {
      gsap.to(target, {
        duration: randomTime2(),
        rotation: randomAngle(direction),
        ease: "sine.inOut",
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    };

    // Start the animations
    moveX(img, 1);
    moveY(img, -1);
    rotate(img, 1);

    moveX(box, 1);
    moveY(box, -1);
    rotate(box, 1);

    // Hover animations
    const hoverIn = (target) => {
      gsap.to(target, { scale: 1.2, duration: 0.8, });
    };

    const hoverOut = (target) => {
      gsap.to(target, { scale: 1, duration: 0.8, });
    };

    // Add event listeners for hover effects
    img.addEventListener("mouseover", () => hoverIn(img));
    img.addEventListener("mouseout", () => hoverOut(img));

    box.addEventListener("mouseover", () => hoverIn(box));
    box.addEventListener("mouseout", () => hoverOut(box));

    // Cleanup event listeners on unmount
    return () => {
      img.removeEventListener("mouseover", () => hoverIn(img));
      img.removeEventListener("mouseout", () => hoverOut(img));

      box.removeEventListener("mouseover", () => hoverIn(box));
      box.removeEventListener("mouseout", () => hoverOut(box));
    };

  }, []);

  return (
    <div className="bg-creamy w-screen h-screen flex items-center justify-center ">
      <img
        ref={imgRef}
        src="/boy.jpg"
        alt="hamad"
        className="w-[200px] fixed rounded-full border-2 border-black"
      />
      <div
        ref={boxRef}
        className="flex items-center justify-center w-[250px] h-[250px] top-[20%] left-[15%] fixed rounded-full bg-bone border border-black cursor-pointer select-none"
      >
        <h2>Experience</h2>
      </div>
      <div
        ref={boxRef}
        className="flex items-center justify-center w-[250px] h-[250px] top-[80%] left-[15%] fixed rounded-full bg-bone border border-black cursor-pointer select-none"
      >
        <h2>Projects</h2>
      </div>
      <div
        ref={boxRef}
        className="flex items-center justify-center w-[250px] h-[250px] top-[80%] left-[75%] fixed rounded-full bg-bone border border-black cursor-pointer select-none"
      >
        <h2>Schooling</h2>
      </div>
      <div
        ref={boxRef}
        className="flex items-center justify-center w-[250px] h-[250px] top-[20%] left-[75%] fixed rounded-full bg-bone border border-black cursor-pointer select-none"
      >
        <h2>About Me</h2>
      </div>
    </div>
  );
}

export default App;
