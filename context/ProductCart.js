import { createContext, useReducer } from "react";
const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
}
const sumItem=(items)=>{
    const itemsCounter= items.reduce((total,product)=> total + product.quantity,0);
    const total=items.reduce((total,product)=>total + product.price*product.quantity,0).toFixed(2);
    return {itemsCounter,total}
}
const cartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item=>item.id===action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1,
                    
                })
                console.log(state.itemsCounter);
            }
            return {
                ...state,
                selectedItems:[...state.selectedItems],
                ...sumItem(state.selectedItems)
            
            }
            case "INCREASE":
                const IndexI=state.selectedItems.findIndex(item=>item.id=== action.payload.id);
                state.selectedItems[IndexI].quantity++;
                return {
                    ...state,
                    ...sumItem(state.selectedItems)
                };
                case "DECREASE":
                    const IndexD=state.selectedItems.findIndex(item=>item.id=== action.payload.id);
                    state.selectedItems[IndexD].quantity--;
                    return {
                        ...state,
                        ...sumItem(state.selectedItems)
                    };
            case "REMOVE_ITEM":
                const newSelectItem=state.selectedItems.filter(item=>item.id !== action.payload.id);
                return{
                    ...state,
                    selectedItems: [...newSelectItem],
                    ...sumItem(state.selectedItems),
                    
                }
             
                        case "CHECKOUT":
                            return{
                                selectedItems:[],
                                itemsCounter:0,
                                total:0,
                                checkout:true
                            }
                            case "CLEAR":
                                return{
                                    selectedItems:[],
                                    itemsCounter:0,
                                    total:0,
                                    checkout:false
                                }
                                default :
                                return state
    }
}

export const ProductContext=createContext()

const ProductCart = ({children}) => {
    const [state,dispatch]=useReducer(cartReducer,initialState)
    return (
      <ProductContext.Provider value={{state,dispatch} }>
        {children}
      </ProductContext.Provider>
    );
};

export default ProductCart;