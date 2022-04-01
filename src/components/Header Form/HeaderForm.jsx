import '../Header/Header.css';



export default function HeaderForm(props) {

    return (

        <header className='header'>
            <div className='container' >
                <div className='logo'>
                    <h2>{props.Texto}</h2>
                </div>

                <div className='btn'>
                    
                    
                </div>


            </div>

        </header>

    );
};