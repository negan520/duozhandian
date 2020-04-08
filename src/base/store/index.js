import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const state={
  userInfo:null,
  showPopup:false,
  gameInfo:{code:'',name:'',type:''},
  showLuzi:false,
  showChanglong:false,
  domainIfo:{},
  gameList:[]
};
export default new Vuex.Store({
  state,
  mutations,
  getters
});
