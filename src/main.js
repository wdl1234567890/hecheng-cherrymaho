import Main from './js/main.js'
import Utils from './js/base/utils.js'
import State from './js/state/state.js'
import Factory from './js/factory/elementFactory.js'

let main = new Main()

let paperflys=document.getElementsByClassName('paperfly')

for(let i=0; i<paperflys.length;i++){
	paperflys[i].ontouchstart=function(){
  		main.clearDatas()
  		setTimeout(()=>{
			main.startEventListener()
		},400)
  		clearInterval(State.firework)
  		document.getElementById('success').style.display='none'
  		document.getElementById('failed').style.display='none'
	}
}

let paperflybacks=document.getElementsByClassName('paperflyback')
for(let i=0; i<paperflybacks.length;i++){
  paperflybacks[i].ontouchstart=function(){
      if(State.bgm!=null){
        State.bgm.pause()
        State.bgm.src=""
      }
      for(let f of State.firework){
        clearInterval(f)
      }
      State.World.clear(State.engine.world)
      document.getElementById('score').innerHTML='0'
      Factory.cancelWarnLine()
      State.Events.off(State.engine, "collisionStart",State.collisionStartEvent)
      State.Events.off(State.mouseConstraint, "mouseup",State.enddragEvent)
      State.Events.off(State.mouseConstraint, "mousedown", State.moveEvent)

      Utils.resetState()
      document.getElementById('hecheng-show').style.display='none'
      document.getElementById('success').style.display='none'
      document.getElementById('failed').style.display='none'
      document.getElementById('hecheng-show').style.display='none'
      document.getElementById('rule-container').style.display='none'
      document.getElementById('degree').style.display='none'
      document.getElementById('start').style.display='flex'
  }
}

document.getElementById('start-button').ontouchstart=function(){
  document.getElementById('degree').style.display='flex'
}
document.getElementById('bengc').ontouchstart=function(){
  State.mode='bengc'
  main.init()
  document.getElementById('start').style.display='none'
}
document.getElementById('seesaw').ontouchstart=function(){
  State.mode='seesaw'
  main.init()
  document.getElementById('start').style.display='none'
}
document.getElementById('simple').ontouchstart=function(){
  State.degree=0
  State.datas=Utils.loadDatas()
  State.datasIds=Object.keys(State.datas)
  State.mode='normal'
  main.init()
  document.getElementById('start').style.display='none'
}
document.getElementById('normal').ontouchstart=function(){
  State.degree=1
  State.datas=Utils.loadDatas()
  State.datasIds=Object.keys(State.datas)
  State.mode='normal'
  main.init()
  document.getElementById('start').style.display='none'
}
document.getElementById('complex').ontouchstart=function(){
  State.degree=2
  State.datas=Utils.loadDatas()
  State.datasIds=Object.keys(State.datas)
  State.mode='normal'
  main.init()
  document.getElementById('start').style.display='none'
}
document.getElementById('close-degree').ontouchstart=function(){
  document.getElementById('degree').style.display='none'
}
document.getElementById('skymode').ontouchstart=function(){
  State.gravity=-1
  State.mode='sky'
  main.init()
  document.getElementById('start').style.display='none'
}

document.getElementById('yidayida').ontouchstart=function(){
  State.mode='yidayida'
  main.init()
  document.getElementById('start').style.display='none'
}

document.getElementById('rule').ontouchstart=function(){
  document.getElementById('rule-container').style.display='inline-block'
}
document.getElementById('close-rule').ontouchstart=function(){
  document.getElementById('rule-container').style.display='none'
}
document.getElementById('hecheng-button').ontouchstart=function(){

  let str1 = '<div style="margin-bottom:60px;display:flex;align-items: center;justify-content: space-between;">'
  let str2 = '<div style="display:flex;align-items: center;justify-content:space-between;">'
  document.getElementById('hecheng-show').style.display='flex'
  for (let id of State.datasIds) {
    if(id==State.datasIds[State.datasIds.length-1])continue
    if(id.charCodeAt()>=65&&id.charCodeAt()<=90){
      
      if(id==State.datasIds[0]){
        str1+=`
        <img src="`+State.datas[id].texture+`"style="padding-left:30px;flex-shrink: 0;width:`+State.datas[id].size/1+`px;height:`+State.datas[id].size/1+`px"/>
      `
      }
      else if(id==State.datasIds[State.datasIds.length-3]){
        str1+=`
        <img src="`+State.datas[id].texture+`"style="padding-right:30px;flex-shrink: 0;width:`+State.datas[id].size/1+`px;height:`+State.datas[id].size/1+`px"/>
      `
      }else{
        str1+=`
        <img src="`+State.datas[id].texture+`"style="flex-shrink: 0;width:`+State.datas[id].size/1+`px;height:`+State.datas[id].size/1+`px"/>
      `
      }

      if(id!=State.datasIds[State.datasIds.length-3])str1+=`<span style="flex-shrink: 0;margin:0 15px;">---</span>`
    }else{

      if(id==State.datasIds[1]){
        str2+=`
        <img src="`+State.datas[id].texture+`"style="padding-left:30px;flex-shrink: 0;width:`+State.datas[id].size/1+`px;height:`+State.datas[id].size/1+`px"/>
      `
      }
      else if(id==State.datasIds[State.datasIds.length-2]){
        str2+=`
        <img src="`+State.datas[id].texture+`"style="padding-right:30px;flex-shrink: 0;width:`+State.datas[id].size/1+`px;height:`+State.datas[id].size/1+`px"/>
      `
      }else{
        str2+=`
        <img src="`+State.datas[id].texture+`"style="flex-shrink: 0;width:`+State.datas[id].size/1+`px;height:`+State.datas[id].size/1+`px"/>
      `
      }
      if(id!=State.datasIds[State.datasIds.length-2])str2+=`<span style="flex-shrink: 0;margin:0 15px;">---</span>`
    }
  }
  str1 += '</div>'
  str2 += '</div>'
  document.getElementById('hecheng-show-container').innerHTML=str1+str2
}
document.getElementById('close-hecheng-show').ontouchstart=function(){
  setTimeout(function() {
    document.getElementById('hecheng-show').style.display='none'
  }, 300);
}