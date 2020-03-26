import {ListElement} from "./ListElement";
import * as React from "react";
import axios from "axios";

export const List = () => {

    axios.get("https://restcountries-v1.p.rapidapi.com/all", {
        headers: {"x-rapidapi-key": "8a387081fdmsh16108e3f20fbbb2p19d786jsn00c7da8e2a84"}
    })
        .then((response) => console.log(response));

    return <>
        <ListElement name={"Brazylia"}/>
        <ListElement name={"Polska"}/>
        <ListElement name={"Afganistan"}/>
        </>
};