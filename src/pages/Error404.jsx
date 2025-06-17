import Error from "../assets/elements/error_page/Error.jsx";

function Error404() {
    return (
        <>
            <Error
            errorCode={"Error 404"}
            errorMessage="Nie znaleziono strony lub zasobu, którego szukasz."
            />
        </>
    )
}

export default Error404;