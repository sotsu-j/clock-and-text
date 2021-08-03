import React, { FC, useState, useEffect } from "react";

import { styled } from '@material-ui/core/styles';
import { AppBar, Toolbar } from "@material-ui/core";
import {
    red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan,
    teal, green, lightGreen, lime, yellow, amber, orange, deepOrange,
} from '@material-ui/core/colors';
import useTime from "./useTime";

interface StyledAppBarProps {
    backgroundcolor: string;
}

const StyledAppBar = styled(AppBar)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: (props: StyledAppBarProps) => props.backgroundcolor,
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const colors = [
    red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan,
    teal, green, lightGreen, lime, yellow, amber, orange, deepOrange,
];

export const MyAppBar: FC = ({ children }) => {
    const [color, setColor] = useState<string>(red[500]);
    const [time] = useTime();

    useEffect(() => {
        setColor(colors[time.getMinutes() % 15][500]);
    }, [time]);

    return (
        <StyledAppBar position="static" color="inherit" backgroundcolor={color}>
            <StyledToolbar>
                {children}
            </StyledToolbar>
        </StyledAppBar>
    );
}