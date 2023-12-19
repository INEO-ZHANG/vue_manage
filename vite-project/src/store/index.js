import {createStore} from 'vuex'

export default createStore({
    state(){
        return{
            isCollapse:true
        }
    },
    mutations:{
        updateIsCollapse(state){
           state.isCollapse=!state.isCollapse
        }
    }
})