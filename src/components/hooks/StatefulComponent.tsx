import {useEffect, useState} from "react";
import * as React from "react";
import useFakeTimers = jest.useFakeTimers;

// The Effect Hook lets you perform side effects in function components:

export function StatefulComponent() {
    const [count, setCount] = useState(0);
    const [testFlag, setTestFlag] = useState<boolean>(false);

    useEffect(() => {
        console.log("Useeffect runs");
    });

    useEffect(() => {
        console.log("Empty use effect runs");
    }, []);

    useEffect(() => {
        console.log("count changed");
    }, [count]);

    useEffect(() => {
        console.log("testFlag changed");
    }, [testFlag]);

    useEffect(() => {
        console.log("both changed ? ");
    }, [testFlag, count]);

    return (
        <>
            <div>{count}</div>
            <div>
                <button onClick={() => setCount(count + 1)}>push it</button>
            </div>
            <div>{testFlag ? "true" : "false"}</div>
            <button onClick={() => setTestFlag(!testFlag)}>Change to {!testFlag ? "true" : "false"}</button>
        </>
    )
}