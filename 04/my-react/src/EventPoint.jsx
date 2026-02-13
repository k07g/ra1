import { useState } from "react";
import "./EventPoint.css";

export default function EventPoint() {
  const [screen, setScreen] = useState({ x: 0, y: 0 });
  const [page, setPage] = useState({ x: 0, y: 0 });
  const [client, setClient] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // ポインター位置をそれぞれの基準に基づいて表示
  const handleMousemove = (e) => {
    setScreen({ x: e.screenX, y: e.screenY });
    setPage({ x: e.pageX, y: e.pageY });
    setClient({ x: e.clientX, y: e.clientY });
    setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div id="main" onMouseMove={handleMousemove}>
      screen: {screen.x}/{screen.y}
      <br />
      page: {page.x}/{page.y}
      <br />
      client: {client.x}/{client.y}
      <br />
      offset: {offset.x}/{offset.y}
    </div>
  );
}
