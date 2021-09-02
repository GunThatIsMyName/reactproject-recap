import { CLEAR, CONTROL, GetData, LOADING, MODIFY, REMOVE } from "./data";

export const initState = {
    loading:true,
    data:[],
    price:0,
    amount:0,
}
export const reducer = (state,action)=>{
    switch (action.type){
        case LOADING:
            return{
                ...state,
                loading:true,
            }
        case GetData:
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        case CONTROL:
            const {id,type}=action.payload;
            const control = state.data.map((item)=>{
                if(item.id === id){
                    return type ==="inc"?{...item,amount:item.amount+1}:{...item,amount:item.amount-1};
                }
                return item;
            }).filter(item=>item.amount !== 0) 
            return{
                ...state,
                data:control
            }
        case REMOVE:
            const {payload} = action;
            const removedItem = state.data.filter(item=>item.id !==payload);
            return{
                ...state,
                data:removedItem
            }
        case MODIFY:
            let {totalPrice,totalAmount} = state.data.reduce((acc,curr)=>{
                const {amount,price}=curr
                acc.totalAmount +=amount;
                acc.totalPrice += amount * price
                return acc
            },{
                totalPrice:0,
                totalAmount:0
            })
            totalPrice = parseFloat(totalPrice.toFixed(2));        
            return{
                ...state,
                amount:totalAmount,
                price:totalPrice
            }
        case CLEAR:
            return{
                ...state,
                data:[]
            }
        default:
            throw new Error('error came here');
    }
}