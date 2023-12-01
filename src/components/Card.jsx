import PropTypes from "prop-types";

export default function Card({ children }) {
    return (
        <div className="w-full md:w-96 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl drop-shadow-lg text-center">
            <div className="p-5 overflow-hidden text-white">
                {children}
            </div>
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}