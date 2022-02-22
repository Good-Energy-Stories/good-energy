import { useMobxStores } from "../../stores/store";
import { useEffect } from "react";
import debounce from "lodash/debounce";

const useScrollMeasure = () => {
	const {
		uiStore: { updateScrollPosition },
	} = useMobxStores();
	useEffect(() => {
		window.addEventListener("scroll", updateScrollPosition);
		return () => {
			window.removeEventListener("scroll", updateScrollPosition);
		};
	}, []);
};

export default useScrollMeasure;
