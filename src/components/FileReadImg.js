import React, { useRef, useState, useEffect } from 'react'

export default function FileReadImg () {
  let [imgSrc, setSrc] = useState('')
  let [text, setText] = useState('')
  useEffect(() => {
  }, []);
  const output = useRef(null)
  // const output2 = useRef(null)
  const img = useRef(null)
  const input = useRef(null)
  const handleChanges = (e) => {
    let files = e.target.files,
      type = 'default',
      reader = new FileReader();
    console.log(output.current)

    if (/image/.test(files[0].type)) {
      reader.readAsDataURL(files[0]);
      type = 'image';
    } else {
      reader.readAsText(files[0])
      type = 'text'
    }
    reader.onerror = () => {
      output.innerHTML = 'error' + reader.error.code
    }
    reader.onprogress = (e) => {
      console.log(e)
      console.log(e.loaded)
      console.log(e.total)
      // if (e.lengthComputable) {
      //   progress.innerHTML = `${e.loaded}/${e.total}`
      // }
    }

    reader.onload = () => {
      
      debugger
      console.log(reader.result)
      switch (type) {
        case 'image':
          console.log(reader.result)
          setSrc(reader.result)
          break;
        case 'text':
          setText(reader.result)
        default:
          break;
      }
    }
    console.log(e)
  }
  return (
    <div>
      <input type='file' ref={input} onChange={handleChanges} />
      <div ref={output}>
        <img ref={img} alt='imgs' src={imgSrc} />
      </div>
      <div  >{text}</div>
    </div>
  )
}
