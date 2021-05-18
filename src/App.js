import bg1 from "./images/citybg.jpeg";
import car from "./images/car-motor.gif";
import motorcycle from "./images/motorcycle.gif";
import useWebAnimations from "@wellyshen/use-web-animations";
import { useEffect } from "react";

function App() {
  const movingcar = useWebAnimations({
    playbackRate: 1,
    keyframes: [
      {
        transform: "translateX(500px)",
      },
    ],
    animationOptions: {
      duration: 4000,
      iterations: "Infinity",
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const movingmotorcycle = useWebAnimations({
    playbackRate: 1,
    keyframes: [
      {
        transform: "translateX(500px)",
      },
    ],
    animationOptions: {
      duration: 4000,
      iterations: "Infinity",
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  useEffect(() => {
    let mcar = movingcar.ref.current;
    let mmotorcycle = movingmotorcycle.ref.current;

    const changecar = () => {
      mcar.classList.add("remove");
      mmotorcycle.classList.add("show");
    };

    const changemotorcycle = () => {
      mcar.classList.remove("remove");
      mmotorcycle.classList.remove("show");
    };

    document.addEventListener("click", changecar);
    document.addEventListener("touchstart", changecar);

    document.addEventListener("dblclick", changemotorcycle);
    document.addEventListener("touchend", changemotorcycle);

    mcar.addEventListener("mouseenter", () => {
      movingcar.getAnimation().playbackRate *= 2;
    });

    mmotorcycle.addEventListener("mouseenter", () => {
      movingmotorcycle.getAnimation().playbackRate *= 2;
    });

    mmotorcycle.addEventListener("mouseleave", () => {
      movingmotorcycle.getAnimation().playbackRate = 1;
    });

    mcar.addEventListener("mouseleave", () => {
      movingcar.getAnimation().playbackRate = 1;
    });
  }, [movingmotorcycle.ref, movingcar, movingmotorcycle]);

  return (
    <div className="App">
      <div>
        <h1>FOR MOTORCYCLE = Click OR Touch</h1>
        <h1>FOR CAR = DoubleClick OR Slide</h1>
        <h1>Move Mouse Over Vehicle To Speed Up</h1>
      </div>
      <div>
        <img src={bg1} alt="bg1" className="bg1" />
      </div>
      <div>
        <div>
          <img src={car} alt="car" className="car" ref={movingcar.ref} />
        </div>
        <div>
          <img
            src={motorcycle}
            alt=""
            className="motorcycle"
            ref={movingmotorcycle.ref}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
