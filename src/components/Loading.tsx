export const Loading = () => {
  return (
    <div className="loading-map d-flex justify-content-center align-items-center flex-column vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>Espere por favor</h3>
        <span className="">Localizando...</span>
        <span className="spinner-border text-primary m-5" role="status"></span>
      </div>
    </div>
  );
};
