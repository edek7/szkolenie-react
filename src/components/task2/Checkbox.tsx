import * as React from "react";
import {FunctionComponent, useEffect, useState} from "react";

export const Checkbox: FunctionComponent<{}> = ({}) => {

    const [value, setValue] = useState<boolean>(false);

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <>
            <input type={"checkbox"}
                   checked={value}
                   onChange={() => setValue(!value)}/>
        </>
    )
};