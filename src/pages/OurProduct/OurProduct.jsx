import { LinearGradient } from "react-text-gradients";


const OurProduct = () => {
    return (
        <div className="md:mt-20 md:mb-20">
           <h2 className="text-center text-4xl font-serif"><LinearGradient gradient={['to right','red,blue']}>Our Luxury Apartment</LinearGradient></h2>
        </div>
    );
};

export default OurProduct;