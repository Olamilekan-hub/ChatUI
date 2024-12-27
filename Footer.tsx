import { useEffect, useState } from "react";
import FooterSmall from "./FooterSmall";

export default function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative w-full">
        {isSmallScreen ? <FooterSmall/> : <h1>large</h1> }
      </div>
    </>
  );
}
