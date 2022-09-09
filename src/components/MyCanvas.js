import React, {useRef, useEffect} from 'react'

export default function MyCanvas() {
  const canvas = useRef(null)
  useEffect(() => {
    let can = canvas.current
     if(can.getContext){
      let ctx = can.getContext('2d')
      ctx.strokeStyle = 'black'
      ctx.fillStyle = 'red'
      ctx.strokeRect(10,10,50,50)
      ctx.fillRect(10,10,50,50)

      ctx.fillStyle = 'rgba(0,255,0,.5)'
      ctx.fillRect(40,40,50,50)

      // 线段1
      ctx.moveTo(100,100)
      ctx.lineTo(200,100)
      ctx.lineWidth = 10
      ctx.strokeStyle = 'pink'
      ctx.stroke()
      // 线段2
      ctx.beginPath()
      ctx.lineWidth = 20
      ctx.strokeStyle = 'yellow'
      ctx.moveTo(400,100.5)
      ctx.lineTo(500,100.5)
      ctx.stroke()
      // 折线
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.strokeStyle = 'cyan'
      ctx.moveTo(50, 200)
      ctx.lineTo(100, 50)
      ctx.lineTo(200, 200)
      ctx.lineTo(250, 50)
    
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(400,400)
      ctx.lineTo(400,600)
      ctx.lineTo(600,600)
      ctx.lineTo(600,400)
      ctx.lineTo(400,400)
      ctx.strokeStyle = 'pink'
      ctx.strokeRect(400,400, 200,200)
      ctx.fillRect(400,400, 200,200)
      ctx.stroke()
     }
     
  }, [ ]);
  return (
    <div>
      <canvas width='800' height='800' ref={canvas}></canvas>
    </div>
  )
}
