const baseUrl = "https://hecheng-cherrymaho-fl-wdl.oss-cn-shenzhen.aliyuncs.com/"
let defaultStates={
  datas:null,
  datasIds:null,
  degreeCreateMethod:[
    {
      top1:6,
      index1:6,
      top2:10,
      index2:4,
      index3:3
    },
    {
      top1:10,
      index1:6,
      top2:20,
      index2:4,
      index3:3
    },
    {
      top1:12,
      index1:8,
      top2:30,
      index2:6,
      index3:5
    }
  ],
  yida:{
    id:"yida",
    score:-10,
    texture:baseUrl + "images/奇怪的东西/橘子.png",
    size:80,
    collisionMusic:baseUrl + "audio/一打一打.mp3",
    dropItems:[]
  },
  Engine:null,
  Render:null,
  World:null,
  Bodies:null,
  Body:null,
  Events:null,
  MouseConstraint:null,
  Constraint:null,
  Composites:null,
  Composite:null,
  engine:null,
  render:null,
  mouseConstraint:null,
  newCircle:null,
  canvas:document.createElement('canvas'),
  count:0,
  windowWidth:window.innerWidth,
  windowHeight:window.innerHeight,
  gameState:1,
  endHeight:240,
  warnLine:null,
  groupBall:0x0002,
  wallThickness:50,
  currentScore:0,
  collisionStartEvent:null,
  bgm:new Audio(baseUrl + 'audio/DEEP SQUAD - Good Love Your Love.mp3'),
  firework:[],
  maxPositionEle:null,
  isWarned:false,
  degree:1,
  gravity:1,
  bridge:null,
  seesaw:null,
  mode:'normal',
  leftWall:null,
  rightWall:null,
  moveEvent:null,
  enddragEvent:null
}

let copy = Object.create(defaultStates)
copy.defaultStates=defaultStates

export default copy
