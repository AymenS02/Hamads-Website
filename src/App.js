import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {

  const moveAway = () => {

    // Kill all tweens for elements with class "animated-item"
    gsap.killTweensOf(".animated-item");

    // Move all elements with class "animated-item"
    gsap.to(".animated-item", {
      x: -3000, 
      y: 3000,
      duration: 3,
      opacity: 0,
      ease: "power2.in",
    });

    gsap.to(".about", {
      x: 3000, 
      y: -3000,
      duration: 3,
      opacity: 1,
      ease: "power2.out",
    });
  };

  const moveBack = () => {
    gsap.to(".animated-item", {
      x: 0,
      y: 0,
      duration: 3,
      opacity: 1,
      ease: "power2.out",
    });

    gsap.to(".about", {
      x: "150%",
      y: "-150%",
      duration: 3,
      opacity: 0,
      ease: "power2.in",
    });
  }


  useGSAP(() => {

    // Function to generate random values
    const random = (min, max) => {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    };

    const elements = gsap.utils.toArray(".animated-item");

    elements.forEach((element) => {
      const randomX = random(10, 20);
      const randomY = random(20, 30);

      // Random movement animation
      gsap.to(element, {
        x: randomX(1),
        y: randomY(1),
        duration: random(2, 4)(),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Hover scaling animation
      element.addEventListener("mouseenter", () => {
        gsap.to(element, { scale: 1.2, duration: 0.3, ease: "power1.inOut" });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, { scale: 1, duration: 0.3, ease: "power1.inOut" });
      });
    });
  }, []);

  return (
    <div className="bg-creamy w-screen h-screen flex items-center justify-center ">

      <img
        id="boy"
        src="/boy.jpg"
        alt="hamad"
        className="w-[200px] fixed rounded-full border-2 border-black animated-item"
        onClick={moveAway}
      />

      <div
        className="flex items-center justify-center w-[250px] h-[250px] top-[15%] left-[15%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item"
        onClick={moveAway}
      >
        <h2>Experience</h2>
      </div>

      <div
        className="flex items-center justify-center w-[250px] h-[250px] top-[70%] left-[15%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item"
        onClick={moveAway}
      >
        <h2>Projects</h2>
      </div>

      <div
        className="flex items-center justify-center w-[250px] h-[250px] top-[70%] left-[65%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item"
        onClick={moveAway}
      >
        <h2>Schooling</h2>
      </div>

      <div
        className="flex items-center justify-center w-[250px] h-[250px] top-[20%] left-[75%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item"
        onClick={moveAway}
      >
        <h2>About Me</h2>
      </div>

      <div 
        className="about flex flex-col items-center justify-center gap-6 p-20 w-[80%] fixed bg-bone border border-black"
        onClick={moveBack}
      >
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-center">
          As a dedicated pre-med major with a strong desire to make a meaningful impact in the medical and pharmaceutical field, I am driven by a passion for healthcare and a commitment to improving the well-being of individuals. Throughout my academic journey, I have cultivated a solid foundation in the life sciences, honing my knowledge in areas such as biology, chemistry, and physiology.
        </p>
      </div>
    </div>
  );
}

export default App;
