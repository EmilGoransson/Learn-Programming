import React from "react";
import Lab3a32View from "./Assignment32View";
import useLevelStore from "../../../../Model/frontEndStore";
import {useEffect} from "react";
import {ReactComponent as LogoBookmark} from "../../bookmark.svg";
import {ReactComponent as LogoBookmarkFilled} from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";

function Lab3a32() {
    const currentLevel = useLevelStore((state) => state.currentLevel);
    const addPinned = useLevelStore((state) => state.addPinned);
    const removePinned = useLevelStore((state) => state.removePinned);
    const getPinned = useLevelStore((state) => state.pinnedTheory);
    //update this variable if using this as template!!
    const contentName = "Queue";
    const thisLevel = 32;
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
import java.util.NoSuchElementException;
    
    class ArrayQueue {
        private String[] queue;
        private int front;
        private int rear;
        private int size;
        private int capacity;
    
        //Complete the constructor
        public ArrayQueue(int capacity) {
            queue = new String[capacity];
        }
    
        //Complete the enqueue method hint use IllegalStateException("Queue is full!")
        public void enqueue(String item) {
            
        }
    
        //Complete the dequeue method hint use NoSuchElementException("Queue is empty!")
        public String dequeue() {
    
        }
    }
    
    /*You dont need to edit anyting in the Progman class. 
    If enqueue and dequeue works you will pass the assignment*/
    class Progman
    {  
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            ArrayQueue queue = new ArrayQueue(5);
            queue.enqueue(scanner.next());
            queue.enqueue("Apple");
            queue.enqueue("Banana");
            queue.enqueue("Cherry");
            
            System.out.print(queue.dequeue());
           
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
            <Lab3a32View
                addPinned={addToPinned}
                preMadeText={preMadeText}
                disabled={status}
                thisLevel={thisLevel}
                svg={isFilled}
            ></Lab3a32View>
        </div>
    );
}

export default Lab3a32;