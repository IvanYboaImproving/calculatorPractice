import PropTypes from 'prop-types'
import Button from './Button';
import '../styles/App.css'

const MathOperations = ({ onClickOperation, onClickEqual }) => {
    return (
        <section className='math-operations'>
        <Button text={'+'} clickHandler={onClickOperation}/>
        <Button text={'-'} clickHandler={onClickOperation}/>
        <Button text={'*'} clickHandler={onClickOperation}/>
        <Button text={'/'} clickHandler={onClickOperation}/>
        <Button aidi={"equal"} text={'='} clickHandler={onClickEqual}/>
        </section>
    );
};

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations;