import { useState } from "react";

export default function EventError({ src, alt }) {
  const [path, setPath] = useState(src);
  // 画像を読み込めない場合はエラー画像を表示
  const handleError = () => setPath("/image/noimage.jpg");
  return <img src={path} alt={alt} onError={handleError} />;
}
