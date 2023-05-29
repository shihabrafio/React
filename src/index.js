import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");
//-------------------------->
// function Clock() {
//     return (
//     <h1 className="heading">
//       <span className="text">Hello {new Date().toLocaleTimeString()}</span>
//     </h1>
//   );
// }
// // ReactDOM.createRoot(root).render(Clock());
// ReactDOM.createRoot(root).render(<Clock />);

// giving attributes ------------>

// function Clock({locale}) {
//   return (
//     <h1 className="heading">
//       <span className="text">
//         Hello {new Date().toLocaleTimeString(locale)}
//       </span>
//     </h1>
//   );
// }
// ReactDOM.createRoot(root).render(<Clock locale="bn-BD"/>);

// Using Class ---------------->

// class Clock extends React.Component {
//   render() {
//     return (
//       <h1 className="heading">
//         <span className="text">Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
//       </h1>
//     );
//   }
// }
// ReactDOM.createRoot(root).render(<Clock locale="bn-BD"/>);




// we can make children element using this ------------->ummmmah is the children element 

class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text">Hello {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}
ReactDOM.createRoot(root).render(<Clock locale="bn-BD">ummmmmmmah</Clock>);