import React, { useState }  from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function MyCollapse({title, content, id}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='my-collapse'>
      <div className='button'>
        <button 
        className="btn" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target={`#${id}`} 
        aria-expanded={isOpen} 
        aria-controls={id}
        onClick={handleToggle}
        >
          {title}
        </button>
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>

      <div className="collapse" id={id}>
        <div className="card card-body">
          {content}
        </div>
      </div>
    </div>
  );
}

export default MyCollapse;