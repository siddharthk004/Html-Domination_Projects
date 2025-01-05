import React, { useEffect, useState } from "react";

function Work() {
  // State to track active images
  const [activeIndex, setActiveIndex] = useState(-1); // Start with no images visible

  const images = [
    {
      url: "https://plus.unsplash.com/premium_photo-1670020499167-777e79116d16?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
      top: "54%",
      left: "49%",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1670274384855-2c788751b219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
      top: "58%",
      left: "58%",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1670274385052-15990a1b67e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      top: "57%",
      left: "48%",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1670274385648-e89f9ade02e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      top: "47%",
      left: "59%",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1670274384855-2c788751b219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
      top: "50%",
      left: "43%",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1670020499167-777e79116d16?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
      top: "59%",
      left: "58%",
    },
  ];

  // Reset activeIndex when the component is mounted
  useEffect(() => {
    setActiveIndex(-1); // Reset the activeIndex to hide all images
  }, []);

  // Handle scroll to update activeIndex
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const newIndex = Math.min(
        Math.floor(scrollPosition / (windowHeight / (images.length * 2))), // Faster transition
        images.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup to reset the state when leaving the page
    return () => {
      setActiveIndex(-1); // Reset activeIndex on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]);

  return (
    <>
      <div className="w-full relative items-center justify-center text-center mt-20">
        <h1
          style={{ textShadow: "0 0 0.03em #dadada" }}
          className="text-9xl text-[2000%]"
        >
          WORK
        </h1>
        {/* Image Container */}
        <div className="absolute top-4 w-[26%] left-[37%] h-full z-10">
          {images.map((elem, ind) =>
            ind <= activeIndex ? (
              <img
                key={ind}
                className="w-50 h-59 rounded-lg -translate-y-[50%] -translate-x-[50%] absolute transition-opacity duration-300"
                style={{
                  top: elem.top,
                  left: elem.left,
                  opacity: ind === activeIndex ? 1 : 0.8,
                }}
                src={elem.url}
                alt=""
              />
            ) : null
          )}
        </div>
      </div>
    </>
  );
}

export default Work;
