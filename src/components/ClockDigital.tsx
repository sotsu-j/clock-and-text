import { useEffect } from 'react';
import { useState } from 'react';

import { StyledClock } from './style'

export const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);

    useEffect(() => {
        if (intervalID == null) {
            setIntervalID(setInterval(() => {
                setTime(new Date());
            }, 1000));
        }
        return () => {
            if (intervalID) {
                clearInterval(intervalID);
                setIntervalID(null);
            }
        }
    }, []);

    return (
        <StyledClock>
            {`0${time.getHours()}`.slice(-2)}:{`0${time.getMinutes()}`.slice(-2)}:{`0${time.getSeconds()}`.slice(-2)}
        </StyledClock>
    )
}