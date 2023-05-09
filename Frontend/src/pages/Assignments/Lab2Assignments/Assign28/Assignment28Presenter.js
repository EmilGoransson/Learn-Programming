import React from "react";
import Lab2a28View from "./Assignment28View";
import useLevelStore from "../../../../Model/frontEndStore";
import {useEffect} from "react";
import {ReactComponent as LogoBookmark} from "../../bookmark.svg";
import {ReactComponent as LogoBookmarkFilled} from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";

function Lab2a28() {
    const currentLevel = useLevelStore((state) => state.currentLevel);
    const addPinned = useLevelStore((state) => state.addPinned);
    const removePinned = useLevelStore((state) => state.removePinned);
    const getPinned = useLevelStore((state) => state.pinnedTheory);
    //update this variable if using this as template!!
    const contentName = "Boss 1";
    const thisLevel = 28;
    const [isFilled, setIsFilled] = React.useState(
        <LogoBookmarkFilled className="bookmark-icon"/>
    );

    const [status, setStatus] = React.useState([true, "next-button-gray"]);


    function isPinned() {
        if (getPinned.includes(contentName)) {
            setIsFilled(
                <LogoBookmarkFilled className="text-textGray h-6 w-6 fill-current"/>
            );
        } else {
            setIsFilled(
                <LogoBookmark className="text-textGray h-6 w-6 fill-current"/>
            );
        }
    }

    const preMadeText = `class Progman
{  
    public static void main(String[] args) {
      System.out.print("Done");
    }
}`;

    function addToPinned() {
        if (!getPinned.includes(contentName)) {
            addPinned(contentName);
        } else {
            removePinned(contentName);
        }
    }

    function IsDisabled() {
        if (thisLevel >= currentLevel) {
            setStatus([true, "next-button-gray"]);
        } else {
            setStatus([false, "button-lab-cyan "]);
        }
    }

    useEffect(() => {
        IsDisabled();
        isPinned();
    }, [currentLevel, getPinned]);

    return (
        <div>
            <RightSideBar></RightSideBar>
            <Sidebar></Sidebar>
            <Progress/>
            <PinnedList/>
            <TopBar></TopBar>
            <Lab2a28View
                addPinned={addToPinned}
                preMadeText={preMadeText}
                disabled={status}
                thisLevel={thisLevel}
                svg={isFilled}
            ></Lab2a28View>
        </div>
    );
}

export default Lab2a28;
