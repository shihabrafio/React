// import React from "react";

// class -------------------------------------->
// class ClickCounter extends React.Component{
//     state = {
//         count: 0,
//     }
//     increment=()=>{
//         this.setState((prevState) => ({
//             count: prevState.count+1
//         }));
//     }
//     render(){
//         const {count} = this.state;
//         return(
//             <div>
//                 <button type="button" onClick={this.increment}>Clicked {count} times</button>
//             </div>
//         )
//     }
// }

// export default ClickCounter;

// function ----------------------------->
// import React, { useState } from "react";

// function ClickCounter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <button type="button" onClick={increment}>Clicked {count} times</button>
//     </div>
//   );
// }

// export default ClickCounter;


/////Using HOC

import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { count,increment } = props;
  return (
    <div>
      <button type="button" onClick={increment}>
        Clicked {count} times
      </button>
    </div>
  );
};
export default withCounter(ClickCounter);