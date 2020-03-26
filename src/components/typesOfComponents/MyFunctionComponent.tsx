// function expression

import {FunctionComponent} from "react";

type NameProps = {
    name: string,
    surname: string
}

const MyFunctionComponent = ({name, surname}: NameProps) =>
    <h1>{name}, {surname}</h1>

export const MyFunctionComponent2: FunctionComponent<NameProps> = ({name, surname}) => <button>{name} + {surname}</button>

export const MyFunctionComponent3: FunctionComponent<{name: string, surname: string, age: number}> = ({name, surname, age}) =>
    <h1>{name}, {surname}, {age}</h1>

export {MyFunctionComponent}