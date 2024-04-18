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
            <div className="grid lg:grid-cols-3 gap-4 p-2">

                {
                    
                   cards.map(card=><Card key={card.id} card={card}></Card>)
                        


                }
            </div>

        </div>
    );
};

export default Home;