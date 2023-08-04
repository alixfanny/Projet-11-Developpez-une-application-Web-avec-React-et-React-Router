import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function MyCollapse({title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='my-collapse' onClick={handleToggle}>
      <div className='button' >
        <button className="btn">
          {title}
        </button>
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>

      {isOpen && (
        <div className='collapse-content'>
          <div className="card card-body">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCollapse;