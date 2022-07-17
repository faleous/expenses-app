import CostItem from "./CostItem";
import "./ListCostItemsStyles.css";

export default function ListCostItems (props) {
   return (
    <div className='list-cost-items'>
        {props.costs.map(item => (
            <CostItem date={item.date} description={item.description} amount={item.amount}/>
        ))}
    </div>
   ) 
}