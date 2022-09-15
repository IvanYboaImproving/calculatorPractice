import PropTypes from 'prop-types'

const Button = ({ aidi, type, text, clickHandler }) => {
    return(
        <button id={aidi} className = {type} onClick = {() => {
            clickHandler(text);
        }}>
            <span>{ text }</span>
        </button>
    );
};

Button.propTypes = {
    aidi: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;