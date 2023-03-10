import styled from "styled-components";
import "./App.css";
import { useRef, useState } from "react";

const Board = styled.section`
  background-color: white;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Circle = styled.div`
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  left: ${({ x }) => x + "px"};
  top: ${({ y }) => y + "px"};
  position: absolute;
`;

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [x, setX] = useState(windowSize.current[0] / 2);
  const [y, setY] = useState(windowSize.current[1] / 2);

  const increment = (x) => {
    return x + 15;
  };
  const decrement = (x) => {
    return x - 15;
  };

  return (
    <div className="mainContainer">
      <div className="mainItemx1" onClick={() => setX(decrement(x))}></div>
      <div className="mainItemx2">
        <div className="mainItemy1" onClick={() => setY(decrement(y))}></div>
        <div className="mainItemy2">
          <Board windowSize={windowSize}>
            <Circle x={x} y={y}></Circle>
          </Board>
        </div>
        <div className="mainItemy3" onClick={() => setY(increment(y))}></div>
      </div>
      <div className="mainItemx3" onClick={() => setX(increment(x))}></div>
    </div>
  );
}

export default App;
