import { useState } from 'react';

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <div className="flex flex-col items-center gap-2">
//         <h1 className="text-white text-2xl">{this.state.count}</h1>
//         <div className="text-white text-2xl font-bold bg-blue-500 p-4 rounded-full cursor-pointer" onClick={() => this.setState({ count: this.state.count + 1 })}>+</div>
//       </div>
//     );
//   }
// }

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-white text-2xl">{count}</h1>
      <div className="text-white text-2xl font-bold bg-blue-500 p-4 rounded-full cursor-pointer" onClick={() => setCount(count + 1)}>
        +
      </div>
    </div>
  );
};

export default Counter;
