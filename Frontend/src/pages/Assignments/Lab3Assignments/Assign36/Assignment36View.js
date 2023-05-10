import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Quiz from "../../../../Components/Quiz/quiz";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import {quizData} from "./Quizgå-igenom-linkedlist";

function Lab3a36View(props) {
    return (
        <div className="mt-20">
            <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
                <h1 className="text-3xl font-bold mb-4">Traverse a LinkedList in Java using Pointers</h1>
                <p className="mb-4">
                In Java, a <code>LinkedList</code> is a data structure that allows <code>dynamic insertion and removal</code> of elements.
                 Traversing a LinkedList involves visiting each element in the list to perform a specific operation, 
                 such as printing or modifying the values.
           
            
                </p>
                <h2 className="text-2xl font-bold mb-4"> Implementation Steps: How to traverse a LinkedList</h2>
                <p className="mb-4">
                
                <p>1.Create a LinkedList:</p>
                  <p>Declare and instantiate a LinkedList object to store the elements.</p>

                <p>2.Add elements to the LinkedList: </p>
                  <p>Use the <code>add() method </code>to insert elements into the LinkedList.</p>

                <p>3.Define a Node class:</p>
                  <p>Create a <code>nested Node class </code>to represent the elements in the LinkedList.</p>
                  <p>Each node contains a <code>data field</code> and a <code>next field</code> that points to the next node in the list.</p>

                <p>4.Traverse the LinkedList using a pointer:</p>
                  <p>Initialize a pointer variable <code>(current) </code>and set it to the first element using the <code>getFirst()</code> method.</p>
                  <p>Enter a while loop that iterates until the pointer reaches the <code>end of the list (null)</code>.</p>
                  <p>Perform the desired operation on the current element (e.g., printing).</p>
                  <p>Move the pointer to the next element by assigning <code>current.next to current</code>.</p>

                <h2 className="text-2xl font-bold mb-4">Code Example</h2>
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`import java.util.LinkedList;

public class LinkedListTraversalExample {
    public static void main(String[] args) {
        // Create a LinkedList
        LinkedList<String> linkedList = new LinkedList<>();

        // Add elements to the LinkedList
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Orange");

        // Traverse the LinkedList using a pointer
        Node current = linkedList.getFirst(); // Set the pointer to the first element

        while (current != null) {
            // Perform an operation on the current element
            System.out.println(current.data);

            // Move the pointer to the next element
            current = current.next;
        }
    }

    // Node class to represent elements in the LinkedList
    static class Node {
        String data;
        Node next;

        Node(String data) {
            this.data = data;
            this.next = null;
        }
    }
}

`}
          </code>
        </pre>
        In this code, we create a LinkedList and add some elements to it. Then, we define a Node class to represent the elements, 
        which consists of a data field and a 
        next field pointing to the next node in the list.
        <br></br>
        <br></br>
        We start traversing the LinkedList by setting the current pointer to the first element using <code>getFirst()</code> method. Then, we iterate through the list using a<code> while loop</code>. 
        Inside the loop, we perform the desired operation on the current element (printing in this case)
        and move the pointer to the next element by assigning <code>current.next to current</code>.
                </p>

                <h2 className="text-2xl font-bold mb-4"> Summary </h2>
                <p className="mb-4">
                Traversing a LinkedList using pointers in Java involves visiting each element in the list by using a pointer variable. 
                The pointer starts at the first element and moves to the next element until the end of the list is reached. This allows performing operations on each element, 
                such as printing or modifying its value. 
                By following this approach, you can effectively traverse a LinkedList and access its elements sequentially.
                    </p>
               
           
                <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
                <Quiz quizData={quizData}/>
                                               
                <h2 className="text-2xl font-bold mb-4">Exercise</h2>
               
                <p className="mb-4">
              
            1. Write a method called <code>traverseLinkedList</code> that takes the head 
            node of the LinkedList as a parameter and prints each element in the list.
            <br></br><br></br>
            2. Call the <code>traverseLinkedList</code> method with the <code>head of the LinkedList</code> to 
            print the elements
            <br></br><br></br>
            
</p>    
       
                    <CodeRunner
                        testCases={"110345"}
                        testCase2={"17345"}
                        preMadeText={props.preMadeText}
                        input1={10}
                        input2={7}
                        shouldIncrement={true}
                        thisLevel={props.thisLevel}
                    />
                
                <div>
                    <Link to={`/Lab3/7`}>
                        <button className="next-button text-black">Prev</button>
                    </Link>
                    <Link to={`/Lab3/9`}>
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

export default Lab3a36View;
