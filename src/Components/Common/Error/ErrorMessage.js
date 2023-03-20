import "./ErrorMessage.css";

export default function ErrorMessage({ setErrorState, errorState, setSearchState }) {
  function handleClose() {
    setErrorState(false);
    setSearchState("kittens");
  }

    if(errorState === true) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
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
