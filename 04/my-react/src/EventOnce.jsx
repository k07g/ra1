import { useState } from "react";

export default function EventOnce() {
  // クリック済みかどうかを管理するためのフラグ
  const [clicked, setClicked] = useState(false);
  // 今日の運勢(点数)
  const [result, setResult] = useState("-");
  const handleClick = () => {
    // 未クリックの場合のみ運勢を算出
    if (!clicked) {
      setResult(Math.floor(Math.random() * 100 + 1));
      // フラグを反転
      setClicked(true);
    }
  };

  return (
    <>
      <button onClick={handleClick}>結果表示</button>
      <p>今日の運勢は{result}点です。</p>
    </>
  );
}
