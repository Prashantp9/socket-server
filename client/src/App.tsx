import "stylesheets/themes.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CommandPallet from "components/CommandPallet";
import Footer from "components/Footer";
import Header from "components/Header";
import MultiPlayerHeader from "components/MultiPlayerHeader";
import Result from "components/Result";
import { State } from "store/reducer";
import Test from "components/Test";
import { recordTest } from "helpers/recordTest";
import { setTimerId } from "store/actions";
import useSocketHook from "customHooks/useSetupHook";

export default function App() {
    useSocketHook();

    const {
        time: { timerId, timer },
        word: { currWord, typedWord, activeWordRef },
    } = useSelector((state: State) => state);
    const dispatch = useDispatch();
    const [showPallet, setShowPallet] = useState(false);

    useEffect(() => {
        document.onkeydown = (e) => {
            if (e.ctrlKey && e.key === "k") {
                setShowPallet((s) => !s);
                e.preventDefault();
            } else if (
                e.key.length === 1 ||
                e.key === "Backspace" ||
                e.key === "Tab"
            ) {
                recordTest(e.key, e.ctrlKey);
                e.preventDefault();
            }
        };
        return () => {
            document.onkeydown = null;
        };
    }, [dispatch]);

    useEffect(() => {
        let idx = typedWord.length - 1;
        const currWordEl = activeWordRef?.current!;
        if (currWordEl) {
            currWordEl.children[idx + 1].classList.add(
                currWord[idx] !== typedWord[idx] ? "wrong" : "right"
            );
        }
    }, [currWord, typedWord, activeWordRef]);

    useEffect(() => {
        let idx = typedWord.length;
        const currWordEl = activeWordRef?.current!;
        if (currWordEl && idx < currWord.length)
            currWordEl.children[idx + 1].classList.remove("wrong", "right");
    }, [currWord.length, typedWord, activeWordRef]);

    useEffect(() => {
        if (!timer && timerId) {
            clearInterval(timerId);
            dispatch(setTimerId(null));
        }
    }, [dispatch, timer, timerId]);

    return (
        <>
            <Header />
            {/* <MultiPlayerHeader /> */}
            {showPallet && <CommandPallet setShowPallet={setShowPallet} />}
            {timer ? <Test /> : <Result />}
            {/* <Footer /> */}
        </>
    );
}
