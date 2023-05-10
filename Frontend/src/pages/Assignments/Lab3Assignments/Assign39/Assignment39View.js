import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Quiz from "../../../../Components/Quiz/quiz";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import {quizData} from "./QuizDelete-from-linkedlist";

function Lab3a39View(props) {
    return (
        <div className="mt-20">
            <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
                <h1 className="text-3xl font-bold mb-4">Delete element from a LinkedList</h1>
                <p className="mb-4">
                Linked lists are a fundamental data structure in computer science used to store and manage collections of elements.
                One common operation on linked lists is <code>deleting an element </code>from the list. In this guide, we will explore how to 
                delete an element from a linked list using pointers in Java.
           
            
                </p>
                <h2 className="text-2xl font-bold mb-4"> Implementation Steps: How to delete an Element from a LinkedList</h2>
                <p className="mb-4">
                
                <p>1.Traverse the LinkedList:</p>
                  <p>To delete an element from a linked list, we need to traverse the list and find the node containing the element 
                    to delete. During traversal, we keep track of the current node and the previous node.</p>

                <p>2.Update Pointers: </p>
                  <p>Once we find the element, we update the pointers to bypass the node we want to delete. We set the <code>next pointer of the previous 
                    node</code>  to the <code>next pointer of the current node</code> , effectively removing the current node from the list.</p>

                <p>3.Handle Special Cases:</p>
                  <p> If the element to delete <code>is the head of the linked list</code>, we need to update the <code>head to point to the next node</code>, ensuring the integrity of the list.</p>

                <p>4.Free Memory:</p>
                  <p>In Java, memory management is <code>handled by the garbage collector</code>, which automatically frees memory for objects that are no longer referenced. When deleting a node from a linked list,
                     we simply remove the reference to that node by updating the pointers, and the garbage collector will take care of freeing the memory for us.</p>

                <h2 className="text-2xl font-bold mb-4">Code Example</h2>
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
    }
}

public class LinkedListDeletionExample {
    public static void main(String[] args) {
        Node head = createLinkedList();

        System.out.println("Linked list before deletion:");
        printLinkedList(head);

        int elementToDelete = 3;
        head = deleteElement(head, elementToDelete);

        System.out.println("Linked list after deletion:");
        printLinkedList(head);
    }

    public static Node createLinkedList() {
        Node node1 = new Node(1);
        Node node2 = new Node(2);
        Node node3 = new Node(3);
        Node node4 = new Node(4);
        Node node5 = new Node(5);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;

        return node1;
    }

    public static Node deleteElement(Node head, int element) {
        // If the head node is the element to delete
        if (head != null && head.data == element) {
            Node newHead = head.next;
            head.next = null;
            return newHead;
        }

        Node current = head;
        Node previous = null;

        // Traverse the linked list to find the element
        while (current != null && current.data != element) {
            previous = current;
            current = current.next;
        }

        // If the element is found, update the pointers to delete the node
        if (current != null) {
            previous.next = current.next;
            current.next = null;
        }

        return head;
    }

    public static void printLinkedList(Node head) {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
}


`}
          </code>
        </pre>
        In this example:
        <br></br><br></br>
        1.We define a<code> Node class </code>that represents a node in the linked list. Each node has an <code>int</code> data value 
        and a reference to the next node in the list.
        <br></br><br></br>
        2.In the <code>LinkedListDeletionExample</code> class's <code>main</code> method, we start by creating a linked list by calling the <code>createLinkedList</code> method. 
        This method creates nodes with values 1, 2, 3, 4, and 5, and links them together to form a linked list.
        <br></br><br></br>
        3.We print the linked list before the deletion using the <code>printLinkedList</code> method.
        <br></br><br></br>
        4.We specify the element to delete, which in this case is 3.
        <br></br><br></br>
        5.We call the <code>deleteElement</code> method, passing the head of the linked list and the element to delete. This method handles the deletion logic.
        <br></br><br></br>
        6.Inside the <code>deleteElement</code> method, we first check if the head node itself is the element to delete. If it is, we update the head reference to point to the next node and return the new head.
        <br></br><br></br>
        7.If the element to delete is not the head node, we traverse the linked list using two pointers: <code>current</code> and <code>previous</code>. We keep track of the previous node to update the pointers after deletion.
        <br></br><br></br>
        8.While traversing, if we find the element to delete, we update the pointers to bypass the current node. We set <code>previous.next</code> to <code>current.next</code> to skip the current node and disconnect it from the linked list.
        <br></br><br></br>
        9.Finally, we return the head of the modified linked list.
        <br></br><br></br>
        10.After the deletion, we print the linked list again using the <code>printLinkedList</code> method to see the updated list.
        <br></br><br></br>
        The code demonstrates how to delete an element from a singly linked list. It handles the special case where <code>the element to delete is the head node</code> and provides a general solution for deleting any other node in the list.
                </p>

                <h2 className="text-2xl font-bold mb-4"> Summary </h2>
                <p className="mb-4">
                Deleting an element from a linked list using pointers involves traversing the list to find the element to delete and updating the pointers to remove it from the list. 
                If the element to delete is the head node, we update the head reference to the next node. Otherwise, we traverse the list with two pointers, keeping track of the previous node.
                When we find the element, we update the pointers to bypass the current node, 
                effectively deleting it. This process ensures that memory is properly freed and avoids memory leaks.
                    </p>
               
           
                <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
                <Quiz quizData={quizData}/>
                                               
                <h2 className="text-2xl font-bold mb-4">Exercise</h2>
               
                <p className="mb-4">

                Complete the code by implementing the <code>Node</code> and <code>LinkedList </code>classes, and the <code>delete</code> method in the<code> LinkedList</code>
                 class. Test your code by inserting some elements into the linked list and deleting an element. Finally, 
                 print the updated linked list to verify the deletion.
                 <br></br><br></br>
            1. Implement a class Node with the following attributes:
              <code> data (integer)</code> to store the value of the node.
              <code> next (Node) </code>to store the reference to the next node in the linked list. 
            <br></br><br></br>
            2. Implement a class LinkedList with the following methods:
             <code>insert(int data)</code> to insert a new node with the given data at the end of the linked list.
             <code>delete(int data)</code> to delete the node with the given data from the linked list.
            <br></br><br></br>
            3.Implement the <code>delete</code> method by traversing the linked list and updating the pointers to remove
             the node with the specified data.
            <br></br><br></br>
            4.Run the program.
            
</p>    
       
                    <CodeRunner
                        testCases={"1245"}
                        testCase2={"1235"}
                        preMadeText={props.preMadeText}
                        input1={3}
                        input2={4}
                        shouldIncrement={true}
                        thisLevel={props.thisLevel}
                    />
                
                <div>
                    <Link to={`/Lab3/10`}>
                        <button className="next-button text-black">Prev</button>
                    </Link>
                    <Link to={`/Lab3/12`}>
                        <button className={props.disabled[1]} disabled={props.disabled[0]}
                                onClick={() => window.scrollTo(0, 0)}>
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Lab3a39View;
