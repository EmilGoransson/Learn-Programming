import React from "react";
import Lab3a29View from "./Assignment29View";
import useLevelStore from "../../../../Model/frontEndStore";
import {useEffect} from "react";
import {ReactComponent as LogoBookmark} from "../../bookmark.svg";
import {ReactComponent as LogoBookmarkFilled} from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";

function Lab3a29() {
    const currentLevel = useLevelStore((state) => state.currentLevel);
    const addPinned = useLevelStore((state) => state.addPinned);
    const removePinned = useLevelStore((state) => state.removePinned);
    const getPinned = useLevelStore((state) => state.pinnedTheory);
    //update this variable if using this as template!!
    const contentName = "Objects";
    const thisLevel = 29;
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

    class Progman {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int age = scanner.nextInt();
            
            //Create a new Person object called "person" with the age from scanner


            //Call the haveBirthday() method with the created person


            //Prints the result
            System.out.print("Happy birthday! You are now " + person.getAge() + " years old.");
        }
    }
    
    //A class called Person
    class Person {
        //Create instance variable for age

        
        //Create a constructor here


        //Create the getAge() method here that returns the age of the Person


        //Create the haveBirthday() method here that adds 1 to the age of the Person


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
            <Lab3a29View
                addPinned={addToPinned}
                preMadeText={preMadeText}
                disabled={status}
                thisLevel={thisLevel}
                svg={isFilled}
            ></Lab3a29View>
        </div>
    );
}

export default Lab3a29;