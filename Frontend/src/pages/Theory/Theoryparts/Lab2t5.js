import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab2t5(props) {
  return (
    <div>
      <div>
        <RightSideBar></RightSideBar>
        <Sidebar></Sidebar>
        <Progress />
        <PinnedList />
        <TopBar></TopBar>
        <Scrollingbar />
      </div>
      <div>
      <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Logical Operators</h1>
            <p className="mb-4">
           <code>Logical operators</code> Logical operators in Java are used to perform boolean operations on 
            boolean expressions. There are three logical operators in Java: <code>AND (&&)</code>, <code>OR (||)</code>, and <code>NOT (!)</code>.
            </p>

            <p>The <code>AND</code> operator (&&) returns true only if both operands are true. For example, 
                the expression true && true would evaluate to true, while the expression true 
                && false would evaluate to false.</p>
               <p>Example of AND utilzation</p>
              
                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code className="text-sm font-mono">
   { `int age = 25;
boolean hasLicense = true;
boolean isQualifiedDriver = age >= 18 && hasLicense;
System.out.println("Is the person a qualified driver? " + isQualifiedDriver);

 `}
</code>
</pre>

<p>In this example, the && operator is used to check if a person is a qualified driver. The person must be 18 years or older (age {`{>}`}= 18) and have a valid driver's license (hasLicense).</p>
            
            <p> The <code>OR</code> operator (||) returns true if either operand is true. 
                For example, the expression true || false would evaluate to true, 
                while the expression false || false would evaluate to false.
</p>
<p>Example of OR utilzation</p>
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code className="text-sm font-mono">
   { `boolean isSunny = true;
boolean isWarm = false;
boolean isWeatherGood = isSunny || isWarm;
System.out.println("Is the weather good? " + isWeatherGood);

 `}
</code>
</pre>
<p>Here, the || operator is used to determine if the weather is good. The weather is considered good 
if it's sunny (isSunny) or warm (isWarm).</p>

            <p> 
The <code>NOT</code> operator (!) returns the opposite of the boolean value of its operand.
 For example, the expression !true would evaluate to false, while the expression 
 !false would evaluate to true.
</p>
<p>Example of NOT utilzation</p>
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code className="text-sm font-mono">
   { `boolean isRaining = true;
boolean isNotRaining = !isRaining;
System.out.println("Is it not raining? " + isNotRaining);

`}
</code>
</pre>
<p>In this example, the ! operator is used to negate the value of a boolean variable. 
If it's raining (isRaining is true), then isNotRaining will be false.</p>
           
            <h2 className="text-2xl font-bold mb-4">Order of operations</h2>
            <p className="mb-4">
            When multiple logical operators are used in an expression, Java evaluates them in a specific order. 
            The NOT operator is evaluated first, followed by the AND operator, and then the OR operator. 
            To override this default order of evaluation, you can use parentheses to group expressions.
            It's important to keep in mind that logical operators are short-circuiting. This means that if 
            the result of the expression can be determined by only evaluating the left operand, then the right operand 
            is not evaluated at all. For example, in the expression false && someMethod(), if the left operand is false, 
            then the method someMethod() will not be executed at all.In conclusion, logical operators are a fundamental part of 
            boolean logic in Java. By understanding how they work and how to use them effectively, you can write more complex and 
            powerful conditional statements in your Java programs.

</p>
 
      </div>
    </div>
    </div>
  );
}

export default Lab2t5;
