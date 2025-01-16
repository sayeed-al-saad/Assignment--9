import { Link } from "react-router-dom";

const Hotels = ({categories}) => {
    const {id, estate_title, segment_name, description, price, status, area, location, facilities, image, view_property} = categories;
    return (
        <div>
                  <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src= {image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {estate_title}
                    <div className="badge badge-secondary p-3 font-bold">{price}</div>
                    </h2>
                    <p>{location}</p>
                    <div className="card-actions justify-between">
                    <div className=" flex gap-4">
                    <div className="badge badge-warning p-3 font-semibold">{area}</div>
                    <div className="badge badge-warning p-3 font-semibold">{status}</div>
                    </div>
                    <div className="flex items-end">
                        <Link to={`/categories/${id}`}>
                        <button className="btn btn-warning btn-outline w-30 h-8 p-2 mt-10">View Details</button>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Hotels;