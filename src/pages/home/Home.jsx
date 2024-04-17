import { Helmet } from "react-helmet-async";
import Slider from "../slider/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";



const Home = () => {
    
    const cards = useLoaderData();
    console.log(cards);


    return (
        <div>
            <Helmet>
                <title>Luminary | Home</title>
            </Helmet>
            <Slider></Slider>


            {/* card  */}
            <div>

                {
                   cards.map(card=><Card key={card.id} card={card}></Card>)
                        


                }
            </div>

        </div>
    );
};

export default Home;