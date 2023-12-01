import PropTypes from 'prop-types'
export default function Textarea({ ...props }) {
    return (
        <>
            <div className='border border-dashed rounded-lg mb-3 p-3'>
                {props.text}
            </div>
        </>
    )
}

Textarea.propTypes = {
    text: PropTypes.string
}