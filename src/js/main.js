import Physics from './base/physics.js'
import State from './state/state.js'
import Factory from './factory/elementFactory.js'
import Animatin from './base/animation.js'
import Music from './base/music.js'
import Utils from './base/utils.js'

export default class Main {
  constructor() {
    
  }
  init() {
    State.datas=Utils.loadDatas()
    State.datasIds=Object.keys(State.datas)
    if(State.World==null)Physics.init()
    State.engine.world.gravity.y = State.gravity
    Factory.createWall()
    if(State.mode=='bengc')Factory.createBottomBridge()
    if(State.mode=='seesaw')Factory.createSeesaw()
    Factory.createElement()
  	setTimeout(()=>{
  		this.startEventListener()
  	},400)
  }
  
  startEventListener() {
    let diff
    let pairs
    let pair
    let upgradeEle
    let x
    let y
    let pengElId
    let that=this
    let isBodyBEqueryNewCircle
    let isBodyAEqueryNewCircle
    State.collisionStartEvent=function(event) {
      pairs = event.pairs
      for (pair of pairs) {
        isBodyBEqueryNewCircle = pair.bodyB == State.newCircle
        isBodyAEqueryNewCircle = pair.bodyA == State.newCircle

        if(State.mode=="bengc"&&pair.bodyB==State.newCircle && pair.bodyA.label == "Rectangle Body"){
          State.bgm.pause()
          State.bgm.src= State.baseUrl + "audio/蹦床.mp3"
          State.bgm.play()
        }else if((State.mode=="normal"||State.mode=="sky"|| State.mode=="yidayida")&&pair.bodyB==State.newCircle && pair.bodyA.label == "Rectangle Body"){
          State.bgm.pause()
          State.bgm.src=State.baseUrl + "audio/木板.mp3"
          State.bgm.play()
        }else if(State.mode=="seesaw"&&pair.bodyB==State.newCircle && pair.bodyA.label == "Rectangle Body"){
          State.bgm.pause()
          State.bgm.src=State.baseUrl + "audio/跷跷板.mp3"
          State.bgm.play()
        }

        if (pair.bodyA.label == "Circle Body"&&pair.bodyB.label == "Circle Body") {
          if((pair.bodyA==State.newCircle || pair.bodyB==State.newCircle)&&State.newCircle.isStatic)continue
          if(State.mode=='sky'){
            that.touchBottomLine(pair.bodyA)
            that.touchBottomLine(pair.bodyB)
          }else{
            that.touchTopLine(pair.bodyA)
            that.touchTopLine(pair.bodyB)
          }
          if(State.gameState==0)return;
        }
        if (pair.bodyA.label == 'Circle Body' && pair.bodyB.label == 'Circle Body' && pair.bodyA.elId && pair.bodyB.elId) {
          if((pair.bodyA == State.newCircle || pair.bodyB == State.newCircle)&&State.newCircle.isStatic)continue
          diff = pair.bodyB.elId.charCodeAt() - pair.bodyA.elId.charCodeAt()

          if(pair.bodyA.elId==State.yida.id || pair.bodyB.elId==State.yida.id){

            if(pair.bodyA.elId==State.yida.id && pair.bodyB.elId==State.yida.id)continue
            pengElId = State.yida.id
            upgradeEle = []
            let heianEle=pair.bodyA.elId==State.yida.id?pair.bodyB:pair.bodyA
            let heianEleId=heianEle.elId
            let x=heianEle.position.x
            let y=heianEle.position.y
            if(heianEleId !='a'&&heianEleId!='A'){
              upgradeEle.push(String.fromCharCode(heianEleId.charCodeAt() - 1))
              if(heianEleId.charCodeAt()>=65&&heianEleId.charCodeAt()<=90)upgradeEle.push(String.fromCharCode(heianEleId.charCodeAt() + 31))
              else upgradeEle.push(String.fromCharCode(heianEleId.charCodeAt() - 33))
              Utils.calScore(State.yida.score)
              State.World.remove(State.engine.world, [pair.bodyB, pair.bodyA])
              Animatin.collision(x, y, pengElId)
              setTimeout(()=>{
                Animatin.upgradeBroken(x, y,true)
              },100)

              Factory.createElement(upgradeEle[0],false,false,State.wallThickness+heianEle.circleRadius,State.endHeight+heianEle.circleRadius)
              Factory.createElement(upgradeEle[1],false,false,State.windowWidth-State.wallThickness-heianEle.circleRadius,State.endHeight+heianEle.circleRadius)
              if(State.gameState==2)return;
              Music.stopCollisionMusic()
              Music.playCollisionMusic(pengElId)
              
            }
          }
          if (Math.abs(diff)==32) {
			  
			      x = pair.bodyA.position.x
            y = pair.bodyA.position.y
            pengElId=pair.bodyB.elId
			
            if (pair.bodyB.elId == State.datasIds[State.datasIds.length-2]){
              upgradeEle = String.fromCharCode(pair.bodyA.elId.charCodeAt() + 1)
			        Utils.calScore(pair.bodyB.score)
              State.World.remove(State.engine.world, [pair.bodyB, pair.bodyA])
              Animatin.collision(x, y, pengElId)
              setTimeout(()=>{
                Animatin.upgradeBroken(x, y)
              },200)
			        Factory.createElement(upgradeEle,false,false,x,y)
              State.gameState=2
              that.success()
              return;
            } else if (pair.bodyA.elId == State.datasIds[State.datasIds.length - 2]){
              upgradeEle = String.fromCharCode(pair.bodyB.elId.charCodeAt() + 1)
			        Utils.calScore(pair.bodyB.score)
              State.World.remove(State.engine.world, [pair.bodyB, pair.bodyA])
              Animatin.collision(x, y, pengElId)
              setTimeout(()=>{
                Animatin.upgradeBroken(x, y)
              },200)
			        Factory.createElement(upgradeEle,false,false,x,y)
              State.gameState = 2
              that.success()
              return;
            }else{

              upgradeEle = String.fromCharCode(pair.bodyB.elId.charCodeAt() + 1)
            }
            
            
            Utils.calScore(pair.bodyB.score)
            State.World.remove(State.engine.world, [pair.bodyB, pair.bodyA])
            Animatin.collision(x, y, pengElId)
            setTimeout(()=>{
              Animatin.upgradeBroken(x, y)
            },100)
            let upgradeEleItem=Factory.createElement(upgradeEle,false,false,x,y)
            if(State.gameState==2)return;
            Music.stopCollisionMusic()
            Music.playCollisionMusic(pengElId)


          }

        }


        if ((isBodyBEqueryNewCircle || isBodyAEqueryNewCircle) && !State.newCircle.isStatic && State.gameState==1){
          switch (State.count) {
            case 1:
              Factory.createElement('A')
              break
            case 2:
              Factory.createElement('a')
              break
            case 3:
              Factory.createElement('B')
              break
			      default:
			        if(pengElId==State.yida.id){

                setTimeout(()=>{
                  if(State.newCircle.isStatic || State.gameState!=1)return
                  if(State.count < State.degreeCreateMethod[State.degree].top1)Factory.createElement(State.datasIds[Math.round(Math.random() * (State.datasIds.length - State.degreeCreateMethod[State.degree].index1))])
                  else if(State.count < State.degreeCreateMethod[State.degree].top2)Factory.createElement(State.datasIds[Math.round(Math.random() * (State.datasIds.length - State.degreeCreateMethod[State.degree].index2))])
                  else Factory.createElement(State.datasIds[Math.round(Math.random() * (State.datasIds.length - State.degreeCreateMethod[State.degree].index3))])
                },1000)
              }else{
                if(State.count < State.degreeCreateMethod[State.degree].top1)Factory.createElement(State.datasIds[Math.round(Math.random() * (State.datasIds.length - State.degreeCreateMethod[State.degree].index1))])
                else if(State.count < State.degreeCreateMethod[State.degree].top2)Factory.createElement(State.datasIds[Math.round(Math.random() * (State.datasIds.length - State.degreeCreateMethod[State.degree].index2))])
                else Factory.createElement(State.datasIds[Math.round(Math.random() * (State.datasIds.length - State.degreeCreateMethod[State.degree].index3))])
              }
          }
        }
      }

    }
    State.Events.on(State.engine, "collisionStart", 
    State.collisionStartEvent)
	
	State.moveEvent = res => {
      if(State.gameState!=1)return
      if (State.newCircle.isStatic){
        let circleRadius = State.newCircle.circleRadius
        let x = res.mouse.position.x
        let y = res.mouse.position.y
        let c = document.getElementById('hecheng-show-container')
        if(c.offsetTop!=0)return
        if (x-State.wallThickness-circleRadius < 0) x = State.wallThickness+circleRadius
        else if (State.windowWidth - circleRadius - x -State.wallThickness < 0) x = State.windowWidth - circleRadius -State.wallThickness
        State.Body.setPosition(State.newCircle, {
          x: x,
          y: State.newCircle.position.y
        })
      }
      
    }

    State.Events.on(State.mouseConstraint, "mousemove", State.moveEvent)

    State.enddragEvent=res => {
      let x = res.mouse.position.x
      let y = res.mouse.position.y
      let c = document.getElementById('hecheng-show-container')
      if(c.offsetTop!=0)return
      if(x>=State.windowWidth-300&&x<=State.windowWidth-100 && y>=State.windowHeight-200&&y<=State.windowHeight-100)return
      State.newCircle.collisionFilter.group=State.Body.nextGroup()

      State.Body.setStatic(State.newCircle, false)
    }
	State.Events.on(State.mouseConstraint, "mouseup", State.enddragEvent)
    //State.Events.on(State.mouseConstraint, "enddrag", State.enddragEvent)
	State.Events.on(State.mouseConstraint, "mousedown", State.moveEvent)

  }

