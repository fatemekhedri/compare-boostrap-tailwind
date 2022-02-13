import "./App.css";

function FlexGallery() {
  return (
    <div>
      <h1>Flex Gallery</h1>
      <div className="d-flex">
        <div className="m-3 d-flex justify-content-center p-5">
          <span className="rounded bg-danger p-4">1</span>
        </div>
        <div className="m-3 d-flex justify-content-center p-5">
          <span className="rounded bg-danger p-4">2</span>
        </div>
        <div className="m-3 d-flex justify-content-center p-5">
          <span className="rounded bg-danger p-4">3</span>
        </div>
        <div className="m-3 d-flex justify-content-center p-5">
          <span className="rounded bg-danger p-4">4</span>
        </div>
        <div className="m-3 d-flex justify-content-center p-5">
          <span className="rounded bg-danger p-4">5</span>
        </div>
      </div>
    </div>
  );
}

export default FlexGallery;
