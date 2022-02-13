import "./App.css";

function GridGallery() {
  return (
    <div>
      <h1>Gallery grid</h1>
      <div className="flex">
        <div className="bg-rose-300  flex-initial ">
          <span className="rounded bg-yellow-300 p-4">1</span>
        </div>
        <div className=" bg-rose-300 w-32 h-32 ">
          <span className="rounded bg-yellow-300 p-4">2</span>
        </div>
        <div className="bg-rose-300  w-32 h-32 ">
          <span className="rounded bg-yellow-300 p-4">3</span>
        </div>
        <div className="w-32 bg-rose-300 h-32">
          <span className="rounded bg-yellow-300 p-4">4</span>
        </div>
        {/* <div className="m-3  w-32 h-32">
          <span className="rounded bg-yellow-300 p-4">5</span>
        </div> */}
      </div>
    </div>
  );
}

export default GridGallery;
