import State from '../state/state.js'
const baseUrl = State.baseUrl
let jsonData=[{"texture":"images/main/1/AA2/140AA.png","size":70,"collisionMusic":"images/main/1/AA2/电梯里：黑沢心脏dokidoki.mp3","dropItems":[{"texture":"images/main/1/AA2/drop-items/126.png","size":63}]}, {"texture":"images/main/1/a2/140a.png","size":70,"collisionMusic":"images/main/1/a2/安达：诶.mp3","dropItems":[{"texture":"images/main/1/a2/drop-items/えっ.png","size":63}]}, {"texture":"images/main/1/AA3/146AA.png","size":73,"collisionMusic":"null","dropItems":[{"texture":"images/main/1/AA3/drop-items/126黑咖啡.png","size":63}]}, {"texture":"images/main/1/a3/146a.png","size":73,"collisionMusic":"images/main/1/a3/心跳声kurosawa.mp3","dropItems":[{"texture":"images/main/1/a3/drop-items/kurosawa.png","size":63}]}, {"texture":"images/main/1/AA4/150AA.png","size":75,"collisionMusic":"images/main/1/AA4/耳后痣！.mp3","dropItems":[{"texture":"images/main/1/AA4/drop-items/hokuro.png","size":63}]}, {"texture":"images/main/1/a4/150a.png","size":75,"collisionMusic":"images/main/1/a4/安达：诶.mp3","dropItems":[]}, {"texture":"images/main/1/AA5/160AA.png","size":80,"collisionMusic":"images/main/1/AA5/经典围围巾.mp3","dropItems":[{"texture":"images/main/1/AA5/drop-items/126围巾.png","size":63}, {"texture":"images/main/1/AA5/drop-items/160AA.png","size":64}, {"texture":"images/main/1/AA5/drop-items/優しい.png","size":64}]}, {"texture":"images/main/1/a5/160a.png","size":80,"collisionMusic":"null","dropItems":[{"texture":"images/main/1/a5/drop-items/126围巾.png","size":63}]}, {"texture":"images/main/2/AA1/180AA.png","size":90,"collisionMusic":"null","dropItems":[{"texture":"images/main/2/AA1/drop-items/126睡衣.png","size":63}]}, {"texture":"images/main/2/a1/180a.png","size":90,"collisionMusic":"null","dropItems":[{"texture":"images/main/2/a1/drop-items/126睡衣.png","size":63}]}, {"texture":"images/main/2/AA2/186AA.png","size":93,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/2/a2/186a.png","size":93,"collisionMusic":"images/main/2/a2/小奶音：kurosawa？.mp3","dropItems":[{"texture":"images/main/2/a2/drop-items/kurosawa2.png","size":63}]}, {"texture":"images/main/2/AA3/188AA.png","size":94,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/2/a3/188a.png","size":94,"collisionMusic":"images/main/2/a3/牙白牙白牙白！.mp3","dropItems":[{"texture":"images/main/2/a3/drop-items/牙白.png","size":63}]}, {"texture":"images/main/2/AA4/190AA.png","size":95,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/2/a4/190a.png","size":95,"collisionMusic":"null","dropItems":[{"texture":"images/main/2/a4/drop-items/128玉子烧.png","size":64}, {"texture":"images/main/2/a4/drop-items/おいしい.png","size":63}]}, {"texture":"images/main/2/AA5/194AA.png","size":97,"collisionMusic":"images/main/2/AA5/文件夹黑沢内心告白^_^哭哭.mp3","dropItems":[{"texture":"images/main/2/AA5/drop-items/126彩虹文件夹.png","size":63}]}, {"texture":"images/main/2/a5/194a.png","size":97,"collisionMusic":"null","dropItems":[{"texture":"images/main/2/a5/drop-items/果咩.png","size":63}]}, {"texture":"images/main/3/AA1/206AA.png","size":103,"collisionMusic":"images/main/3/AA1/一瞬间… 升天了呢.mp3","dropItems":[{"texture":"images/main/3/AA1/drop-items/嬉しい.png","size":63}]}, {"texture":"images/main/3/a1/206a.png","size":103,"collisionMusic":"images/main/3/a1/一瞬间… 升天了呢(1).mp3","dropItems":[{"texture":"images/main/3/a1/drop-items/えっ.png","size":63}]}, {"texture":"images/main/3/AA2/212AA.png","size":106,"collisionMusic":"images/main/3/AA2/对不起…就这样喜欢上你.mp3","dropItems":[{"texture":"images/main/3/AA2/drop-items/果咩.png","size":63}]}, {"texture":"images/main/3/a2/212a.png","size":106,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/3/AA3/220AA.png","size":110,"collisionMusic":"images/main/3/AA3/对不起…就这样喜欢上你.mp3","dropItems":[{"texture":"images/main/3/AA3/drop-items/橘子.png","size":63}, {"texture":"images/main/3/AA3/drop-items/矿泉水.png","size":64}]}, {"texture":"images/main/3/a3/220a.png","size":110,"collisionMusic":"images/main/3/a3/我不嫌弃 你的吻.mp3","dropItems":[{"texture":"images/main/3/a3/drop-items/手机响了.png","size":63}, {"texture":"images/main/3/a3/drop-items/橘子.png","size":63}]}, {"texture":"images/main/4/AA1/234AA.png","size":117,"collisionMusic":"images/main/4/AA1/别碰安达.mp3","dropItems":[{"texture":"images/main/4/AA1/drop-items/黑泽包.png","size":63}]}, {"texture":"images/main/4/a1/234a.png","size":117,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/4/AA2/240AA.png","size":120,"collisionMusic":"null","dropItems":[{"texture":"images/main/4/AA2/drop-items/大丈夫.png","size":63}]}, {"texture":"images/main/4/a2/240a.png","size":120,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/4/AA4/260AA.png","size":130,"collisionMusic":"null","dropItems":[{"texture":"images/main/4/AA4/drop-items/创可贴.png","size":63}]}, {"texture":"images/main/4/a4/260a.png","size":130,"collisionMusic":"null","dropItems":[{"texture":"images/main/4/a4/drop-items/创可贴.png","size":63}]}, {"texture":"images/main/5/AA1/252AA.png","size":126,"collisionMusic":"null","dropItems":[{"texture":"images/main/5/AA1/drop-items/ありがとう.png","size":63}, {"texture":"images/main/5/AA1/drop-items/蒙布朗.png","size":63}]}, {"texture":"images/main/5/a1/252a.png","size":126,"collisionMusic":"null","dropItems":[{"texture":"images/main/5/a1/drop-items/嬉しい.png","size":63}, {"texture":"images/main/5/a1/drop-items/蒙布朗.png","size":63}]}, {"texture":"images/main/5/AA2/258AA.png","size":129,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/5/a2/258a.png","size":129,"collisionMusic":"null","dropItems":[{"texture":"images/main/5/a2/drop-items/悲しい.png","size":63}, {"texture":"images/main/5/a2/drop-items/果咩.png","size":63}]}, {"texture":"images/main/6/AA2/264AA.png","size":132,"collisionMusic":"images/main/6/AA2/sweet life、.mp3","dropItems":[{"texture":"images/main/6/AA2/drop-items/sweetlife.png","size":63}]}, {"texture":"images/main/6/a2/264a.png","size":132,"collisionMusic":"null","dropItems":[{"texture":"images/main/6/a2/drop-items/熱すぎ.png","size":63}, {"texture":"images/main/6/a2/drop-items/粥.png","size":63}]}, {"texture":"images/main/6/AA3/264AA.png","size":132,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/6/a3/264a.png","size":132,"collisionMusic":"images/main/6/a3/安达：黑沢、可爱！.mp3","dropItems":[{"texture":"images/main/6/a3/drop-items/えっ.png","size":63}, {"texture":"images/main/6/a3/drop-items/かわいい.png","size":63}]}, {"texture":"images/main/6/AA4/266AA.png","size":133,"collisionMusic":"null","dropItems":[{"texture":"images/main/6/AA4/drop-items/心が痛む.png","size":63}]}, {"texture":"images/main/6/a4/266a.png","size":133,"collisionMusic":"null","dropItems":[{"texture":"images/main/6/a4/drop-items/えっ.png","size":63}]}, {"texture":"images/main/7/AA1/270AA.png","size":135,"collisionMusic":"images/main/7/AA1/黑沢表白.mp3","dropItems":[{"texture":"images/main/7/AA1/drop-items/好きです.png","size":63}, {"texture":"images/main/7/AA1/drop-items/気持ちが悪い.png","size":63}]}, {"texture":"images/main/7/a1/270a.png","size":135,"collisionMusic":"images/main/7/a1/被告白后安达：我也不知道了.mp3","dropItems":[{"texture":"images/main/7/a1/drop-items/えっ.png","size":63}]}, {"texture":"images/main/7/AA2/272AA.png","size":136,"collisionMusic":"null","dropItems":[{"texture":"images/main/7/AA2/drop-items/dokidoki.png","size":63}, {"texture":"images/main/7/AA2/drop-items/便签.png","size":63}, {"texture":"images/main/7/AA2/drop-items/安达包.png","size":64}, {"texture":"images/main/7/AA2/drop-items/気持ちが悪い.png","size":63}, {"texture":"images/main/7/AA2/drop-items/红酒.png","size":63}]}, {"texture":"images/main/7/a2/272a.png","size":136,"collisionMusic":"null","dropItems":[{"texture":"images/main/7/a2/drop-items/安达包.png","size":64}]}, {"texture":"images/main/7/AA3/278AA.png","size":139,"collisionMusic":"null","dropItems":[{"texture":"images/main/7/AA3/drop-items/惊讶.png","size":63}, {"texture":"images/main/7/AA3/drop-items/本当ですか.png","size":63}]}, {"texture":"images/main/7/a3/278a.png","size":139,"collisionMusic":"images/main/7/a3/喜欢黑沢.mp3","dropItems":[{"texture":"images/main/7/a3/drop-items/好きです.png","size":63}]}, {"texture":"images/main/7/AA4/280AA.png","size":140,"collisionMusic":"images/main/7/AA4/黑沢的不会放你走.mp3","dropItems":[{"texture":"images/main/7/AA4/drop-items/好きです.png","size":63}, {"texture":"images/main/7/AA4/drop-items/嬉しい.png","size":63}, {"texture":"images/main/7/AA4/drop-items/黑泽包.png","size":63}]}, {"texture":"images/main/7/a4/280a.png","size":140,"collisionMusic":"null","dropItems":[{"texture":"images/main/7/a4/drop-items/好きです.png","size":63}, {"texture":"images/main/7/a4/drop-items/安达包.png","size":64}]}, {"texture":"images/main/8/AA2/280AA.png","size":140,"collisionMusic":"images/main/8/AA2/诗人优一.mp3","dropItems":[{"texture":"images/main/8/AA2/drop-items/头像.png","size":63}, {"texture":"images/main/8/AA2/drop-items/手机.png","size":63}, {"texture":"images/main/8/AA2/drop-items/诗.png","size":65}]}, {"texture":"images/main/8/a2/280a.png","size":140,"collisionMusic":"images/main/8/a2/诗人优一(1).mp3","dropItems":[{"texture":"images/main/8/a2/drop-items/poem.png","size":63}, {"texture":"images/main/8/a2/drop-items/えっ.png","size":63}, {"texture":"images/main/8/a2/drop-items/手机.png","size":63}]}, {"texture":"images/main/8/AA3/282AA.png","size":141,"collisionMusic":"null","dropItems":[{"texture":"images/main/8/AA3/drop-items/120AA.png","size":60}, {"texture":"images/main/8/AA3/drop-items/心脏受不了.png","size":63}, {"texture":"images/main/8/AA3/drop-items/恋愛してい.png","size":63}]}, {"texture":"images/main/8/a3/282a.png","size":141,"collisionMusic":"null","dropItems":[{"texture":"images/main/8/a3/drop-items/恋愛してい.png","size":63}]}, {"texture":"images/main/8/AA4/290AA.png","size":145,"collisionMusic":"images/main/8/AA4/好きい・.mp3","dropItems":[{"texture":"images/main/8/AA4/drop-items/牵手.png","size":63}]}, {"texture":"images/main/8/a4/290a.png","size":145,"collisionMusic":"null","dropItems":[{"texture":"images/main/8/a4/drop-items/牵手.png","size":63}]}, {"texture":"images/main/9/AA1/290AA.png","size":145,"collisionMusic":"null","dropItems":[{"texture":"images/main/9/AA1/drop-items/饭团2.png","size":63}]}, {"texture":"images/main/9/a1/290a.png","size":145,"collisionMusic":"null","dropItems":[{"texture":"images/main/9/a1/drop-items/饭团1.png","size":63}]}, {"texture":"images/main/9/AA2/294AA.png","size":147,"collisionMusic":"images/main/9/AA2/圣歌～.mp3","dropItems":[]}, {"texture":"images/main/9/a2/294a.png","size":147,"collisionMusic":"images/main/9/a2/圣歌～.mp3","dropItems":[]}, {"texture":"images/main/9/AA3/296AA.png","size":148,"collisionMusic":"images/main/9/AA3/圣歌～.mp3","dropItems":[]}, {"texture":"images/main/9/a3/296a.png","size":148,"collisionMusic":"images/main/9/a3/圣歌～.mp3","dropItems":[]}, {"texture":"images/main/10/AA2/304AA.png","size":152,"collisionMusic":"null","dropItems":[]}, {"texture":"images/main/10/a2/304a.png","size":152,"collisionMusic":"null","dropItems":[{"texture":"images/main/10/a2/drop-items/打气夹.png","size":63}, {"texture":"images/main/10/a2/drop-items/杯子.png","size":63}, {"texture":"images/main/10/a2/drop-items/糖果.png","size":63}]}, {"texture":"images/main/10/AA3/316AA.png","size":158,"collisionMusic":"null","dropItems":[{"texture":"images/main/10/AA3/drop-items/可丽饼.png","size":63}, {"texture":"images/main/10/AA3/drop-items/摩天轮.png","size":63}]}, {"texture":"images/main/10/a3/316a.png","size":158,"collisionMusic":"null","dropItems":[{"texture":"images/main/10/a3/drop-items/可丽饼.png","size":63}, {"texture":"images/main/10/a3/drop-items/摩天轮.png","size":63}]}, {"texture":"images/main/10/AA5/320AA.png","size":160,"collisionMusic":"null","dropItems":[{"texture":"images/main/10/AA5/drop-items/动车.png","size":63}]}, {"texture":"images/main/10/a5/320a.png","size":160,"collisionMusic":"null","dropItems":[{"texture":"images/main/10/a5/drop-items/动车.png","size":63}, {"texture":"images/main/10/a5/drop-items/魔法の話.png","size":63}]}, {"texture":"images/main/11/AA3/322AA.png","size":161,"collisionMusic":"null","dropItems":[{"texture":"images/main/11/AA3/drop-items/便当.png","size":63}, {"texture":"images/main/11/AA3/drop-items/加油.png","size":63}]}, {"texture":"images/main/11/a3/322a.png","size":161,"collisionMusic":"null","dropItems":[{"texture":"images/main/11/a3/drop-items/便当.png","size":63}, {"texture":"images/main/11/a3/drop-items/加油.png","size":63}]}, {"texture":"images/main/11/AA4/330AA.png","size":165,"collisionMusic":"null","dropItems":[{"texture":"images/main/11/AA4/drop-items/かわいい.png","size":63}]}, {"texture":"images/main/11/a4/330a.png","size":165,"collisionMusic":"null","dropItems":[{"texture":"images/main/11/a4/drop-items/教教我.png","size":63}]}, {"texture":"images/main/11/AA5/338AA.png","size":169,"collisionMusic":"null","dropItems":[{"texture":"images/main/11/AA5/drop-items/心碎.png","size":63}]}, {"texture":"images/main/11/a5/338a.png","size":169,"collisionMusic":"null","dropItems":[{"texture":"images/main/11/a5/drop-items/心碎.png","size":63}]}, {"texture":"images/main/12/AA1/346AA.png","size":173,"collisionMusic":"null","dropItems":[{"texture":"images/main/12/AA1/drop-items/好きです.png","size":63}, {"texture":"images/main/12/AA1/drop-items/红钢笔.png","size":63}]}, {"texture":"images/main/12/a1/346a.png","size":173,"collisionMusic":"null","dropItems":[{"texture":"images/main/12/a1/drop-items/好きです.png","size":63}, {"texture":"images/main/12/a1/drop-items/红钢笔.png","size":63}, {"texture":"images/main/12/a1/drop-items/自行车.png","size":63}]}, {"texture":"images/main/12/AA2/354AA.png","size":177,"collisionMusic":"null","dropItems":[{"texture":"images/main/12/AA2/drop-items/烟花.png","size":63}]}, {"texture":"images/main/12/a2/354a.png","size":177,"collisionMusic":"null","dropItems":[{"texture":"images/main/12/a2/drop-items/烟花.png","size":63}]}, {"texture":"images/main/12/AA3/370AA.png","size":185,"collisionMusic":"null","dropItems":[{"texture":"images/main/12/AA3/drop-items/白T.png","size":63}]}, {"texture":"images/main/12/a3/370a.png","size":185,"collisionMusic":"null","dropItems":[{"texture":"images/main/12/a3/drop-items/白T.png","size":63}]}, {"texture":"images/main/12/Aa/390Aa.png","size":195,"collisionMusic":"null","dropItems":[]}]
let indexs = [[0,7],[8,17],[18,23],[24,29],[30,33],[34,39],[40,47],[48,53],[54,59],[60,65],[66,71],[72,77]]
let loadDatas = function(){
	let datas={}
	let elId='A'
	let el={}
	let degree=[3,6,9]
	let defaultDropItems=[
	  {
        texture: baseUrl + 'images/动画/碰撞爱心1.png',
        size: 15
      },
      {
        texture: baseUrl + 'images/动画/碰撞爱心2.png',
        size: 10
      }
	]
	let defaultCollisionMusic=baseUrl + 'audio/boom.mp3'
	let score = 2

	let filterJsonData=[]
	let oneIndex = Math.round(Math.random()*(indexs[0][1]-indexs[0][0]))+indexs[0][0]
	
	if(oneIndex%2==0){
		filterJsonData.push(jsonData[oneIndex])
		filterJsonData.push(jsonData[oneIndex+1])
	}
	else{
		filterJsonData.push(jsonData[oneIndex-1])
		filterJsonData.push(jsonData[oneIndex])
	}

	let jishus = []

	while(jishus.length < degree[State.degree]){
		let jishu = Math.round(Math.random()*9)+1
		if(jishus.indexOf(jishu) != -1)continue
		jishus.push(jishu)
	}

	jishus.sort((a,b)=>a-b)
	
	for(let jis of jishus){
		let jishuIdx = indexs[jis]
		let cindex = Math.round(Math.random()*(jishuIdx[1]-jishuIdx[0]))+jishuIdx[0]
		if(cindex%2==0){
			filterJsonData.push(jsonData[cindex])
			filterJsonData.push(jsonData[cindex+1])
		}
		else{
			filterJsonData.push(jsonData[cindex-1])
			filterJsonData.push(jsonData[cindex])
		}
	}	

	let lastIndex = Math.round(Math.random()*(indexs[11][1]-indexs[11][0]))+indexs[11][0]
	if(lastIndex%2==0){
		filterJsonData.push(jsonData[lastIndex])
		filterJsonData.push(jsonData[lastIndex+1])
	}
	else{
		filterJsonData.push(jsonData[lastIndex-1])
		filterJsonData.push(jsonData[lastIndex])
	}

	filterJsonData.push(jsonData[jsonData.length-1])

	for(let item of filterJsonData){
		el={}
		el.id=elId
		el.texture=baseUrl + item.texture
		el.size=item.size
		el.dropItems=item.dropItems!=undefined && item.dropItems!="null" && item.dropItems.length>0?item.dropItems:defaultDropItems
		el.dropItems.forEach(d=>{if(d.texture.indexOf(baseUrl)==-1)d.texture = baseUrl + d.texture})
		el.collisionMusic=item.collisionMusic!=undefined && item.collisionMusic!="null" && item.collisionMusic!=''?baseUrl + item.collisionMusic:defaultCollisionMusic
		datas[elId]=el
		if(elId>='A'&&elId<='Z'){
			el.score=score
			elId=String.fromCharCode(elId.charCodeAt() + 32)
		}
		else{
			el.score=score
			score=score+10
			elId=String.fromCharCode(elId.charCodeAt() - 31)
		}
	}

	return datas
}
let calScore=function(score){
	State.currentScore+=score
	if(State.currentScore<0)State.currentScore=0
	document.getElementById("score").innerHTML=State.currentScore
	
}

let resetState=function(){
    let keys=Object.keys(State)
    for(let key of keys){
    	if(key!='defaultStates' && key!='Engine' && key!='Render'&& key!='World' && key!='Bodies'
    		&& key!='Body' && key!='Events'&& key!='MouseConstraint'&& key!='Constraint'
    		&& key!='Composites' && key!='Composite'&& key!='engine' && key!='render'&& key!='mouseConstraint' && key!='baseUrl'){
    		State[key]=State.defaultStates[key]
    	}
    }
}

export default{
	loadDatas,
	calScore,
	resetState
}