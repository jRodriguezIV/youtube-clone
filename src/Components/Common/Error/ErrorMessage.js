import "./ErrorMessage.css";

export default function ErrorMessage({ setErrorState, setSearchState }) {
  function handleClose() {
    setErrorState(false);
    setSearchState("kittens");
  }

  return (
    <div className="modal">
      <div onClick={handleClose} className="backdrop"></div>
      <div className="modal-content">
        <button onClick={handleClose} style={{ backgroundColor: "black" }}>
          x
        </button>
        <h2>Something Went Wrong!</h2>
      </div>
    </div>
  );
}
