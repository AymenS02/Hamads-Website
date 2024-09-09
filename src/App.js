import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {

  const moveAwayAbout = () => {

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
      x: 0,
      y: 0,
      duration: 3,
      opacity: 1,
      ease: "power2.out",
      delay: 1,
    });
  };

const moveBackAbout = () => {
  gsap.to(".animated-item", {
    x: 0,
    y: 0,
    duration: 3,
    opacity: 1,
    ease: "power2.out",
    delay: 1,
    onComplete: startRandomAnimations, // Restart the animations after the move back
  });

  gsap.to(".about", {
    x: 3000,
    y: -3000,
    duration: 3,
    opacity: 0,
    ease: "power2.in",
  });
}

const moveAwayProject = () => {

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

  gsap.to(".project", {
    x: 0,
    y: 0,
    duration: 3,
    opacity: 1,
    ease: "power2.out",
    delay: 1,
  });
};

const moveBackProject = () => {
gsap.to(".animated-item", {
  x: 0,
  y: 0,
  duration: 3,
  opacity: 1,
  ease: "power2.out",
  delay: 1,
  onComplete: startRandomAnimations, // Restart the animations after the move back
});

gsap.to(".project", {
  x: 3000,
  y: -3000,
  duration: 3,
  opacity: 0,
  ease: "power2.in",
});
}

const moveAwayExperience = () => {

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

  gsap.to(".experience", {
    x: 0,
    y: 0,
    duration: 3,
    opacity: 1,
    ease: "power2.out",
    delay: 1,
  });
};

const moveBackExperience = () => {
gsap.to(".animated-item", {
  x: 0,
  y: 0,
  duration: 3,
  opacity: 1,
  ease: "power2.out",
  delay: 1,
  onComplete: startRandomAnimations, // Restart the animations after the move back
});

gsap.to(".experience", {
  x: 3000,
  y: -3000,
  duration: 3,
  opacity: 0,
  ease: "power2.in",
});
}

