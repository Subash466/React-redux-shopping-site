import Item1 from '../../images/Item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpeg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/actionTypes/cart-action'


const initState = {
    items: [
        {id:1,title:'Shirt', desc: "Blue Men Stylish Shirt", price:450,img:Item1},
        {id:2,title:'Shirt', desc: "Men Stylish Shirt", price:680,img: Item2},
        {id:3,title:'Shirt', desc: "White Men Stylish Shirt",price:720,img: Item3},
        {id:4,title:'Shirt', desc: "Cotton Men Stylish Shirt", price:660,img:Item4},
        {id:5,title:'T-Shirt', desc: "Gray Mens Stylish Hooded T-Shirt", price:460,img: Item5},
        {id:6,title:'T-Shirt', desc: "Men's Cotton White Hooded T Shirt",price:390,img: Item6},
        {id:7,title:'T-Shirt', desc: "Buy Try This Men's Regular Fit T-Shirt", price:360,img:Item7},
        {id:8,title:'T-shirt', desc: "Mens Casual Patchwork Shirts", price:460,img: Item8},
        {id:9,title:'T-shirt', desc: "B&C Herren Baseball T-Shirt, zweifarbig, Kurzarm",price:290,img: Item9}
    ],
    addedItems:[],
    total: 0

}
const CartReducer= (state = initState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }

  if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
}
  
else{
  return state
  }
  
}
export default CartReducer;