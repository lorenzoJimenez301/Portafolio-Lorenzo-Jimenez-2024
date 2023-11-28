import React from 'react';
import { MdOutlineDesignServices, MdOutlineWeb } from 'react-icons/md';
import { FaCode } from 'react-icons/fa6';
import '../Styles/Index.css';

export const InterIndex = () => {
  const items = [
    { text: 'Design', icon: <MdOutlineDesignServices className='interIcon' /> },
    { text: 'Development', icon: <FaCode className='interIcon' /> },
    { text: 'Deploy', icon: <MdOutlineWeb className='interIcon' /> },
  ];

  return (
    <div className='inter d-flex align-items-center justify-content-evenly'>
      {items.map((item, index) => (
        <h2 key={index}>
          {item.text} {item.icon}
        </h2>
      ))}
    </div>
  );
};

