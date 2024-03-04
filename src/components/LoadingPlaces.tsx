export const LoadingPlaces = () => {
    return (
        <div
        className="alert alert-primary mt-4 d-flex justify-content-center align-items-center flex-column"
        role="alert"
        >
            <p className="text-center">Buscando...</p>
            <div className="spinner-border text-primary" role="status"></div>
        </div>
    );
};
