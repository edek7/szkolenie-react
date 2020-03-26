import {FunctionComponent} from "react";
import * as React from "react";

export const Specialization = () => {
    return <NameSurnamePanel name={"Edwin"} surname={"Jaro"}/>
};

export const NameSurnamePanel: FunctionComponent<{ name: string, surname: string }> = ({name, surname}) => {
    return <>
        <div>{name}</div>
        <b>{surname}</b></>
};