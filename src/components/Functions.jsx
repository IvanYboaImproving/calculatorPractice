import Button from './Button';
import PropTypes from 'prop-types'
import "../styles/App.css"

const Functions = ({ onClickClear, onClickDel }) => {
return(
    <section className='functions'>
    <Button type={"button-long-text"} text={"Clear"} clickHandler={onClickClear}/>
    <Button text="&larr;" clickHandler={onClickDel}/>
    </section>
    );
};

Functions.propTypes = {
    onClickClear: PropTypes.func.isRequired,
    onClickDel: PropTypes.func.isRequired
};

export default Functions;