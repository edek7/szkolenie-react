import {ListElement} from "./ListElement";
import * as React from "react";
import axios from "axios";
import {useEffect, useState} from "react";

export const List = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
       axios.get("https://restcountries-v1.p.rapidapi.com/all", {
           headers: {"x-rapidapi-key": "8a387081fdmsh16108e3f20fbbb2p19d786jsn00c7da8e2a84"}
       })
           .then(value => setList(value.data));
    }, []);

    console.log(list);

    return <>
        {list.map(country => {
            return <ListElement name={country.name}/>
        })}
        </>
};