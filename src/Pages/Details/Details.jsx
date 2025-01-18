import { useLoaderData, useParams } from "react-router-dom";



const Details = () => {
    const categories = useLoaderData();

    const {id} = useParams();
    
   const idInt = parseInt(id);
   const category = categories.find(category => category.id === idInt )

    return (
        <div>
            <div className="flex">
                <div className="w-full">
                    <img src={category.image} alt="" />
                </div>
                <div>
                    <h2>{category.estate_title}</h2>
                    <p>{category.description}</p>
                </div>
            </div>
            <div>
                <div><i></i></div>
                <div><i></i></div>
                <div><i></i></div>
                <div><i></i></div>
            </div>
        </div>
    );
};

export default Details;