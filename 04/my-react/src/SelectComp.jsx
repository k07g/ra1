import { useRef } from "react";
import { BannerMember, BannerNew, BannerEnv } from "./Banners";
import "./Banners.css";

export default function SelectComp() {
  // 乱数から表示するコンポーネントを決定
  const components = [BannerMember, BannerNew, BannerEnv];
  const randomIndex = useRef(Math.floor(Math.random() * components.length));
  const SelectedComponent = components[randomIndex.current];

  return (
    <div className="banner">
      <SelectedComponent />
    </div>
  );
}
