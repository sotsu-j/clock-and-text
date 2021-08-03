import { FC } from 'react';

import { StyledClock } from './style';
import useTime from './useTime';;

export const Clock: FC<{ size?: 'small' | 'large' }> = ({ size = 'large' }) => {
    const [time] = useTime();

    return (
        <StyledClock size={size}>
            {`0${time.getHours()}`.slice(-2)}:{`0${time.getMinutes()}`.slice(-2)}:{`0${time.getSeconds()}`.slice(-2)}
        </StyledClock>
    )
}