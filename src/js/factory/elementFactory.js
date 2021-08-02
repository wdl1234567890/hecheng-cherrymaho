import State from '../state/state.js'

export default class elementFactory {
  static createWall() {
  
    State.World.add(State.engine.world, [
      State.Bodies.rectangle(State.windowWidth/2, State.wallThickness/2, State.windowWidth, State.wallThickness, {
        isStatic: true,
        render:{
          fillStyle:'pink',
          opacity:0.5
        }
      }),
      State.Bodies.rectangle(State.windowWidth/2, State.windowHeight-State.wallThickness/2, State.windowWidth, State.wallThickness, {
        isStatic: true,
        render:{
          fillStyle:'pink',
          opacity:0.5
        }
      }),
      State.leftWall=State.Bodies.rectangle(State.wallThickness/2, State.windowHeight/2, State.wallThickness, State.windowHeight, {
        isStatic: true,
        render:{
          fillStyle:'pink',
          opacity:0.5
        }
      }),
      State.rightWall=State.Bodies.rectangle(State.windowWidth-State.wallThickness/2, State.windowHeight/2, State.wallThickness, State.windowHeight, {
        isStatic: true,
        render:{
          fillStyle:'pink',
          opacity:0.5
        }
      })
    ])
  }
  static createElement(id = 'A', isStatic = true, isNew = true, x = State.windowWidth / 2, y = 0){
    
    let element = null
    if(isNew && State.mode=='yidayida' && State.count>3){
      let rand = Math.round(Math.random()*20)
      if(rand>13)element=State.yida
      else element = State.datas[id]
    }else{
      element = State.datas[id]
    }

    if(isNew){
      if(State.mode=='sky')y=State.windowHeight-State.wallThickness-element.size-10
      else y=State.wallThickness+element.size+10
    }

    if(x-State.wallThickness < element.size)x=element.size+State.wallThickness
    else if(State.windowWidth-x-State.wallThickness < element.size)x=State.windowWidth-State.wallThickness-element.size
    if(State.windowHeight-y-State.wallThickness<element.size)y=State.windowHeight-element.size-State.wallThickness
    else if(y-State.wallThickness<element.size)y=element.size+State.wallThickness
    let newItem= State.Bodies.circle(x, y, element.size, {
      elId:element.id,
      score:element.score,
      restitution: 0,
      friction: 0.3,
      frictionAir: 0,
      frictionStatic: 0.5,
      density:0.01,
      isStatic: isStatic,
      render: {
        sprite: {
          texture: element.texture
        }
      }
    })

    if(isNew){
      newItem.collisionFilter.group=State.groupBall
      State.newCircle = newItem
      State.count++
      if(State.mode=='sky')State.Body.setVelocity(newItem, {x:0,y:-25})
      else State.Body.setVelocity(newItem, {x:0,y:25})
    }
    
    State.World.add(State.engine.world, [newItem])
    return newItem
  }


  static createWarnLine(){
    let height=0
    if(State.mode=='sky')height=State.windowHeight-State.endHeight+2
    else height=State.endHeight-2
    State.warnLine=State.Bodies.rectangle(State.windowWidth/2, height, State.windowWidth, 2, {
      isStatic: true,
      render:{
        sprite:{
          texture:State.baseUrl + 'images/warn-line.png'
        }
      },
      collisionFilter: {
        group:-1,
        mask: 0x0010
      }
    })

    State.World.add(State.engine.world,State.warnLine)

  }
  static cancelWarnLine(){
    if(State.warnLine!=null)
    State.World.remove(State.engine.world,State.warnLine)
    State.warnLine=null
  }

  static createBottomBridge(){
    let group = State.Body.nextGroup(true);
    let bridge = State.Composites.stack((State.windowWidth-800)/2, State.windowHeight-280, 9, 1, 10, 10, function(x, y) {
      return State.Bodies.rectangle(x, y, 80, 120, {
        chamfer: 15,
        collisionFilter: {
            group: group
        }
      })
    })
    State.bridge = bridge
    State.Composites.chain(bridge, 0.4, -0.3, -0.4, -0.3, {stiffness: 1,damping:1});
    State.Composites.chain(bridge, 0.4, 0, -0.4, 0, {stiffness: 1,damping:1});
    State.Composites.chain(bridge, 0.4, 0.3, -0.4, 0.3, {stiffness: 1,damping:1})

    let nailLeft = State.Constraint.create({
      bodyA: State.leftWall,
      pointA: {x: 0, y: State.windowHeight/2-320},
      bodyB: bridge.bodies[0],
      pointB: {x: -15, y: 0},
      stiffness:1,
      damping:1
    });
 
    let nailRight = State.Constraint.create({
      bodyA: bridge.bodies[bridge.bodies.length - 1],
      pointA: {x: 15, y: 0},
      bodyB: State.rightWall,
      pointB: {x: 0, y: State.windowHeight/2-320},
      stiffness:1,
      damping:1
    })

    State.World.add(State.engine.world,[bridge,nailLeft,nailRight])
  }

  static createSeesaw(){
    let rectA = State.Bodies.rectangle(State.windowWidth / 2, State.windowHeight - 125 - State.wallThickness, 40, 250, {
        isStatic: true,
        chamfer: 15,
        render: {
            fillStyle: "#B22222"
        },
        collisionFilter: {
            group: -1
        }
    })


    let rectB = State.Bodies.rectangle(State.windowWidth / 2, State.windowHeight - 250 - State.wallThickness, State.windowWidth-20-2*State.wallThickness, 50, {
        chamfer: 15,
        render: {
            fillStyle: "#A0522D"
        },
        collisionFilter: {
            group: -1
        }
    })

    State.seesaw=rectB

    let rotate = State.Constraint.create({
        bodyA: rectA,
        pointA: {x: 0, y: -75},
        bodyB: rectB,
        length: 0,
        stiffness: 0.9
    })

    State.World.add(State.engine.world,[rectA,rectB,rotate])

  }
}