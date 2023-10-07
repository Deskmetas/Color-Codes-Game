import React, { useState, useEffect } from "react";
import RefreshButton from "./refresh";
import "./App.css"

function getRandomColor() {
  // Math.random() を使ってランダムな16進数を生成
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // 必要な長さにパディングして "#" を追加
  return "#" + "0".repeat(6 - randomColor.length) + randomColor;
}



const ColorCodes = () => {
  const [colors, setColors] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [correctColor, setCorrectColor] = useState(""); 

  useEffect(() => {
    // 3つのランダムなカラーコードを生成
    const randomColors = [getRandomColor(), getRandomColor(), getRandomColor()];
    setColors(randomColors);

    // 正解のカラーボックスのインデックスをランダムに選択
    const randomCorrectIndex = Math.floor(Math.random() * 3);
    setCorrectIndex(randomCorrectIndex);

    setCorrectColor(randomColors[randomCorrectIndex]);
  }, []);



  const handleButtonClick = (index) => {
    if (index === correctIndex) {
      alert("正解！");
    } else {
      alert("不正解！");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <div class= "title">
        Color Codes Game
        <div class="subtitle">Creation date 10/7</div>
        </div>
      <center class="box1">
        <h2>{correctColor}</h2>
        <h2>what's color is colect?</h2>
        <div class="field">
        {/* 正解のカラーボックスの位置をランダムにする */}
        {colors.map((color, index) => (
          
            <button
              key={index}
              style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
              }}
              onClick={() => handleButtonClick(index)}
            ></button>
          
        ))}
        </div>
      </center>
      <center class="box2">
        <RefreshButton/>
      </center>
    </div>
  );
};

export default ColorCodes;



