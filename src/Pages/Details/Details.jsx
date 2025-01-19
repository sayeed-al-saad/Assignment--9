import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { PiMapPinArea } from "react-icons/pi";
import { IoIosPricetag } from "react-icons/io";
import { GrStatusGoodSmall } from "react-icons/gr";


const Details = () => {

    const {id} = useParams();
    const categories = useLoaderData();

    
    
   const idInt = parseInt(id);
   const category = categories.find(category => category.id === idInt )

    return (
        <div className="mx-10 my-5">
            <div className="grid grid-cols-4 gap-12">
                <div className="col-span-2">
                    <img className="object-cover rounded-md" src={category.image} alt="" />
                </div>
                <div className="w-full flex flex-col col-span-2 justify-center items-center text-left">
                    <div className=" text-left space-y-2">
                    <h2 className="text-left text-4xl font-extrabold text-warning">{category.estate_title}</h2>
                    <p className="w-full">{category.description}</p>
                    </div>
                </div>
            </div>
            <div className="my-10 flex justify-evenly">
                <div className="flex justify-center items-center gap-2 shadow-sm shadow-gray-800  p-5 rounded-xl hover:shadow-2xl">
                <i className="text-3xl text-warning"><FaLocationDot /></i>
                <p className="text-2xl text-warning font-semibold">{category.location}</p>
                </div>
                <div className="flex justify-center items-center gap-2 shadow-sm shadow-gray-800 p-5 rounded-xl hover:shadow-2xl ">
                <i className="text-3xl text-warning"><PiMapPinArea /></i>
                <p className="text-2xl text-warning font-semibold">{category.area}</p>
                </div>
                <div className="flex justify-center items-center gap-2 shadow-sm p-5 shadow-gray-800  rounded-xl hover:shadow-2xl">
                <i className="text-3xl text-warning"><IoIosPricetag /></i>
                <p className="text-2xl text-warning font-semibold">{category.price}</p>
                </div>
                <div className="flex justify-center items-center gap-2 shadow-sm p-5 shadow-gray-800  rounded-xl hover:shadow-2xl">
                <i className="text-3xl text-warning"><GrStatusGoodSmall /></i>
                <p className="text-2xl text-warning font-semibold">{category.status}</p>
                </div>

            </div>
        </div>
    );
};

export default Details;