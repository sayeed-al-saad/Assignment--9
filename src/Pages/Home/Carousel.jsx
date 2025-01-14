

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full h-[85vh] relative">
  <div id="item1" className="carousel-item w-full">
    <div className="w-full h-full absolute flex flex-col justify-center items-center">
        <button className="btn btn-warning btn-outline">LET US GUIDE YOUR HOME</button>
    <p className="text-5xl font-bold text-gray-100 text-center">Discover a place you'll <br />
    love to live</p>
    </div>
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
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