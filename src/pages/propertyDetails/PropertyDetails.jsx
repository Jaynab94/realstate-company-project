
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const card = cards.find(card => card.id === idInt);
    console.log(card);

    return (
        <div>
            
            <div>
                <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={card.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold bg-gray-600 p-6 sm:text-3xl">{card.estate_title}</a>
                                <button className="bg-red-200 font-semibold p-2 ml-4 rounded-md mr-6 shadow-2xl border-b-4 border-black">{card.status}</button>


                            </div>
                            <div className="text-lg font-sans">
                                <p>{card.details}</p>
                            </div>

                            <Link to={'/'}><button><IoArrowBack className="text-6xl mt-6 bg-red-200  p-2 ml-4 rounded-md  shadow-2xl border-b-4"></IoArrowBack></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PropertyDetails;