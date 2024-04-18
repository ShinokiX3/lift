import { useEffect } from "react";

const useHistoryState = (current: number, total: number) => {
    useEffect(() => {
        if (current < total) {
            window.history.pushState(null, "", `?qid=${current}`);
        } else {
            window.history.pushState(null, "", `?q=finished`);
        }

    }, [current, total]);
    
    return null;
}

export default useHistoryState;