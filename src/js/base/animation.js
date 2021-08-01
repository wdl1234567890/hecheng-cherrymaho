import State from '../state/state.js'

export default class Animation{
  static collision(x,y,elId) {

    if(elId==State.yida.id)return

    let xForce = Math.round(Math.random()*10)+5
    let yForce = Math.round(Math.random()*10)+5
    let direction = Math.round(Math.random() * 20)
    xForce = direction > 10 ? xForce : -xForce
    yForce = direction > 10 ? yForce : -yForce

    let dropItems = State.datas[elId].dropItems
    let dropItem = dropItems[Math.round(Math.random() * (dropItems.length-1))] 
    
    let peng = State.Bodies.circle(x, y, dropItem.size, {
      restitution: 0.1,
      friction: 0.5,
      frictionAir: 0,
      frictionStatic: 0.5,
      mass: 0.5,
      isStatic: false,
      collisionFilter:{
        group:-1,
        mask:0x0010
      },
      render: {
        sprite: {
          texture: dropItem.texture
        }
      }
    })
    State.World.add(State.engine.world, peng)
  }
  static broken(x,y){
    let count=0
    let countTop = 1
    let item=null
    let rotate=Math.round(Math.random()*300)+20
    let rotate1 = Math.round(Math.random()*300) + 20
    let stop = setInterval(()=>{
      count += 0.1
      if (item != null) State.World.remove(State.engine.world, item)
      if (count > countTop){
        clearInterval(stop)
        return
      }
      item=State.Bodies.circle(x, y, 10, {
        isStatic: true,
        render: {
          opacity: count,
          sprite: {
            texture: './images/动画/pong.png',
            xScale: count,
            yScale: count
          },
          collisionFilter: {
            group:-2,
            mask: 0x0010
          }
        }
      })
      State.Body.rotate(item, rotate)
      State.World.add(State.engine.world, [item])
    },50)
  }

  static upgradeBroken(x,y,yida=false){
    let count=0
    let countTop = 1
    let item=null
    let stop = setInterval(()=>{
      count += 0.1
      if (item != null) State.World.remove(State.engine.world, item)
      if (count > countTop){
        clearInterval(stop)
        return
      }
      let texture="./images/动画/爱心.png"
      if(yida)texture="./images/动画/心碎.png"
      item=State.Bodies.circle(x, y, 10, {
        isStatic: true,
        render: {
          opacity: 1-count,
          sprite: {
            texture: texture,
            xScale: count,
            yScale: count
          }
        },
        collisionFilter: {
          group:-2,
          mask: 0x0010
        }

      })
      State.World.add(State.engine.world, item)
    },50)
  }

  static firework(){
    State.firework.push(setInterval(()=>{
      let count=0
      let countTop = 1
      let item=null
      let item1=null
      let item2=null
      let item3=null
      let x1=Math.round(Math.random()*State.windowWidth)
      let y1=Math.round(Math.random()*State.windowHeight)
      let x2=Math.round(Math.random()*State.windowWidth)
      let y2=Math.round(Math.random()*State.windowHeight)
      let x3=Math.round(Math.random()*State.windowWidth)
      let y3=Math.round(Math.random()*State.windowHeight)

      let stop1 = setInterval(()=>{
        count += 0.1
        if (item1 != null) State.World.remove(State.engine.world, item1)
        if (count > countTop){
          clearInterval(stop1)
          return
        }
        item1=State.Bodies.circle(x1, y1, 10, {
          isStatic: true,
          render: {
            opacity: 1-count,
            sprite: {
              texture: './images/动画/烟花1.png',
              xScale: count,
              yScale: count
            }
          },
          collisionFilter: {
            group:-2,
            mask: 0x0010
          }

        })
        State.World.add(State.engine.world, item1)
      },150)
      let stop2 = setInterval(()=>{
        count += 0.1
        if (item2 != null) State.World.remove(State.engine.world, item2)
        if (count > countTop){
          clearInterval(stop2)
          return
        }
        item2=State.Bodies.circle(x2, y2, 10, {
          isStatic: true,
          render: {
            opacity: 1-count,
            sprite: {
              texture: './images/动画/烟花2.png',
              xScale: count,
              yScale: count
            }
          },
          collisionFilter: {
            group:-2,
            mask: 0x0010
          }

        })
        State.World.add(State.engine.world, item2)
      },150)
      let stop3 = setInterval(()=>{
        count += 0.1
        if (item3 != null) State.World.remove(State.engine.world, item3)
        if (count > countTop){
          clearInterval(stop3)
          return
        }
        item3=State.Bodies.circle(x3, y3, 10, {
          isStatic: true,
          render: {
            opacity: 1-count,
            sprite: {
              texture: './images/动画/烟花3.png',
              xScale: count,
              yScale: count
            }
          },
          collisionFilter: {
            group:-2,
            mask: 0x0010
          }

        })
        State.World.add(State.engine.world, item3)
      },150)
    },500))
  }
}
