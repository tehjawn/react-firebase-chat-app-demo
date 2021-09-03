import { useContext } from "react";
import { AppContext } from '../AppContext';

export let ChatRoom = () => {
    let { setSignedIn } = useContext(AppContext);

    return (
        <div>
            Chat Room
            <button onClick={e => setSignedIn(false)}>Sign Out</button>
        </div>
    )
}