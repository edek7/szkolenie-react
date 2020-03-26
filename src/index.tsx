import * as React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {
    SimplestComponentWithProps,
    SimplestComponent,
    TypescriptComponentWithProps, TypescriptComponentWithConditionProps
} from "./components/typesOfComponents/SimplestComponent";
import {ClassComponent} from "./components/typesOfComponents/ClassComponent";
import {
    MyFunctionComponent,
    MyFunctionComponent2,
    MyFunctionComponent3
} from "./components/typesOfComponents/MyFunctionComponent";

const rootEl = document.getElementById("root");

render(
    <MyFunctionComponent3 surname={'Jaro'} name={'Edwin'} age={25}/>,
    rootEl,
);
