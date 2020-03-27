import * as React from "react";
import {render} from "react-dom";
import {Specialization} from "./components/typesOfComponents/Specialization";
import {List} from "./components/task1/List";

const rootEl = document.getElementById("root");

render(
    <List/>,
    rootEl,
);
