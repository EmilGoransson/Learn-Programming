import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";

function Lab3a42View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Boss Level 3</h1>
            <p className="mb-4">
            This is a similar task as the assignment in Lab 3. Complete the assignment, 
            and you will be ready to solve the third Lab. Write the code and confirm the functionality 
            on your own. Once you have done this, simply print out Done and you will pass this level. 
            #HonorSystem
            </p>
            <h2 className="text-2xl font-bold mb-4">Problem Description for the lab</h2>
            <p className="mb-4">
            Lab 3 is about creating a program that checks number sequences. You have to find the upper and lower bound of the sequence as well
             as implement methods that decide whether the sequence is increasing or decreasing, finding the number at a position, 
             add and remove numbers, and inserting.In this lab you are supposed to complete code to make sure that all the methods work correctly.
            </p>
            <h2 className="text-2xl font-bold mb-4">Solution Approach for this assignment</h2>
            <p>
            The solution involves writing a Java program that adds onto the boss level from lab 1 with the grocery list. To finish this 
            boss level you need to add methods that can add, remove, change order and sort the list alphabetically.
            </p>
            <p>
            The program prompts the user to input the number of items on the grocery list. Then, it creates storage space for 
            the grocery list data using arrays to store the item names,price and quantity. The program then prompts the user 
            to enter each item's name,price and quantity using a for loop to iterate through each item.    
            </p>
            <p>
            After the input is complete, the program displays the grocery list by iterating through the arrays and printing out each 
            item's name, price, and quantity. Finally the add, remove, change order and sort methods are supposed to be made so that 
            they function correctly.  Additionally, you should take the input to add into an array and a linked list to be able to add methods 
            that remove and add at a certain position or index.
            </p>
            <p>
              
            </p>
            <h2 className="text-2xl font-bold mb-4">Implementation</h2>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                    <code className="text-sm font-mono">
{`import java.util.Scanner;

public class GroceryList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user to input the number of items on the grocery list
        

        // Create storage space for grocery list data
        

        // Read the grocery list data
        

        // Display the grocery list
       

        // Calculate the total cost of the items purchased
       

        // Determine the most expensive item


        // Add method


        // Remove method


        // Change order
        

        // Sort Alphabetically


        // RemoveAt method


        // InsertAt method
               
    }`}
                    </code>
                </pre>
            
            <h2 className="text-2xl font-bold mb-4">Done</h2>
            <p>
                Or broke the honor system..
            </p>
            <p>
                <CodeRunner
                    testCases={"Done"}
                    preMadeText={props.preMadeText}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab3/13`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Labs`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab3a42View;