const moveAwaySchooling = () => {

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

  gsap.to(".schooling", {
    x: 0,
    y: 0,
    duration: 3,
    opacity: 1,
    ease: "power2.out",
    delay: 1,
  });
};

  const moveBackSchooling = () => {
    gsap.to(".animated-item", {
      x: 0,
      y: 0,
      duration: 3,
      opacity: 1,
      ease: "power2.out",
      delay: 1,
      onComplete: startRandomAnimations, // Restart the animations after the move back
    });

    gsap.to(".schooling", {
      x: 3000,
      y: -3000,
      duration: 3,
      opacity: 0,
      ease: "power2.in",
    });
  }

  // Function to restart the random movement animations
  const startRandomAnimations = () => {
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
  };


  useGSAP(() => {

    // Function to generate random values, to be changed
    const random = (min, max) => {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    };

    const elements = gsap.utils.toArray(".animated-item");

    elements.forEach((element) => {
      const randomX = random(20, 30);
      const randomY = random(20, 40);

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
    
    gsap.fromTo(".about", {
      x: 0,
      y: 0,
      duration: 3,
      opacity: 0,
    },{
      x: 3000,
      y: -3000,
      duration: 3,
      opacity: 0,
    } );

    gsap.fromTo(".project", {
      x: 0,
      y: 0,
      duration: 3,
      opacity: 0,
    },{
      x: 3000,
      y: -3000,
      duration: 3,
      opacity: 0,
    } );

    gsap.fromTo(".experience", {
      x: 0,
      y: 0,
      duration: 3,
      opacity: 0,
    },{
      x: 3000,
      y: -3000,
      duration: 3,
      opacity: 0,
    } );

    gsap.fromTo(".schooling", {
      x: 0,
      y: 0,
      duration: 3,
      opacity: 0,
    },{
      x: 3000,
      y: -3000,
      duration: 3,
      opacity: 0,
    } );


  }, []);

  return (
    <div className="bg-creamy w-screen h-screen flex items-center justify-center font-calistoga">
      <header className="fixed top-0 left-0 p-4 text-amber-800">© 2024 Hamad Shahbal</header>
      <div 
        className="about flex flex-col items-center justify-center gap-6 p-20 lg:w-[80%] xl:w-[40%] fixed bg-bone border border-black shadow-2xl"
      >
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-center">
          As a dedicated pre-med major with a strong desire to make a meaningful impact in the medical and pharmaceutical field, I am driven by a passion for healthcare and a commitment to improving the well-being of individuals. Throughout my academic journey, I have cultivated a solid foundation in the life sciences, honing my knowledge in areas such as biology, chemistry, and physiology.
        </p>
        <button className="bg-amber-800 text-creamy hover:bg-creamy hover:text-black border-black border p-4 mt-5 rounded-lg cursor-pointer duration-300 ease-in-out" onClick={moveBackAbout}>Back</button>

      </div>

      <div 
        className="experience flex flex-col items-center justify-center gap-6 p-20 lg:w-[80%] xl:w-[40%] fixed bg-bone border border-black shadow-2xl"
      >
        <div className="flex flex-col gap-4">
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <ul className="flex gap-8 flex-col">
            <li className="flex gap-4 para">
              <img src={`${process.env.PUBLIC_URL}/thermo.jpg`} alt="thermo" className="w-20 h-20 max-w-full md:w-20 md:h-auto border-black border" />
              <div>
                <h3>Process Engineering Associate</h3>
                <p>Thermo Fisher Scientific · Contract Full-time</p>
                <p className="text-amber-800">Apr 2024 - Present</p>
              </div>
            </li>

            <li className="flex gap-4 para">
              <img src={`${process.env.PUBLIC_URL}/starbucks.jpg`} alt="thermo" className="w-20 h-20 max-w-full md:w-20 md:h-auto border-black border" />
              <div>
                <h3>Barista</h3>
                <p>Starbucks · Permanent Part-time</p>
                <p className="text-amber-800">Sep 2021 - Jun 2024</p>
              </div>
            </li>

            <li className="flex gap-4 para">
              <img src={`${process.env.PUBLIC_URL}/doc.png`} alt="thermo" className="w-20 h-20 max-w-full md:w-20 md:h-auto border-black border" />
              <div>
                <h3>Medical Administrative Intern</h3>
                <p>M Sherman Medicine Professional Corporation · Internship</p>
                <p className="text-amber-800">May 2023 - Aug 2023</p>
              </div>
            </li>

            <li className="flex gap-4 para">
              <img src={`${process.env.PUBLIC_URL}/rx.png`} alt="thermo" className="w-20 h-20 max-w-full md:w-20 md:h-auto border-black border" />
              <div>
                <h3>Pharmacy Assistant</h3>
                <p>Remedy's Rx (Healthcare Plus Pharmacy) · Internship</p>
                <p className="text-amber-800">May 2022 - Aug 2022</p>
              </div>
            </li>
          </ul>
        </div>
        <button className="bg-amber-800 text-creamy hover:bg-creamy hover:text-black border-black border p-4 mt-5 rounded-lg cursor-pointer duration-300 ease-in-out" onClick={moveBackExperience}>Back</button>
      </div>

      <div 
        className="project flex flex-col items-center justify-center gap-6 p-20 lg:w-[80%] xl:w-[40%] fixed bg-bone border border-black shadow-2xl"
      >
        <div className="flex flex-col gap-4">
          <h2 className=" text-2xl font-bold">Projects</h2>
          <ul className="flex gap-8 flex-col">
            <li className="">

              <div className="flex para justify-between mb-6">
                <h3 className="font-bold">Cardiovascular Trials and Competing Risks Analysis</h3>
                <a
                href="https://www.linkedin.com/in/hamadshahbal/details/projects/1706056071253/single-media-viewer/?type=DOCUMENT&profileId=ACoAADElUZkBQQBoQo00jpKvoQdPQUqT5ppQT4k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 underline cursor-pointer"
                >
                  Project Link
                </a>
              </div>

              <hr className="border-amber-950 w-1/4 para mb-6" />

              <div className="flex flex-col gap-4">
                <p className="para">Conducted comprehensive research analysis on competing risks in cardiovascular disease trials, evaluating the methodological handling of composite outcomes. This role demanded high analytical rigour and attention to detail, skills directly relevant to the precision required in pharmacy technician responsibilities.</p>
                <p className="para">Expertly managed extensive data collection and performed methodological evaluations of clinical trial practices, ensuring accurate and meaningful results. This experience underscores my capability to handle complex pharmaceutical data and contribute to medication preparation and inventory management processes.</p>
                <p className="para">Collaborated with a multidisciplinary team to analyze and report findings, underscoring the importance of appropriate risk analysis in clinical settings. This role refined my abilities in effective communication and team collaboration, which are essential for a pharmacy technician's role in coordinating with healthcare providers and patients.</p>
              </div>
            </li>

            <li className="">

              <div className="flex para justify-between mb-6">
                <h3 className="font-bold">McMaster IMPACT Initiative: EDS Digest</h3>
                <a
                href="https://shahbalh.wixsite.com/mysite-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 underline cursor-pointer"
                >
                  Project Link
                </a>
              </div>

              <hr className="border-amber-950 w-1/4 para mb-6" />

              <p className="para">During my academic journey, I led a team of Science 2P03 students in extensive research on Ehlers-Danlos Syndrome (EDS) and its dietary implications. Our goal was to mobilize this knowledge for individuals affected by EDS, their caregivers, and the public. I created resources like "EDS Digest," a dedicated website, and a tri-fold pamphlet to empower individuals with EDS with informed dietary choices. In the IMPACT Initiative, I collaborated across disciplines with fellow students and accomplished professionals, addressing challenges faced by those with disabilities and the elderly. I contributed to research and designed customized accessibility devices, enhancing community clients' quality of life. My advocacy extends to emphasizing the role of informed dietary choices in managing EDS symptoms, and raising global awareness to support individuals with EDS in improving their quality of life. I remain dedicated to this cause, striving for positive change and increased awareness within the EDS community and beyond.</p>
            </li>
          </ul>
        </div>
        <button className="bg-amber-800 text-creamy hover:bg-creamy hover:text-black border-black border p-4 mt-5 rounded-lg cursor-pointer duration-300 ease-in-out" onClick={moveBackProject}>Back</button>
      </div>

      <div 
        className="schooling flex flex-col items-center justify-center gap-6 p-20 lg:w-[80%] xl:w-[40%] fixed bg-bone border border-black shadow-2xl"
      >
        <div className="flex flex-col para gap-4">
          <h2 className=" para text-2xl font-bold">Education</h2>
          <div className="flex gap-4 para ">
            <img src={`${process.env.PUBLIC_URL}/uni.jpg`} alt="University" className="w-20 border-black border" />
            <div>
              <h3>McMaster University</h3>
              <p>Honours Bachelor of Science (Hons. B. Sc), Biology, General</p>
              <p className="text-amber-800">2020 - 2025</p>
              <p>GPA: 3.9</p>
            </div>
          </div>
          <p>Activities and societies: McMaster Lux, McMaster Extra Life, McMaster MSA, McMaster MIVJC</p>
          <p>My coursework encompassed molecular biology, genetics, biochemistry, and microbiology, providing a strong foundation in life sciences. I conducted research projects in cardiovascular health, strengthening my analytical and problem-solving skills. This degree equips me to pursue a career in the medical and pharmaceutical fields</p>
        </div>
        <button className="bg-amber-800 text-creamy hover:bg-creamy hover:text-black border-black border p-4 mt-5 rounded-lg cursor-pointer duration-300 ease-in-out" onClick={moveBackSchooling}>Back</button>
      </div>

      <img
        id="boy"
        src={`${process.env.PUBLIC_URL}/boy.jpg`}
        alt="hamad"
        className="lg:w-[200px] xl:w-[300px] fixed rounded-full border-2 border-black animated-item shadow-2xl"
        onClick={moveAwayAbout}
      />

      <div
        className="flex items-center justify-center w-[150px] h-[150px] 2xl:w-[400px] 2xl:h-[400px] xl:text-2xl top-[10%] left-[15%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item shadow-2xl"
        onClick={moveAwayExperience}
      >
        <h2>Experience</h2>
      </div>

      <div
        className="flex items-center justify-center w-[150px] h-[150px] xl:w-[250px] 2xl:w-[400px] xl:h-[250px] 2xl:h-[400px] xl:text-2xl top-[60%] left-[15%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item shadow-2xl"
        onClick={moveAwayProject}
      >
        <h2>Projects</h2>
      </div>

      <div
        className="flex items-center justify-center w-[150px] h-[150px] lg:w-[250px] xl:w-[400px] lg:h-[250px] xl:h-[400px] xl:text-2xl top-[60%] left-[65%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item shadow-2xl"
        onClick={moveAwaySchooling}
      >
        <h2>Education</h2>
      </div>

      <div
        className="flex items-center justify-center w-[150px] h-[150px] lg:w-[250px] xl:w-[400px] lg:h-[250px] xl:h-[400px] xl:text-2xl top-[10%] left-[75%] fixed rounded-full bg-bone border border-black cursor-pointer select-none animated-item shadow-2xl"
        onClick={moveAwayAbout}
      >
        <h2>About Me</h2>
      </div>
      <footer className="fixed bottom-0 right-0 p-4 text-amber-800">© 2024 Hamad Shahbal</footer>
    </div>
  );
}

export default App;
