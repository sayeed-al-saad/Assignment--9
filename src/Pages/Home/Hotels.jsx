import { Link } from "react-router-dom";

const Hotels = ({categories}) => {
    const {id, estate_title, segment_name, description, price, status, area, location, facilities, image, view_property} = categories;
    return (
        <div>
                  <div className="card bg-gray-800 w-[500px] shadow-xl ">
                <figure>
                    <img className="h-86 "
                    src= {image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {estate_title}
                    <div className="badge badge-secondary p-3 font-bold">{status}</div>
                    </h2>
                    <p>{location}</p>
                    <div className="card-actions justify-between">
                    <div className=" flex gap-4">
                    <div className="badge badge-warning p-3 font-semibold">{area}</div>
                    <div className="badge badge-warning p-3 font-semibold">{segment_name}</div>
                    </div>
                    <div className="flex items-end">
                        <Link to={`/categories/${id}`}>
                        <button className="btn btn-warning btn-outline w-30 h-8 p-2 mt-10">View Property</button>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Hotels;