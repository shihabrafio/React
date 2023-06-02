// import React from "react";

// // class ----------------------------------------->
// class HoverCounter extends React.Component{
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
//                 <h1 onMouseOver={this.increment}>Clicked {count} times</h1>
//             </div>
//         )
//     }
// }

// export default HoverCounter;






// function -------------------------------------->

// import React, { useState } from "react";

// function HoverCounter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <h1 onMouseOver={increment}>Clicked {count} times</h1>
//     </div>
//   );
// }

// export default HoverCounter;







///Using HOC----------------------->

// import withCounter from "./HOC/withCounter";

// const HoverCounter = (props) => {
//   const { count,increment } = props;
//   return (
//       <div>
//         <h1 onMouseOver={increment}>Clicked {count} times</h1>
//       </div>
//   );
// };
// export default withCounter(HoverCounter);




// import React from "react";

// // RenderProps  class----------------------------------------->
// class HoverCounter extends React.Component{
//     render(){
//         const {count,increment} =this.props;
//         return(
//             <div>
//                 <h1 onMouseOver={increment}>Clicked {count} times</h1>
//             </div>
//         )
//     }
// }

// export default HoverCounter;




// RenderProps Function----------------------------------------->


import React from "react";

const HoverCounter = ({ count, increment }) => {
  return (
    <div>
      <h1 onMouseOver={increment}>Clicked {count} times</h1>
    </div>
  );
};

export default HoverCounter;
