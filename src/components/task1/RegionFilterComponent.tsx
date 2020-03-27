import {FunctionComponent} from "react";
import * as React from "react";

export const RegionFilterComponent: FunctionComponent<{ regions: Set<string>, setRegion: (region) => void }> = ({regions, setRegion}) => {
    return <>
        <div>
        {Array.from(regions).map(region => <p onClick={() => setRegion(region)}>{region}</p>)}
        </div>
    </>
};