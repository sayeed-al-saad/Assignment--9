import { Link } from "react-router-dom";


const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full h-[85vh] relative">
  <div id="item1" className="carousel-item w-full">
    <div className="w-full h-full absolute flex flex-col justify-center items-center">
       <Link to="/login"> <button className="btn btn-warning btn-outline">LET US GUIDE YOUR HOME</button></Link>
    <p className="text-5xl font-bold text-gray-100 text-center">Discover a place you'll <br />
    love to live</p>
    </div>
    <img
      src="public/assets/image/pexels-donaldtong94-189333.jpg"
      className="w-full object-cover " />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="public/assets/image/pexels-pixabay-258154.jpg"
      className="w-full object-cover" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="public/assets/image/pexels-quark-studio-1159039-2506990.jpg"
      className="w-full object-cover" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="public/assets/image/pexels-fotoaibe-1743229.jpg"
      className="w-full  object-cover" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Carousel;