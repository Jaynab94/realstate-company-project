import { FaChartArea, FaDollarSign, FaLocationArrow } from "react-icons/fa6";
import 'animate.css';
import { Link } from "react-router-dom";


const Card = ({ card }) => {
    // console.log(card)
    const { image, description, status, estate_title, price, area, location, facilities,id } = card;




    return (
        <div className="card bg-base-100 shadow-xl animate__animated animate__fadeInTopLeft">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="flex">
                <div className="bg-red-200 font-semibold border-black border-b-4    rounded-md mr- shadow-2xl border-b-4  p-2 mt-2 ml-4">{price}</div>
                <div className="bg-red-200 font-semibold border-black border-b-4  rounded-md mr- shadow-2xl border-b-4  p-2 mt-2 ml-4">{area}</div>
                <div className="bg-red-200 font-semibold border-black border-b-4  flex justify-center gap-2 rounded-md mr- shadow-2xl border-b-4  p-2 mt-2 ml-4"><FaLocationArrow className="text-black"></FaLocationArrow>{location}</div>

            </div>

            <div className="card-body">

                <h2 className="flex font-bold text-lg  items-center font-serif gap-4 ">

                    {estate_title}
                    <div className="bg-secondary p-2 text-white font-bold font-serif rounded-full ">{status}</div>


                </h2>
                <p className="font-semibold">{description}</p>
                <div className=" mt-2 flex  ">
                    {
                        facilities.map((facility, index) => {
                            return (
                                <p className="bg-red-200 font-semibold p-2 rounded-md mr-6 shadow-2xl border-b-4 border-black" key={index}>
                                    {facility}
                                </p>
                            )
                        })
                    }
                </div>
                <div className="mt-4 flex  justify-end ">
                    <button className="bg-red-200 p-3 btn btn-ghost text-black  font-bold font-serif rounded-full border-black border-b-4  "><Link to={`/cards/${id}`}>View Property</Link></button>

                </div>
            </div>
        </div>
    );
};

export default Card;