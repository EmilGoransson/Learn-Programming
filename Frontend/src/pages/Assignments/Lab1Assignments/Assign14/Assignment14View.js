import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";

function Lab1a14View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Boss Level</h1>
            <p className="mb-4">
            This is a simplified version of the assignment in Lab 1. Complete the assignment, 
            and you will be ready to solve the first Lab. Write the code and confirm the functionality 
            on your own. Once you have done this, simply press compile and you will pass this level. 
            #HonorSystem
            </p>
            <h2 className="text-2xl font-bold mb-4">Problem Description</h2>
            <p className="mb-4">
            The assignment involves processing a grocery list. A shopper wants to create a grocery list for a week, 
            which will include the name of each item, its price, and the quantity needed. At the end of the week, the 
            shopper will process the grocery list by calculating the total cost of the items purchased. The shopper will 
            also determine the most expensive item and the average price per item on the list.
            </p>
            <h2 className="text-2xl font-bold mb-4">Solution Approach</h2>
            <p>
            The solution involves writing a Java program that reads the grocery list and displays it. Then, it calculates 
            the total cost of the items purchased, determines the most expensive item, and calculates the average price per 
            item on the list. These results are then printed on the standard output device.  
            </p>
            <p>
            The program prompts the user to input the number of items on the grocery list. Then, it creates storage space for 
            the grocery list data using arrays to store the item names, prices, and quantities. The program then prompts the user 
            to enter each item's name, price, and quantity using a for loop to iterate through each item.    
            </p>
            <p>
            After the input is complete, the program displays the grocery list by iterating through the arrays and printing out each 
            item's name, price, and quantity. The program then calculates the total cost of the items purchased by multiplying the price 
            of each item by its quantity and summing the results.    
            </p>
            <p>
            Next, the program determines the most expensive item by iterating through the item price array and comparing each item's price 
            with the current maximum. Finally, the program calculates the average price per item on the list by dividing the total cost by 
            the number of items.    
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
                <Link to={`/Lab1/13`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/1`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab1a14View;
