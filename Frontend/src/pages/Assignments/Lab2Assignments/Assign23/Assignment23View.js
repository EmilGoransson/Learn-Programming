import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import Quiz from "../../../../Components/Quiz/quiz";
import { quizData } from "./QuizLinkedList";
import "../../Lab1Assignments/AssignmentView.css";
function Lab2a23View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Linked Lists</h1>
            <p className="mb-4">
            A <code>linked list</code> is a data structure used in computer science to store and manipulate collections of data. 
            Unlike an array, which stores elements in contiguous memory locations, a linked list is made up of individual 
            nodes that contain both a value and a reference to the next node in the list.One of the key advantages of a 
            linked list is that it can grow or shrink dynamically, without needing to allocate or deallocate a contiguous 
            block of memory like an array does. This makes linked lists useful for situations where the size of the data 
            being stored may change frequently.
</p>
            <h2 className="text-2xl font-bold mb-4">Single Linked List</h2>
<p>Linked lists come in several different varieties, but the most common is the <code>singly linked list</code>. 
    In a singly linked list, each node contains a <code>value</code> and a <code>reference</code> to the next node in the list. 
    The last node in the list has a reference to <code>null</code>, indicating the end of the list.To traverse a linked list, 
    you start at the head node (the first node in the list) and follow the references from node to node until you
     reach the end of the list. Linked lists also support insertion and deletion of elements at any point in the list, 
     although this can be less efficient than with an array due to the need to update references to adjacent nodes.
</p>
    
<h2 className="text-2xl font-bold mb-4">Double Linked List</h2>
<p>Another variation of linked list is the <code>doubly linked list</code>, where each node has a reference to both the <code>next</code>
     and <code>previous</code> nodes in the list. This allows for more efficient insertion and deletion operations, but requires 
     more memory overhead to store the extra reference.</p>

     <h2 className="text-2xl font-bold mb-4">Array vs Linked List</h2>
<p><code>Arrays</code> and <code>linked lists</code> are two common data structures used in programming. 
    Arrays store a fixed number of elements in contiguous memory, making random access 
    and traversal efficient. However, resizing an array can be costly and it's difficult to 
    insert or delete elements in the middle.Linked lists, on the other hand, use nodes to store 
    elements in non-contiguous memory. Each node contains a value and a reference to the next node, 
    forming a chain-like structure. This allows for easy insertion and deletion of elements, as well as 
    dynamic resizing. However, linked lists can be less efficient for random access and traversal since 
    elements are not stored in contiguous memory.Overall, the choice between arrays and linked lists depends 
    on the specific use case and the trade-offs between efficiency, flexibility, and memory usage.</p>

            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
            Overall, linked lists are a powerful and flexible data structure with many use cases in computer
             science and programming. They are widely used in programming languages and frameworks such as Java
              and .NET, and have been a staple of computer science education for many years.
           </p>



    
           <h2 className="text-2xl font-bold mb-4">A Quiz</h2>  
     <Quiz quizData={quizData}/>
     
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>    
Print 1
            </p>
            Remember:
            <p>
                <p>1. The code-checker is case sensitive.</p>
                <p>
                    2. Always use the semicolon <code>;</code> at the end of each
                    statement in Java.
                </p>
                <CodeRunner
                     testCases={1}
                     preMadeText={props.preMadeText}
                     input={1}
                     shouldIncrement={true}
                     thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab2/8`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/10`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Lab2a23View;
