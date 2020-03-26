import {useState} from "react";
import * as React from "react";

export function StatefulComponent() {
    const [count, setCount] = useState(0);
    const [testFlag, setTestFlag] = useState<boolean>(false);

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