import React from "react";
import Lab3a31View from "./Assignment31View";
import useLevelStore from "../../../../Model/frontEndStore";
import {useEffect} from "react";
import {ReactComponent as LogoBookmark} from "../../bookmark.svg";
import {ReactComponent as LogoBookmarkFilled} from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";

function Lab3a31() {
    const currentLevel = useLevelStore((state) => state.currentLevel);
    const addPinned = useLevelStore((state) => state.addPinned);
    const removePinned = useLevelStore((state) => state.removePinned);
    const getPinned = useLevelStore((state) => state.pinnedTheory);
    //update this variable if using this as template!!
    const contentName = "Stringbuilder";
    const thisLevel = 31;
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

    const preMadeText = `import java.util.Scanner;

class Progman
{  
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String secretword = scanner.next();

        // Create a StringBuilder object

        // Append "Hello " to the StringBuilder

        // Insert the secretword at index 6       

        // Replace the substring at index 0-5 with "Hi"

        // Delete the characters at range 8-10

        // Append the char '!' to the StringBuilder

        // Convert the StringBuilder to a String and print it
        
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
            <Lab3a31View

                addPinned={addToPinned}
                preMadeText={preMadeText}
                disabled={status}
                thisLevel={thisLevel}
                svg={isFilled}
            ></Lab3a31View>
        </div>
    );
}

export default Lab3a31;