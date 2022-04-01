import { Link } from "react-router-dom";
import './Header.css'



export default function Header(props) {

    return (

        <header className='header'>
            <div className='container' >
                <div className='logo'>
                    <h2>{props.Texto}</h2>
                </div>

                <div className='btn'>
                    <Link to={props.Destino}>
                        <button> {props.Botao} </button>
                    </Link>
                    
                </div>


            </div>

        </header>

    );
};