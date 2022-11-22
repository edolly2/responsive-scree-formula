import React, { useState, useEffect } from 'react'
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';


const MyComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}

export default MyComponent