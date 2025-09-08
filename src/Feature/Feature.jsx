import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div className=' flex flex-col '>
            <p className="text-xl flex gap-1 items-center"> <FaCircleCheck className='text-green-500'></FaCircleCheck>{feature}</p>

        </div>

    );
};

Feature.propTypes ={
    feature:PropTypes.string
}
export default Feature;