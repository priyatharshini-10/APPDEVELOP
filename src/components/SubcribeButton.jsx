// import React, { useState } from 'react';
// import '../utils';

// const SubscribeButton = () => {
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const handleButtonClick = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   return (
//     <div className="container">
//       <button 
//         className={`big-btn ${isFormVisible ? 'remove-big-btn' : ''}`} 
//         onClick={handleButtonClick}
//       >
//         Subscribe
//       </button>
//       <div className={`form-group ${isFormVisible ? 'show-form-group' : ''}`}>
//         <input type="email" placeholder="Type your email..." />
//         <button className="small-btn">Subscribe</button>
//       </div>
//     </div>
//   );
// };

// export default SubscribeButton;





import React, { useState } from 'react';
import './utils';

const SubscribeButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="container">
      <button 
        className={`big-btn ${isFormVisible ? 'remove-big-btn' : ''}`} 
        onClick={handleButtonClick}
      >
        Subscribe
      </button>
      <div className={`form-group ${isFormVisible ? 'show-form-group' : ''}`}>
        <input type="email" placeholder="Type your email..." />
        <button className="small-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribeButton;
