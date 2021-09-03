import { useContext } from "react";
import { AppContext } from '../AppContext';

export let SignIn = () => {
    let { setSignedIn } = useContext(AppContext);

    return (
        <div>
            Sign In
            <button onClick={e => setSignedIn(true)}>Sign In</button>
        </div>
    )
}