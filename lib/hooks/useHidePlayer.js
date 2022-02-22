import { useMobxStores } from "../../stores/store";
import { useEffect } from "react";

const useHidePlayer = (hide) => {
	const {
		uiStore: { setHidePlayer },
	} = useMobxStores();
	useEffect(() => {
		setHidePlayer(hide);
	}, [hide]);
};

export default useHidePlayer;
