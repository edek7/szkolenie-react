import {ListElement} from "./ListElement";
import * as React from "react";
import axios from "axios";

export const List = () => {

    const list = ["Brazylia", "Polska", "Grecja"];

    return <>
        {list.map(country => {
            return <ListElement name={country}/>
        })}
        </>
};