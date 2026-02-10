import { useState } from "react";

export default function EventMouse({ defaultSrc, afterSrc, alt }) {
  // 現在表示している画像
  const [current, setCurrent] = useState(defaultSrc);
  // mouseover/mouseleaveイベントハンドラーを準備
  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(defaultSrc);
  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
