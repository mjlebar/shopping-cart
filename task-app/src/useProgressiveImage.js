import { useState, useEffect } from "react";

const useProgressiveImage = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

export { useProgressiveImage };

// this code was written by Jesper N on Stack overflow: https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react. It allows me to lazy load the iamges on the home and about screen. Thanks Jasper!
