import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel";
import Hotels from "./Hotels";



const Home = () => {

    const categories = useLoaderData();
    console.log(categories)

    return (
        <div className="space-y-10 ">
            <Carousel></Carousel>
            <div className="grid gap-5 grid-cols-3 mx-10 place-items-center">
                {
                    categories.map((acategories) => (<Hotels key={acategories.id} categories={acategories} ></Hotels>))
                }
            </div>
        </div>
    );
};

export default Home;