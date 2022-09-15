import PropTypes from 'prop-types'

const Result = ( { value } ) => {
    // INSTEAD OF DESTRUCTURING DE OBJECT DOWN HERE 
    // WE DO IT IN THE PARAMETERS INSTEAD OF (PROPS)
    // WE PUT THE PROPS AS A PARAMETER 
    //const { value } = props;
    return (
        <div className='result'>
            {value}
        </div>
    );
};

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value:"0"
}

export default Result;