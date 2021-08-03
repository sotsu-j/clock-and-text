import { useState, useEffect } from 'react';
import { FC } from 'react';

import { StyledClock } from './style';
import useTime from './useTime';;

export const Clock: FC<{ size?: 'small' | 'large' }> = ({ size = 'large' }) => {
    const [{ hours, minutes, seconds }, setState] = useState({ hours: '00', minutes: '00', seconds: '00' });
    const [time] = useTime();

    useEffect(() => {
        setState({
            hours: `0${time.getHours()}`.slice(-2),
            minutes: `0${time.getMinutes()}`.slice(-2),
            seconds: `0${time.getSeconds()}`.slice(-2),
        })
    }, [time]);

    return (
        <StyledClock size={size}>
            {hours}:{minutes}:{seconds}
        </StyledClock>
    )
}