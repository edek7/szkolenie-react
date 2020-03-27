import {ListElement} from "./ListElement";
import * as React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {FilterComponent} from "./FilterComponent";
import {RegionFilterComponent} from "./RegionFilterComponent";

export const List = () => {

    const [list, setList] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    useEffect(() => {
        axios.get("https://restcountries-v1.p.rapidapi.com/all", {
            headers: {"x-rapidapi-key": "8a387081fdmsh16108e3f20fbbb2p19d786jsn00c7da8e2a84"}
        })
            .then(value => setList(value.data));
    }, []);

    console.log(list);

    return <>
        <FilterComponent searchPhrase={searchPhrase} onChangePhrase={setSearchPhrase}></FilterComponent>
        <RegionFilterComponent regions={new Set(list.map(value => value.region))} setRegion={setRegion}/>
        {list
            .filter(country => country.name.startsWith(searchPhrase))
            .filter(country => country.region === region)
            .map(country => {
                return <ListElement name={country.name}/>
            })}
    </>
};