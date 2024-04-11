import Routing from "./Routering";
import {BrowserRouter} from "react-router-dom";
import React, {Suspense} from "react";
const withRouter = (component: () => React.ReactNode) => () => {
    return(
        <BrowserRouter>
            <Suspense fallback={<>Loading...</>}>{component()}</Suspense>
        </BrowserRouter>
    )
}
function App() {
    return (
        <>
            <Routing/>
        </>
    );
}

export default withRouter(App);
