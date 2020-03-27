import {FunctionComponent} from "react";
import * as React from "react";
import {Checkbox} from "../task2/Checkbox";

export const ListElement: FunctionComponent<{name: string}> = ({name}) => {
    return <div>
        <p>{name}<Checkbox /></p>
        </div>
};