import React, { FC, useState, useEffect } from "react";

import { styled } from '@material-ui/core/styles';
import { AppBar, Toolbar} from "@material-ui/core";
import {
    red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan,
    teal, green, lightGreen, lime, yellow, amber, orange, deepOrange,
} from '@material-ui/core/colors';
import useTime from "./useTime";

interface StyledAppBarProps {
    backgroundColor: string;
}


const StyledAppBar = styled(AppBar)({
    backgroundColor: (props: StyledAppBarProps) => props.backgroundColor,
});

const colors = [
    red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan,
    teal, green, lightGreen, lime, yellow, amber, orange, deepOrange,
];

export const MyAppBar = () => {
    const [color, setColor] = useState<string>(red[500]);
    const [time] = useTime();

    console.log(time)
    useEffect(() => {
        console.log(time)
        setColor(colors[time % 15][500]);
    }, [time]);

    return (
        <StyledAppBar position="static" color="inherit" backgroundColor={color}>
            <Toolbar>
            </Toolbar>
        </StyledAppBar>
    );
}