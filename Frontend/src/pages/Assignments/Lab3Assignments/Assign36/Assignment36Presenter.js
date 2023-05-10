import React from "react";
import Lab3a6View from "./Assignment36View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 10 Lab 2 - Nested For-Loops
function Lab3a36() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //update this variable if using this as template!
  const thisLevel = 36;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `import java.util.Scanner;
import java.util.LinkedList;
class Progman
{  
    public static void main(String[] args) {
      Scanner scanner= new Scanner(System.in);
      int value=scanner.nextInt();
      LinkedList<Integer> linkedList = new LinkedList<>();
      linkedList.add(1);
      linkedList.add(value);
      linkedList.add(3);
      linkedList.add(4);
      linkedList.add(5);
      
      Node head = createLinkedList(linkedList);
      //call traverseLinkedList
      
  }
  public static Node createLinkedList(LinkedList<Integer> linkedList) {
    Node dummy = new Node(0);
    Node current = dummy;
    //use for -loop and the decalred node variables and create a linkedlist


    return dummy.next;
}

  public static void traverseLinkedList(Node head) {
    // TODO: Implement the traversal logic
}

  class Node{
    int data;
    Node next;
  }

  public Node(int data){
    this.data = data;
  }
}`;
  function IsDisabled() {
    if (thisLevel >= currentLevel) {
      setStatus([true, "next-button-gray"]);
    } else {
      setStatus([false, "button-lab-cyan "]);
    } 
  }
  useEffect(() => {
    IsDisabled();
  }, [currentLevel]);

  return (
    <div>
      <RightSideBar></RightSideBar>
      <Sidebar></Sidebar>
      <Progress />
      <PinnedList/>
      <TopBar></TopBar>

      <Lab3a6View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab3a6View>
    </div>
  );
}
export default Lab3a36;