  touchTopLine(item){

    let itemTop=item.position.y - item.circleRadius
    let bodies
    let body
    let maxPositionEleTop = State.maxPositionEle == null ? State.windowHeight:State.maxPositionEle.y-State.maxPositionEle.circleRadius

    if( State.maxPositionEle == null || maxPositionEleTop > itemTop)State.maxPositionEle=item
    else if(State.maxPositionEle != item && maxPositionEleTop < itemTop)return

    if(itemTop-200 <= State.endHeight){
      if(!State.isWarned){
        State.isWarned=true
        Factory.createWarnLine()
      }
    }else{
      if(State.isWarned){
        State.isWarned=false
        Factory.cancelWarnLine()
      }
    }


    if (itemTop <= State.endHeight){
      State.gameState=0
      bodies=State.engine.world.bodies
      for (body of bodies){
        if (body.label =='Circle Body'){
          Animatin.broken(body.position.x, body.position.y)
          State.World.remove(State.engine.world, body)
          this.failed()
        }
        
      }
      if(State.seesaw)State.seesaw.isStatic=true
      State.World.clear(State.engine.world, true)      
    }
  }

  touchBottomLine(item){

    let itemTop=item.position.y + item.circleRadius
    let bodies
    let body
    let maxPositionEleTop = State.maxPositionEle == null ? 0:State.maxPositionEle.y+State.maxPositionEle.circleRadius

    if(State.maxPositionEle == null || maxPositionEleTop < itemTop)State.maxPositionEle=item
    else if(State.maxPositionEle != item && maxPositionEleTop > itemTop)return

    if(itemTop+200 >= State.windowHeight-State.endHeight){
      if(!State.isWarned){
        State.isWarned=true
        Factory.createWarnLine()
      }
    }else{
      if(State.isWarned){
        State.isWarned=false
        Factory.cancelWarnLine()
      }
    }


    if (itemTop >= State.windowHeight-State.endHeight){
      State.gameState=0
      bodies=State.engine.world.bodies
      for (body of bodies){
        if (body.label =='Circle Body'){
          Animatin.broken(body.position.x, body.position.y)
          State.World.remove(State.engine.world, body)
          this.failed()
        }
        
      }
      if(State.seesaw)State.seesaw.isStatic=true
      State.World.clear(State.engine.world, true)      
    }
  }
  failed(){
    document.getElementById("failedscore").innerHTML=State.currentScore
    Music.stopCollisionMusic()
    let rand = Math.round(Math.random()*19)
    if(rand < 10){
      State.bgm.src=State.baseUrl + 'audio/hello hello my love～.mp3'
      document.getElementById("failed-tip").innerHTML='害，失败了，给町田一首歌的时间安慰你~'
    }
    else{
      State.bgm.src=State.baseUrl + 'audio/楚楚唱歌.mp3'
      document.getElementById("failed-tip").innerHTML='害，失败了，赤楚的歌声安慰你~'
    }
    State.bgm.play()
    State.Events.off(State.engine, "collisionStart",State.collisionStartEvent)
    State.Events.off(State.mouseConstraint, "mouseup",State.enddragEvent)
	  State.Events.off(State.mouseConstraint, "mousedown", State.moveEvent)
    setTimeout(function() {
      document.getElementById('failed').style.display='flex'
    }, 1500)
  }

