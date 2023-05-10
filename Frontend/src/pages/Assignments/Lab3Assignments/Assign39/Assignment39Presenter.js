import React from "react";
import Lab3a39View from "./Assignment39View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import { ReactComponent as LogoBookmark } from "../../bookmark.svg";
import { ReactComponent as LogoBookmarkFilled } from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 10 Lab 2 - Nested For-Loops
function Lab3a39() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const addPinned = useLevelStore((state) => state.addPinned);
  const getPinned = useLevelStore((state) => state.pinnedTheory);
  const removePinned = useLevelStore((state) => state.removePinned);
  //update this variable if using this as template!!
  const contentName = "Delete Linkedlist";
  const thisLevel = 39;
  const [isFilled, setIsFilled] = React.useState(
      <LogoBookmarkFilled className="bookmark-icon"/>
  );

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  function scrollToTop() {
    window.scrollTo(0, 0)
  };

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


  const preMadeText = `import java.util.Scanner;  // Import the Scanner class
  import java.util.Scanner;

class Progman {
    class Node {
      //TODO: Implement the Node class

        public Node(int data) {
          //TODO: Implement the LinedList class and its methods
        }
    }

    class LinkedList {
        private Node head;

        public LinkedList() {
            this.head = null;
        }

        public void insert(int data) {
            Node newNode = new Node(data);

            if (head == null) {
                head = newNode;
            } else {
                Node current = head;
                while (current.next != null) {
                    current = current.next;
                }
                current.next = newNode;
            }
        }

        public void delete(int data) {
          //TODO: Implement the delete class
        }

        public void printLinkedList() {
            Node current = head;
            while (current != null) {
                System.out.print(current.data);
                current = current.next;
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Progman progman = new Progman();
        progman.run();
    }

    public void run() {
      Scanner scanner = new Scanner(System.in);
      int input = scanner.nextInt();
      LinkedList linkedList = new LinkedList();

        // Insert some elements into the linked list
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);
        linkedList.insert(5);

        // Delete an element from the linked list
        linkedList.delete(input);

        // Print the updated linked list
        linkedList.printLinkedList();
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
      <Progress />
      <PinnedList/>
      <TopBar></TopBar>

      <Lab3a39View
        addPinned={addToPinned}
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
        svg={isFilled}
      ></Lab3a39View>
    </div>
  );
}
export default Lab3a39;
