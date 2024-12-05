import left from '../../assets/images/left-arrow.svg';
import right from '../../assets/images/right-arrow.svg';

export default function Product(props) {
    return (
        <li key={props.index}>
            <div>
                <div id='littleBall'></div>
                <p>{props.products.name}</p>
            </div>
            <div>
                <button onClick={() => props.removeProductQuantity(props.index)}>
                    <img src={left} alt="" />
                </button>
                <p>{props.products.quantity}</p>
                <button onClick={() => props.addProductQuantity(props.index)}>
                    <img src={right} alt="" />
                </button>
            </div>
        </li>
    );
}