import "./App.css";

function FlexGallery() {
  return (
    <div>
      <h1>Flex Gallery</h1>
      <div className="flex">
        <div className="m-3 flex bg-emerald-100 justify-center items-center box-size-gallery ">
          <span className="rounded bg-emerald-500 p-4">1</span>
        </div>
        <div className="m-3 flex bg-emerald-100 justify-center items-center box-size-gallery">
          <span className="rounded bg-emerald-500 p-4">2</span>
        </div>
        <div className="m-3 flex bg-emerald-100 justify-center items-center box-size-gallery">
          <span className="rounded bg-emerald-500 p-4">3</span>
        </div>
        <div className="m-3 flex bg-emerald-100 justify-center items-center box-size-gallery">
          <span className="rounded bg-emerald-500 p-4">4</span>
        </div>
        <div className="m-3 flex bg-emerald-100 justify-center items-center box-size-gallery">
          <span className="rounded bg-emerald-500 p-4">5</span>
        </div>
      </div>
    </div>
  );
}

export default FlexGallery;
