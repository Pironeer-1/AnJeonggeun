import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Calculator from './chapter_12/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 11장
// import SignUp from './chapter_11/SignUp';

// ReactDOM.render(
//   <React.StrictMode>
//     <SignUp/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// 10장
// import AttendanceBook from './chapter_10/AttendanceBook';

// ReactDOM.render(
//   <React.StrictMode>
//     <AttendanceBook/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// 9장
// import LandingPage from './chapter_09/LandingPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// 8장
// import ConfirmButton from './chapter_08/ConfirmButton';

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmButton/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// 7장
// import Accommodate from './chapter_07/Accommodate';

// ReactDOM.render(
//   <React.StrictMode>
//     <Accommodate/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// 6장
// import NotificationList from './chapter_06/NotificationList';

// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// 5장
// import CommentList from './chapter_05/CommentList';

// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// 4장
// import Clock from './chapter_04/Clock'

// setInterval(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// }, 1000);