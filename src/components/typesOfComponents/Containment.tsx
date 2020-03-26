import {red} from "color-name";
import * as React from "react";

export const RedContainment = (props) =>
    <div style={{color: 'red'}}>
        {props.children}
    </div>