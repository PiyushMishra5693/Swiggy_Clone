import { useRouteError } from "react-router-dom";
const Error = ()=>{

    const err = useRouteError()
    return (
        <div className="Eror">
            <h1> Oops !! </h1>
            <h2> An Error Occured</h2>
            <h2> {err.status}:{err.statusText}</h2>
        </div>
    )
}

export default Error;