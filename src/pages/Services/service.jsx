import React, { useState, useEffect } from "react";

// Import images from the assets folder
import image1 from "../../assets/potentialGrowth.jpeg"
import image2 from "../../assets/unlockPotential.jpeg";

const Services = () => {
  const [text, setText] = useState("Innovative solutions for growth");
  const [image, setImage] = useState(1); 

  useEffect(() => {
    const texts = [
      "Innovative solutions for growth",
      "Unlocking potential, fueling achievement",
    ];
    
    const interval = setInterval(() => {
      setText((prevText) => {
        return prevText === texts[0] ? texts[1] : texts[0];
      });

      // Toggle the image as well
      setImage((prevImage) => (prevImage === 1 ? 2 : 1));
    }, 3000); // Change text and image every 3 seconds
    
    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="py-10 px-4 mt-10">
      {/* Service Details */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Text on the left */}
        <div className="flex justify-between items-center">
        <div className="w-full md:w-1/2 text-5xl text-gray-950 font-bold mb-4">
        {text}
          </div>

          {/* Image on the right */}
          <div className="w-full md:w-1/2">
            <div className="w-50 h-50 bg-gray-300 flex justify-center items-center mx-auto">
              <img
                src={image === 1 ? image1 : image2} // Use the imported images here
                alt={`Service Image ${image}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
