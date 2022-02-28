import '../styles/styles.css';
import Button from './Button';

function Header(){

    return(
    <div className={"bg-green"}>
        <div className="container py-2">
            <div className='row'>
                <div className='col-6'>
                    <span className='title white'>Ligue 1</span>
                </div>
                <div className='col-6 text-end'>
                    <Button/> 
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;