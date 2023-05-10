import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";
import {quizData} from "./QuizQueue";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab3a32View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Queue</h1>
            <p className="mb-4">
                Queues are fundamental data structures used in programming to store and manage elements in a 
                specific order. In Java, there are two common implementations of 
                queues: <code>ArrayQueues</code> and <code>LinkedListQueues</code>. Let's explore <code>ArrayQueues</code> and learn how to implement them.
            </p>
            <h2 className="text-2xl font-bold mb-4"> ArrayQueues </h2>
            <p className="mb-4">
                ArrayQueues are implemented using arrays, providing efficient random access and a fixed-size structure. 
                Here's how you can implement an ArrayQueue in Java, broken down into smaller parts:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                <code className="text-sm font-mono">
{`public class ArrayQueue {
    private int[] queue;
    private int front;
    private int rear;
    private int size;
    private int capacity;`}
                </code>
            </pre>
            <p>
                <code>queue</code>: An integer array to store the elements of the queue.
            </p>
            <p>
                <code>front</code>: An integer variable that points to the front element in the queue.
            </p>
            <p>
                <code>rear</code>: An integer variable that points to the rear element in the queue.
            </p>
            <p>
                <code>size</code>: An integer variable to keep track of the current number of elements in the queue.
            </p>
            <p>
                <code>capacity</code>: An integer variable representing the maximum number of elements the queue can hold.
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                <code className="text-sm font-mono">
{`  public ArrayQueue(int capacity) {
        this.capacity = capacity;
        queue = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }`}
                </code>
            </pre>
            <p>
                The constructor <code>ArrayQueue(int capacity)</code>  initializes the ArrayQueue:
            </p>
            <p>
                It sets the capacity of the queue.
            </p>
            <p>
                It creates a new integer array of size <code>capacity</code> to store the elements.
            </p>
            <p>
                It initializes <code>front</code> to 0, <code>rear</code> to -1, and <code>size</code> to 0.
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                <code className="text-sm font-mono">
{`  public void enqueue(int item) {
        if (size == capacity) {
            throw new IllegalStateException("Queue is full!");
        }
        rear = (rear + 1) % capacity;
        queue[rear] = item;
        size++;
    }`}
                </code>
            </pre>
            <p>
                The <code>enqueue(int item)</code> method adds an element to the rear of the queue:
            </p>
            <p>
                It checks if the queue is already full by comparing <code>size</code> with <code>capacity</code>.
            </p>
            <p>
                It uses the modulo operator to wrap around the <code>rear</code> index if it reaches the end of the array.            </p>
            <p>
                It assigns the new element <code>item</code> to <code>queue[rear]</code>.
            </p>
            <p>
                It increments <code>size</code> by 1.
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                <code className="text-sm font-mono">
{`  public int dequeue() {
        if (size == 0) {
            throw new NoSuchElementException("Queue is empty!");
        }
        int item = queue[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }`}
                </code>
            </pre>
            <p>
                The <code>dequeue()</code> method removes and returns the front element of the queue:
            </p>
            <p>
                It checks if the queue is empty by comparing <code>size</code> with 0.
            </p>
            <p>
                It assigns the value of <code>queue[front]</code> to the variable <code>item</code>.
            </p>
            <p>
                It uses the modulo operator to wrap around the <code>front</code> index if it reaches the end of the array.            </p>
            <p>
                It decrements <code>size</code> by 1 and returns the removed element <code>item</code>.
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                <code className="text-sm font-mono">
{`  public int peak() {
        if (size == 0) {
            throw new NoSuchElementException("Queue is empty!");
        }
        return queue[front];
    }`}
                </code>
            </pre>
            <p>
                The <code>peak()</code> method returns the front element of the queue without removing it:
            </p>
            <p>
                It checks if the queue is empty.
            </p>
            <p>
                It returns the value of <code>queue[front]</code>.
            </p>

            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            <br></br>

            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
                In this exercise you will implement an ArrayQueue class in Java that represents a queue using an array.
                Your implementation should include the following methods and a constructor:
            </p>
            <p> 1. <code>enqueue(String item)</code>: Adds a String element to the rear of the queue.</p>
            <p> 2. <code>dequeue()</code>: Removes and returns the front String element of the queue.</p>
            <p> 3. The ArrayQueue should only support String elements.</p>
            <br></br>
            <p> Optional:</p>
            <p> When attempting to enqueue an element into a full queue, an exception should be thrown.</p>
            <p> When attempting to dequeue an element from an empty queue, an exception should be thrown.</p>

            <p>
                <CodeRunner
                    testCases={"Kiwi"}
                    testCase2={"Pear"}
                    preMadeText={props.preMadeText}
                    input1={"Kiwi"}
                    input2={"Pear"}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab3/3`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab3/5`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab3a32View;