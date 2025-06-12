// import { useState } from "react";

// function ScoreKeeper(){
//     const [scores, setScores] = useState({p1Score: 0, p2Score: 0, p3Score: 0, p4Score: 0})
//     function increaseP1Score(){
//         setScores(oldScores => {
//             return {...oldScores, p1Score: oldScores.p1Score + 1}
//         })
//     }
//     function increaseP2Score(){
//         setScores(oldScores => {
//             return {...oldScores, p2Score: oldScores.p2Score + 1}
//         })
//     }

//     function increaseP3Score(){
//         setScores(oldScores => {
//             return {...oldScores, p3Score: oldScores.p3Score + 1}
//         })
//     }

//     function increaseP4Score(){
//         setScores(oldScores => {
//             return {...oldScores, p4Score: oldScores.p4Score + 1}
//         })
//     }
//     return(
//         <div>
//             <p>Player 1: {scores.p1Score}</p>
//             <p>Player 2: {scores.p2Score}</p>
//             <p>Player 3: {scores.p3Score}</p>
//             <p>Player 4: {scores.p4Score}</p>
//             <button onClick={increaseP1Score}>+1 Player 1</button>
//             <button onClick={increaseP2Score}>+1 Player 2</button>
//             <button onClick={increaseP3Score}>+1 Player 2</button>
//             <button onClick={increaseP4Score}>+1 Player 2</button>
//         </div>
//     )
// }

// export default ScoreKeeper

import { useState } from "react";
export default function ScoreKeeper({ numPlayers = 4, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  //   const incrementScore = (idx) => {
  //     setScores((prevScores) => {
  //       const copy = [...prevScores];
  //       copy[idx] += 1;
  //       return copy;
  //     });
  //   };

  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player{idx + 1}: {score}
              <button onClick={() => incrementScore(idx)}>+1</button>
              {score >= target && "WINNER!"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
