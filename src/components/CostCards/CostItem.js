import "./CostItemStyles.css";

export default function CostItem(props) {
    return(
        <div className="cost-item-wrapper">
            <p className='cost-item-date'> {props.date.toDateString()} </p>
            <div className='price-description-wrapper'>
                <p>{props.description}</p>
                <p className='cost-item-price'>${props.amount}</p>
            </div>
        </div>
    )
}