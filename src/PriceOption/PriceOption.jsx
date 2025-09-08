import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name,price,features,id} = option;
    return (
        <div className='rounded-lg bg-blue-500 shadow-sm text-white p-8 mt-6 flex flex-col'>
        
        <h2>

           <span className="text-5xl">{price}</span>
           <span className='text-xl'>/mon</span>
         </h2>

         <h2>
            <span className='text-xl'>{name}</span>
         </h2>
         
           <div className='flex-grow'>
           {
                features.map((feature) => <Feature key={feature.id} feature={feature}></Feature>)
            }
           </div>

         <div className='bg-yellow-500   rounded-lg p-2 mt-6 grid-flow-col font-bold
         text-center'>Bye Now</div>

        </div>
    );
};
PriceOption.propTypes ={
    option:PropTypes.object
}
export default PriceOption;