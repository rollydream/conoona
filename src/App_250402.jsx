import { useState } from "react"
import Box from './component_250402/Box.jsx'
import './component_250402/common.css'
// 1. 박스 2개 만들기
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면 : 초록, 지면 : 빨강 , 비기면 : 검정)
// 가위 https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg
// 바위 https://thumb.silhouette-ac.com/t/69/69ffced83032519ca680dc3058b9ca26_t.jpeg
// 보 https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_t.jpeg

const choice = {
  rock: {
    name: "Rock",
    img: "https://thumb.silhouette-ac.com/t/69/69ffced83032519ca680dc3058b9ca26_t.jpeg",
  },
  scissors: {
    name: "Scissors",
    img: "https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg",
  },
  paper: {
    name: "Paper",
    img: "https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_t.jpeg",
  },
}
function App_250402() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const play= (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
  };

  const judgement = (user, computer) =>{
    
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";

  }
  const randomChoice=()=>{
    // 객체의 키 값만 뽑아서 배열로 만들어주는 함수
    let itemArray = Object.keys(choice)
    // Math.floor : 소수 점 아래 버림
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]

    return choice[final]
  }

  return (
    <>
      <div className="wrapPlay">
        <div className={`boxCnt ${result}`}>
          <Box title="You" item={userSelect} result={result}/>
          <Box title="Computer" item={computerSelect} result={result}/>
        </div>
        <div className="boxBtn">
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
        </div>
      </div>
    </>
  )
}

export default App_250402
