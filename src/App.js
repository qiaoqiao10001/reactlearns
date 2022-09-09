import React, { useState, useEffect } from 'react';
// import A from './components/A';
// import Age from './components/Age';
// import Coffee from './components/coffee';
// import Counter from './components/CounterHook'
// import TapNum from './components/TapNum';
// import Counter2 from './components/Counter2'
// import Count3 from './components/Count3';
// import Example from './components/Example';
// import TextInput from './testsHooks/TextInput'
import vConsole from 'vconsole'
import FileReadImg from './components/FileReadImg';
import MyCanvas from './components/MyCanvas';
// let Hammer = require('hammerjs')
function App () {
  new vConsole();
  let [show, setshow] = useState(true);
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setshow(show = !show)
  }
  const handleShow = () => {
    setTimeout(console.log, 2000, count)
    setTimeout(() => {
      console.log(count)
    }, 2000)
  }
  useEffect(() => {
    // const app = document.querySelector('.main');
    // const hammertime = new Hammer(app);
    // hammertime.on('swipeleft', function (ev) {
    //   console.log(ev);
    // });
    const app = document.querySelector('.main');
    app.addEventListener('touchstart', (e) => {
      // is not near edge of view, exit
      // if (e.pageX > 10 && e.pageX < window.innerWidth - 10) return;

      // prevent swipe to navigate back gesture
      e.preventDefault();



    });

  });

  return (

    <div className="main" style={{ width: '100vw', height: '100vh' }}>
      {count}

      {/* <Counter initialState={100} />
      <Coffee /> */}
      {/* {show && <TapNum />} */}
      <button onClick={handleClick}>加载/隐藏</button>
      {/* {show && <A />} */}
      {/* {show && <Age />} */}
      {/* <Counter2 /> */}
      {/* <Count3 /> */}
      {/* <Example />
      <TextInput /> */}
      <FileReadImg />
      <button onClick={() => { setCount(count + 1) }}>add1</button>
      <button onClick={() => { handleShow() }}>showRes</button>
      <MyCanvas/>
    </div>

  );
}

export default App;
