import React from "react";
import { useDispatch } from "react-redux";
import { feedAnimals } from "../features/animal";

const FeedAnimals = () => {

    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => {dispatch(feedAnimals())}}>FeedAnimals</button>
        </div>
    )
};

export default FeedAnimals;