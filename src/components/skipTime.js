import React from "react";
import { useDispatch } from "react-redux";
import { skipTime } from "../features/animal";
import { updateTime } from "../features/time";

const SkipTime = () => {

    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => {dispatch(skipTime()); dispatch(updateTime())}}>SkipTime</button>
        </div>
    )
};

export default SkipTime;