import * as React from "react";
import {FunctionComponent} from "react";

export const FilterComponent: FunctionComponent<{searchPhrase: string, onChangePhrase: (phrase: string) => void}> = ({searchPhrase, onChangePhrase}) => {
    return <>
        <label>Search</label>
        <input value={searchPhrase} type={"type"} onChange={event => onChangePhrase(event.target.value)}/>
    </>
};