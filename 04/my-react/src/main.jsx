import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from './App.jsx'
import AppClass from "./AppClass.jsx";
import MyHello from "./MyHello.jsx";
import EventBasic from "./EventBasic.jsx";
import StateBasic from "./StateBasic.jsx";
import ForList from "./ForList.jsx";
import books from "./books";
import ForNest from "./ForNest.jsx";
import ForFilter from "./ForFilter.jsx";
import ForSort from "./ForSort.jsx";
import SelectComp from "./SelectComp.jsx";
import SelectStyle from "./SelectStyle.jsx";
import StyledPanel from "./StyledPanel.jsx";
import TitledPanel from "./TitledPanel.jsx";
import ListTemplate from "./ListTemplate.jsx";
import StateParent from "./StateParent.jsx";
import EventMouse from "./EventMouse.jsx";
import EventCompare from "./EventCompare.jsx";
import EventError from "./EventError.jsx";
import EventObj from "./EventObj.jsx";
import EventPoint from "./EventPoint.jsx";
import EventKey from "./EventKey.jsx";
import EventArgs from "./EventArgs.jsx";
import EventArgs2 from "./EventArgs2.jsx";
import EventPropagation from "./EventPropagation.jsx";
import EventOnce from "./EventOnce.jsx";
import EventPassive from "./EventPassive.jsx";
import StateTodo from "./StateTodo.jsx";
import FormBasic from "./FormBasic.jsx";
import FormYup from "./FormYup.jsx";

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/
/*
const root = createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <p>現在時刻: {(new Date()).toLocaleString()}</p>
  );
}, 1000);
*/
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppClass />
    <MyHello myName="鈴木" />
    <EventBasic type="time" />
    <StateBasic init={0} />
    <ForList src={books} />
    <ForNest src={books} />
    <ForFilter src={books} />
    <ForSort src={books} />
    <SelectComp />
    <SelectStyle mode="light" />
    <StyledPanel>
      <p>メンバー募集中！</p>
      <p>ようこそ、WINGSプロジェクトへ！！</p>
    </StyledPanel>
    <TitledPanel>
      <p key="title">メンバー募集中！</p>
      <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
    </TitledPanel>
    <ListTemplate
      src={books}
      render={(elem) => (
        <>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      )}
    />
    <StateParent />
    <EventMouse
      alt="ロゴ画像"
      defaultSrc="https://www.web-deli.com/image/linkbanner_l.gif"
      afterSrc="https://www.web-deli.com/image/home_chara.gif"
    />
    <EventCompare />
    <EventError src="/image/wings.jpg" alt="サンプル画像" />
    <EventObj />
    <EventPoint />
    <EventKey />
    <EventArgs />
    <EventArgs2 />
    <EventPropagation />
    <EventOnce />
    <EventPassive />
    <StateTodo />
    <FormBasic />
    <FormYup />
  </StrictMode>,
);
