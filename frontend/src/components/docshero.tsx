"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ResponsiveDiv = () => {
  const defaultStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20rem',
    filter: 'invert(100%) opacity(10%)',
    padding: '1rem',
    margin: '1rem'
  };

  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setStyle({
          ...defaultStyle,
          height: '1rem',
        });
      } else {
        setStyle(defaultStyle);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div style={style}>
                    <Image width={1080} height={1080}
                        className="object-cover w-full dark:invert"
                        src="/assets/logoW.png"
                        alt="content"
                        layout="intrinsic"
                    />
        </div>;
};

export default ResponsiveDiv;