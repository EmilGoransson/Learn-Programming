import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";

function Lab3a37View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">From a Linkedlist to an array</h1>
            <p className="mb-4">
            As a programming student, it's important to understand different data structures 
            and how to manipulate them. In this tutorial, we'll explore how to create an array 
            from a linked list that is implemented without using the built-in library
             for linked lists in Java.
            </p>
            <h2 className="text-2xl font-bold mb-4"> Step 1 and 2 </h2>
            <p className="mb-4">
            The first steps to doing this is of course to impelent an linkedlist and adding
            elements to the linkedlist and creating a method which returns the length of a linkedlist. 
            This you should know how to do by this lab. But just in case
            code below will be provided so that you can study and remember how that is done!
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`class Node {
    double number;
    Node next;

    public Node(double number) {
        this.number = number;
        this.next = null;
    }
}

class LinkedList {
    Node head;

    public LinkedList() {
        this.head = null;
    }

    public void add(double number) {
        Node newNode = new Node(number);
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
    public int length() {
        int count = 0;
        Node current = head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
}`}
        </code>
      </pre>

      <h1 className="text-3xl font-bold mb-4">Step 3: Creating an Array from the Linked List</h1>
            <p className="mb-4">
            Once the linkedlist is constructed and elements are added to it, it is possible to 
            store the elements of linkedlist to an array. This can be done in different ways depending
            on how the linkedlist is implementet. If there is a method in place which returns the length of the 
            linkedlist the following method can be used:
            </p>

            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`public double[] asArray ()
{
    double[] arr = new double[list.length()];
	int i = 0;
	Node n = first;
	while (n != null)
	{
		arr[i++] = n.number;
		n = n.next;
	}
		return arr;
}
`}
        </code>
      </pre>
            <p className="mb-4">
            In the code above, the <code>asArray</code> method converts a linked list of numbers into an array
             by iterating over the linked list, retrieving each number from the nodes, 
             and storing them in the array. This allows you to access the numbers in the sequence as an 
             array, offering a different way of working with the data.
            </p>
            <h1 className="text-3xl font-bold mb-4">Step 3: Another approach</h1>
            <p className="mb-4">
            It's also possible to use another approach to transform the linkedlist to an array if there
            is a method called <code>get</code>, which when given an index, <code>i</code>, returns the number at 
            that index in the linkedlist. But in order for this to work the <code>get</code> method needs to be 
            implemented. Below is an example on how the get method could be implementet in the Linkedlist class:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`public int get(int index) {
    if (index < 0 || index >= length()) {
        throw new IndexOutOfBoundsException("Index out of range");
    }
    Node current = head;
    for (int i = 0; i < index; i++) {
        current = current.next;
    }
    return current.data;
}
`}
        </code>
      </pre>
      <p className="mb-4">
            The code works so that it traverses thorugh the linkedlist until the given index, then it
            returns the node at that index. Once this is in place another method can be used for 
            going from a linkedlist to an array. A code example for that can be seen below:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`int size = linkedList.length();
int[] array = new int[size];
for (int i = 0; i < size; i++) {
    array[i] = linkedList.get(i);
}
`}
        </code>
      </pre>
            <p className="mb-4">
            In the above code, we first determine the size of the array by calling the <code>length</code> method
             on the <code>linkedList</code> object. We then create a new array, <code>array</code>, of the same size.
            Using a for-loop, we iterate over the indices of the linked list and retrieve each element 
            using the <code>get</code> method. We assign each element to the corresponding index in the array.
            </p>
          
                <h1 className="text-3xl font-bold mb-4">Step 4: Verifying the array creation</h1>
            <p className="mb-4">
            To ensure that the array creation has been successful, let's print the elements of the array.
             We can use a for-loop to iterate over the elements and print them:
            </p>

            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`for (int i = 0; i < array.length; i++) {
    System.out.println(array[i]);
}
`}
        </code>
      </pre>
            <p className="mb-4">
            This loop iterates over each element in the <code>array</code> and prints it to the console.
            </p>


      <h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
            <p className="mb-4">
            In this tutorial, we reviewed how to create an array from a linked list implemented without using 
            the built-in library for linked lists in Java. By following these steps, you can easily convert a 
            custom linked list into an array, allowing you to leverage the benefits of arrays for specific use cases.
            </p>
            
            <p className="mb-4">
            Understanding these concepts will enhance your understanding of data structures and provide
             you with the ability to implement and manipulate custom data structures in your Java programs.
            </p>
            <p className="mb-4">
            Keep practicing and exploring different data structures to expand your programming skills. Happy coding!
            </p>

            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            In the code below you will be given a linkedlist implementation. Your task is to transform the linkedlist
            to an array in the given place in the code. You can use whatever way of doing it as you'd like. 
            The linkedlist implementation includes both a get, and length method. The array that you declare 
            must have the name <code>array</code>.
            </p>
            
              <p>Remember to name your array <code>array</code> and that the code is casesensitive. The
              created linkedlist that you should work with is called <code>list</code>. </p>
            <p>
                <CodeRunner
                    testCases={"0,10,20,30,40,"}
                    testCase2={"0,20,40,60,80,"}
                    preMadeText={props.preMadeText}
                    input1={2}
                    input2={4}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab3/8`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab3/10`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab3a37View;