  success(){
    Animatin.firework()
    document.getElementById("successscore").innerHTML=State.currentScore
    Music.stopCollisionMusic()
    State.bgm.src=State.baseUrl + 'audio/DEEP SQUAD - Good Love Your Love.mp3'
    State.bgm.play()
    State.Events.off(State.engine, "collisionStart",State.collisionStartEvent)
    State.Events.off(State.mouseConstraint, "mouseup",State.enddragEvent)
	  State.Events.off(State.mouseConstraint, "mousedown", State.moveEvent)
    setTimeout(function() {
      document.getElementById('success').style.display='block'
    }, 1500)
  }
  clearDatas(){
    if(State.bgm!=null){
      State.bgm.pause()
      State.bgm.src=""
    }
    for(let f of State.firework){
      clearInterval(f)
    }
    State.firework=[]

    State.isWarned=false
    State.currentScore=0
    State.count=0
    State.gameState=1
    State.datas=Utils.loadDatas()
    State.datasIds=Object.keys(State.datas)
    State.seesaw=null
    State.World.clear(State.engine.world)
    document.getElementById('score').innerHTML='0'
    Factory.cancelWarnLine()
    Factory.createWall()
    if(State.mode=='bengc')Factory.createBottomBridge()
    if(State.mode=='seesaw')Factory.createSeesaw()
    Factory.createElement()
  }
}

