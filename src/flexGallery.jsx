import "./App.css";

function FlexGallery() {
  return (
    <div>
      <h1>Flex Gallery</h1>
      <div className="d-flex">
        <div className="m-3 d-flex justify-content-center bg-warning align-items-center box-grid-size">
          <span className="rounded bg-danger p-2">1</span>
        </div>
        <div className="m-3 d-flex justify-content-center bg-warning align-items-center box-grid-size">
          <span className="rounded bg-danger p-2">2</span>
        </div>
        <div className="m-3 d-flex justify-content-center bg-warning align-items-center box-grid-size">
          <span className="rounded bg-danger p-2">3</span>
        </div>
        <div className="m-3 d-flex justify-content-center bg-warning align-items-center box-grid-size">
          <span className="rounded bg-danger p-2">4</span>
        </div>
        <div className="m-3 d-flex justify-content-center bg-warning align-items-center box-grid-size ">
          <span className="rounded bg-danger p-2">5</span>
        </div>
      </div>
    </div>
  );
}

export default FlexGallery;
