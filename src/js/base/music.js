import State from '../state/state.js'

export default class Music{
	static playCollisionMusic(elId){
		let el=null
		if(elId==State.yida.id)el = State.yida
		else el = State.datas[elId]
		State.bgm.src=el.collisionMusic
		State.bgm.play()
	}

	static stopCollisionMusic(){
		if(State.bgm!=null){
			State.bgm.pause()
			State.bgm.src=""
		}
	}
}