import Error from "../assets/elements/error_page/Error.jsx";

function Error401() {
    return (
        <>
            <Error
                errorCode={"Error 401"}
                errorMessage="Aby uzyskać dostęp, zaloguj się lub podaj poprawne dane logowania"
            />
        </>
    )
}

export default Error401;