import React, { FC, useState,useEffect } from "react";

export const ContentsChanger: FC<ContentsChangerProps> = ({ interval = 15000, children }) => {
    const [index, setIndex] = useState(0);
    const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);

    const childElements = React.Children.toArray(children);

    useEffect(() => {
        if (intervalID == null) {
            setIntervalID(setInterval(() => {
                setIndex((index) => {
                    const nextIndex = index + 1;
                    return nextIndex < childElements.length ? (index + 1) : 0;
                })
            }, interval));
        }

        return () => {
            if (intervalID) {
                clearInterval(intervalID);
                setIntervalID(null);
            }
        }
     });

    return (
        // Toolbar, footerに色を15色つけて15分経過の目安にする
        <div>{childElements[index]}</div>
    );
}