import styled from 'styled-components'

export const StyledClock = styled.div<{ size: 'large' | 'small' }>`
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.size === 'large' ? '18vw' : '2em'};
`
