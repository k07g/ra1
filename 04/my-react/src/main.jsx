import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import AppClass from './AppClass.jsx'
import MyHello from './MyHello.jsx'
import EventBasic from './EventBasic.jsx'
import StateBasic from './StateBasic.jsx'

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
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppClass />
    <MyHello myName="鈴木" />
    <EventBasic type="time" />
    <StateBasic init={0} />
  </StrictMode>
)