export default function(state=null, action){
    switch(action.type){
     case 'FOOD_ITEMS':
         return action.payload
    default:
        return state
    }    
}