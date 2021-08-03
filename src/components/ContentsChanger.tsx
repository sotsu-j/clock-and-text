import React, { FC, useState, useEffect } from "react";

import useTime from "./useTime";

export const ContentsChanger: FC<ContentsChangerProps> = ({ interval = 15000, children }) => {
    const [index, setIndex] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [time] = useTime();

    const childElements = React.Children.toArray(children);

    useEffect(() => {
        if (time.getTime() - startTime > interval) {
            setStartTime(time.getTime());
        }
    }, [time]);

    useEffect(() => {
        setIndex((index) => {
            const nextIndex = index + 1;
            return nextIndex < childElements.length ? (index + 1) : 0;
        });

        return () => { }
    }, [startTime]);

    return (
        // Toolbar, footerに色を15色つけて15分経過の目安にする
        <div>{childElements[index]}</div>
    );
}