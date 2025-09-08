import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "price": 99.99,
          "features": ["Unlimited calls",
            "Unlimited calls",
          ],
          "name": "Basic Plan"
        },
        
        {
          "id": 2,
          "price": 199.99,
          "features": ["Unlimited calls + 5GB data"],
          "name": "Standard Plan"
        },
        {
          "id": 3,
          "price": 299.99,
          "features": ["Unlimited calls + 10GB data + International"],
          "name": "Premium Plan"
        }
      
      ]
      
        

    return (
        <div className="m-6 ">

            <h2 className="text-5xl ">Best Price in the town</h2>

           <div className=" grid  md:grid-cols-3  gap-8">
           {
                priceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
            
           </div>
        
        </div>
    );
};

export default PriceOptions;