import React, { FC, useState, useEffect, useContext, createContext } from "react"

import useContainer from './useContainer'

const Context = createContext<TimeContext>([0, () => { }]);

const Provider: FC = ({ children }) => {
	const [state, setState] = useContainer()
	const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);

	useEffect(() => {
		if (intervalID == null) {
			setIntervalID(setInterval(() => {
				setState((new Date()).getTime());
			}, 1000));
		}

		return () => {
			if (intervalID) {
				clearInterval(intervalID);
				setIntervalID(null);
			}
		}
	});

	return (
		<Context.Provider value={[state, setState]}>
			{children}
		</Context.Provider>
	)
}

const __useState = () => {
	const [state, dispatch] = useContext(Context);
	return [state, dispatch];
}

export default __useState;
export { Context, Provider };