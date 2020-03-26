import {FunctionComponent} from "react";
import * as React from "react";

export const ListElement: FunctionComponent<{name: string}> = ({name}) => {
    return <div>
        <p>{name}<input type={"checkbox"}/></p>
        </div>
};