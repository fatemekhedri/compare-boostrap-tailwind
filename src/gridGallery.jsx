import "./App.css";

function GridGallery() {
  return (
    <div>
      <h1>Gallery grid</h1>
      <div className="d-flex justify-content-around col">
        <div className="col-2 p-5 bg-info d-flex justify-content-center ">
          <span className="rounded bg-danger p-4">1</span>
        </div>
        <div className="d-flex col-2  bg-info justify-content-center p-5">
          <span className="rounded-circle bg-danger p-4">2</span>
        </div>
        <div className=" d-flex col-2 bg-info justify-content-center p-5">
          <span className="rounded bg-danger p-4">3</span>
        </div>
        <div className="col-2 d-flex bg-info justify-content-center p-5">
          <span className="rounded bg-danger p-4">4</span>
        </div>
      </div>
    </div>
  );
}

export default GridGallery;
