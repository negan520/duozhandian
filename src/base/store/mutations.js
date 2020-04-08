import {
  RECORD_USERINFO,
  RECODE_GAMEINFO,
  SHOW_LUZI,
  SHOW_CHANGLONG,
  DOMAI_IFO,
  GAME_LIST
} from './mutation-types'

export default {
//记录用户信息
  [RECORD_USERINFO](state, stelog) {
    state.userInfo = stelog
  },
  //记录彩种信息
  [RECODE_GAMEINFO](state, statelog) {
    state.gameInfo = statelog
  },
  //显示路子
  [SHOW_LUZI](state, islog) {
    state.showLuzi = islog
  },
  //显示长龙
  [SHOW_CHANGLONG](state, islog) {
    state.showChanglong = islog
  },
  //获取网站信息
  [DOMAI_IFO](state, islog) {
    state.domainIfo = islog
  },
  //游戏列表
  [GAME_LIST](state, islog) {
    state.gameList = islog
  }
}
