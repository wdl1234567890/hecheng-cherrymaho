import State from '../state/state.js'
let Matter = require('../libs/matter.js')
export default class physics {
  static init() {
    State.Engine = Matter.Engine
    State.Render = Matter.Render
    State.World = Matter.World
    State.Bodies = Matter.Bodies
    State.Composites=Matter.Composites
    State.Composite=Matter.Composite
    State.Body = Matter.Body
    State.Events = Matter.Events
    State.MouseConstraint = Matter.MouseConstraint
    State.Constraint = Matter.Constraint
    State.engine = State.Engine.create()

    State.render = State.Render.create({
      element: document.body,
      engine: State.engine,
      options: {
        width: State.windowWidth,
        height: State.windowHeight,
        background: State.baseUrl + 'images/bg.jpg',
        wireframes: false,
        showAngleIndicator: false,
        showMousePosition: false,
        showBroadphase: false,
        showBounds: false
      }
    })
    State.Engine.run(State.engine)
    State.Render.run(State.render)
    State.Body.nextGroup()
    State.Body.nextGroup()
    State.mouseConstraint = State.MouseConstraint.create(State.engine, {
      collisionFilter: {
        group: State.groupBall,
        mask:0x0010
      }
    })
    State.World.add(State.engine.world, State.mouseConstraint)
  }

}