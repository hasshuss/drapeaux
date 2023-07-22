import React, { useState } from 'react';
import Vector from '../../images/Vector.png';
import './Collapse.scss'

const Collapse = ({ title, content, isOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(!isOpen);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse'>
      <div  onClick={handleToggle} className='title'>
        <div className='titre'>{title}</div>
        <img
          src={Vector}
          className={`arrow ${isCollapsed ? '' : 'rotate'}`}
          alt='Arrow'
        />
      </div >
      <div className='content-container'>
      <div className={`content ${isCollapsed ? '' : 'open'}`}>
        {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;