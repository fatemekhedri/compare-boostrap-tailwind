import "./App.css";

function GridGallery() {
  return (
      <>
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
      </div>
      <div className="flex flex-row mt-3">
        <div className="  basis-1/4 bg-rose-300 h-32">
          <span className="rounded bg-yellow-300 p-4">1</span>
        </div>
        <div className="mx-4 basis-1/4 bg-rose-300 h-32">
          <span className="rounded bg-yellow-300 p-4">2</span>
        </div>
        <div className="  basis-1/6 bg-rose-300 h-32">
          <span className="rounded bg-yellow-300 p-4">3</span>
        </div>
      </div>
    </div>
    <div>
      <h1>Gallery grid</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="gap-4 grid bg-rose-300 grid-cols-2">
          <span className="rounded bg-yellow-300 text-4xl p-4">1</span>
        </div>
        <div className="gap-4 grid bg-rose-300 grid-cols-2 ">
          <span className="rounded bg-yellow-300 p-4">2</span>
        </div>
        <div className="gap-4 grid bg-rose-300 grid-cols-2">
          <span className="rounded bg-yellow-300 p-4">3</span>
        </div>
        <div className="gap-4 grid bg-rose-300 grid-cols-2">
          <span className="rounded bg-yellow-300 p-4">4</span>
        </div>
      </div>
      <div className="flex flex-row mt-3">
        <div className="  basis-1/4 bg-rose-300 h-32">
          <span className="rounded bg-yellow-300 p-4">1</span>
        </div>
        <div className="mx-4 basis-1/4 bg-rose-300 h-32">
          <span className="rounded bg-yellow-300 p-4">2</span>
        </div>
        <div className="  basis-1/6 bg-rose-300 h-32">
          <span className="rounded bg-yellow-300 p-4">3</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default GridGallery;
