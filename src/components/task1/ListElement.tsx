import {FunctionComponent} from "react";
import * as React from "react";
import {Checkbox} from "../task2/Checkbox";

export const ListElement: FunctionComponent<{name: string, checked: boolean}> = ({name, checked}) => {
    return <div>
        <p>{name}<Checkbox value={checked} onChange={(value: boolean) => console.log(value)}/></p>
        </div>
};