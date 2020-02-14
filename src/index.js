import React from "react";
import { render } from "react-dom";

function Hi() {
    return <p>hello</p>
}
render(<Hi/>, document.getElementById("app"));
