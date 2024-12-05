import './styleHeader.css';
import logo from '../../assets/images/logoPortifolio.png';

export default function Header() {
    return (
        <div className="header">
            <img src={logo} />
            <p>Portifolio.me</p>
        </div>
    );
}