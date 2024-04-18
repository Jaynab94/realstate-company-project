import { Helmet } from "react-helmet-async";
import Slider from "../slider/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OurProduct from "../OurProduct/OurProduct";



const Home = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out-cubic',
            once: true,
            mirror: false,
            delay: 100,
            disable: false,
            offset: 100,
        });
    },[])
    
    const cards = useLoaderData();
    console.log(cards);


    return (
        <div data-aos="slide-left">

            <Helmet>
                <title>Luxe | Home</title>
            </Helmet>
            <Slider></Slider>

            <OurProduct></OurProduct>


            {/* card  */}
            <div className="grid lg:grid-cols-3 gap-4 p-2">

                {
                    
                   cards.map(card=><Card key={card.id} card={card}></Card>)
                        


                }
            </div>

        </div>
    );
};

export default Home;