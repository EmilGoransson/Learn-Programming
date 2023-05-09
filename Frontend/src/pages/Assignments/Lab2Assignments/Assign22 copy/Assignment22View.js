import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import Quiz from "../../../../Components/Quiz/quiz";
import { quizData } from "./QuizStringComparison";
import "../../Lab1Assignments/AssignmentView.css";
function Lab2a22View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Comparing Strings</h1>
            <p className="mb-4">
            In Java, you can compare strings using several methods, 
            including the <code>equals() method</code>, the <code>equalsIgnoreCase() method</code>, and the <code>comparison operators (== and !=) </code>
            as well as the more than and less than operators..
            <h2 className="text-2xl font-bold mb-4">Equals</h2>
<p><code>The equals() method</code> compares the content of two strings and returns true if they have the 
    same characters in the same order. For example:</p>
    <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code>{`String str1 = "Hello";
String str2 = "hello";
String str3 = "Hello";

System.out.println(str1.equals(str2)); // false
System.out.println(str1.equals(str3)); // true
`};</code>
</pre>
</p>
<h2 className="text-2xl font-bold mb-4">equalsIgnoreCase</h2>
<p>The <code>equalsIgnoreCase() method</code> is similar to equals(), but it ignores the case of the characters. For example:</p>

<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code>{`String str1 = "Hello";
String str2 = "hello";
String str3 = "Hello";

System.out.println(str1.equalsIgnoreCase(str2)); // true
System.out.println(str1.equalsIgnoreCase(str3)); // true
`};</code>
</pre>

<p>Note that both <code>equals()</code> and <code>equalsIgnoreCase()</code> are case-sensitive, so "Hello" and "hello" are considered different strings.
           
</p>

            <h2 className="text-2xl font-bold mb-4">Comparison Operators</h2>
            <p className="mb-4">
            Alternatively, you can use the comparison operators <code>== and !=</code> to compare strings, but they work differently than with primitive 
            data types. When you use == or != with strings, they compare the memory addresses of the strings, not their contents. 
            For example:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code>{`String str1 = "Hello";
String str2 = "Hello";
String str3 = new String("Hello");

System.out.println(str1 == str2); // true
System.out.println(str1 == str3); // false

`};</code>
</pre>

<p>In the above example, str1 and str2 are two different variables that hold the same string literal,
     so they refer to the same memory address. On the other hand, str3 is a new string object that was 
     created using the new keyword, so it has a different memory address than str1 and str2.</p>
     <h2 className="text-2xl font-bold mb-4">More than & Less than</h2>
            <p className="mb-4">
            In Java, you can also use the<code> {`{<}`} </code> and <code> {`{>}`} </code> operators to compare strings lexicographically. When you compare two strings using the
            {`{<}`}  or {`{>}`}  operators, the comparison is based on the Unicode values ​​of the characters in the strings.
            </p>
            <p>
Here's an example of using the {`{<}`} operator to compare two strings:</p>
<pre className="bg-lightBlueGray rounded-md p-4 mb-4"> <code>{`
String str1 = "apple";
String str2 = "banana";

if (str1.compareTo(str2) < 0) {
    System.out.println(str1 + " comes before " + str2);
} else {
    System.out.println(str2 + " comes before " + str1);
}

`};</code></pre>


<p>In the above example, the compareTo() method is used to compare the strings lexicographically. If str1 comes before str2 in 
    the dictionary, the result of compareTo() will be a negative number. Conversely, if str1 comes after str2 in the dictionary, 
    the result of compareTo() will be a positive number. If the two strings are equal, the result of compareTo() will be 0.Note 
    that when using {`{<}`} and {`{>}`} to compare strings, the result can be different depending on the capitalization of the characters. 
    For example, "apple" is lexicographically before "Banana", even though "B" has a lower Unicode value than "a". If you want 
    to compare strings based on their alphabetical order, regardless of capitalization, you can convert the strings to lowercase 
    or uppercase before comparing them.In general, it's recommended to use the equals() or equalsIgnoreCase() method when comparing
     strings in Java, as they provide a more reliable way to compare the content of strings
.</p>
     

            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
     <Quiz quizData={quizData}/>
      </pre>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>    
Write a program that compares a given string from the scanner togetehr with the given string. 
Decide which string comes first with the operators more than and less than analphabetically.Print the string that comes first.
            </p>
            Remember:
            <p>
                <p>1. The code-checker is case sensitive.</p>
                <p>
                    2. Always use the semicolon <code>;</code> at the end of each
                    statement in Java.
                </p>
                <CodeRunner
                     testCases={"Apple"}
                     testCase2={"Proglin"}
                     preMadeText={props.preMadeText}
                     input1={"Apple"}
                     input2={"Xylophone"}
                     shouldIncrement={true}
                     thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab2/7`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/9`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Lab2a22View;
