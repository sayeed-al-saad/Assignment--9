import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel";
import Hotels from "./Hotels";



const Home = () => {

    const categories = useLoaderData();
    console.log(categories)

    return (
        <div>
            <Carousel></Carousel>
            <div className="grid grid-cols-3">
                {
                    categories.map((acategories) => (<Hotels key={acategories.id} categories={acategories} ></Hotels>))
                }
            </div>
        </div>
    );
};

export default Home;