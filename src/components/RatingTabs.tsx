import { useEffect, useRef, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { User } from "../model/types";
import { UserList } from "./UserList";
import { usePrevious } from "../model/hooks";

interface IRatingTabsProps {
    diligentRatingList: User[];
    suspiciousRatingList: User[];
    onIncreaseRating: (arg0: number) => void;
    onDecreaseRating: (arg0: number) => void;
    onResetRating: (arg0: number) => void;
}

export const RatingTabs = (props: IRatingTabsProps) => {
    const [key, setKey] = useState("diligent");

    const prevDiligentRatingLength = usePrevious(
        props.diligentRatingList.length
    );
    const prevSuspiciousRatingLength = usePrevious(
        props.suspiciousRatingList.length
    );

    useEffect(() => {
        if (
            prevDiligentRatingLength &&
            props.diligentRatingList.length > prevDiligentRatingLength
        ) {
            setKey("diligent");
        }
        if (
            prevSuspiciousRatingLength &&
            props.suspiciousRatingList.length > prevSuspiciousRatingLength
        ) {
            setKey("suspicious");
        }
    }, [props.diligentRatingList.length, props.suspiciousRatingList.length]);

    return (
        <Tabs activeKey={key} onSelect={(k) => setKey(k!)}>
            <Tab
                eventKey="diligent"
                title="Diligent"
                disabled={props.diligentRatingList.length === 0 ? true : false}
            >
                <UserList
                    userRatingList={props.diligentRatingList}
                    onIncreaseRating={props.onIncreaseRating}
                    onDecreaseRating={props.onDecreaseRating}
                    onResetRating={props.onResetRating}
                />
            </Tab>
            <Tab
                eventKey="suspicious"
                title="Suspicious"
                disabled={
                    props.suspiciousRatingList.length === 0 ? true : false
                }
            >
                <UserList
                    userRatingList={props.suspiciousRatingList}
                    onIncreaseRating={props.onIncreaseRating}
                    onDecreaseRating={props.onDecreaseRating}
                    onResetRating={props.onResetRating}
                />
            </Tab>
        </Tabs>
    );
};
function useHasChanged(val1: any) {
    throw new Error("Function not implemented.");
}
function usePreviousValue(length: number) {
    throw new Error("Function not implemented.");
}
