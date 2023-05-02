import React from 'react';
import "./theory.css";


function Theory() {
    return (
      <div className="Theory">
       
      
       
        <h3 className="text-3xl font-bold mb-4">
          Introduction to Methods in Java
        </h3>
        <p className="mb-4">
          In Java, a method is a function that is called to perform a set of actions. 
          This is useful for when you have a very common operation and might have to 
          do the same thing over and over again instead of rewriting the code at every 
          part of the code section you can write the code once in a method and then just 
          call it. Imagine instead of having one person doing all the jobs that need to be 
          done for something you can divide up the jobs so that someone can always do one
          job, much more effective right. Therefore, if you master methods you can create
           much more optimal code.
        </p>
        <h2 className="text-2xl font-bold mb-4">Creating a Method</h2>
        <p className="mb-4">
          To declare a variable in Java, we need to specify its type and name. For
          example, to declare a variable of type <code>int</code> with the name{" "}
          <code>myNumber</code>, we would write:
        </p>
        <pre className="bg-gray-100 rounded-md p-4 mb-4">
          <code className="text-sm font-mono">int myNumber;</code>
        </pre>
        <p className="mb-4">
          This declares a variable of type <code>int</code> with the name{" "}
          <code>myNumber</code>. We can also initialize the variable with a value
          at the time of declaration:
        </p>
        <pre className="bg-gray-100 rounded-md p-4 mb-4">
          <code className="text-sm font-mono">int myNumber = 42;</code>
        </pre>
        <p className="mb-4">
          This declares a variable of type <code>int</code> with the name{" "}
          <code>myNumber</code> and initializes it with the value <code>42</code>.
        </p>
        <h2 className="text-2xl font-bold mb-4">Using Variables</h2>
        <p className="mb-4">
          Once we have declared and initialized a variable, we can use it in our
          program. For example, we can print the value of <code>myNumber</code> to
          the console:
        </p>
        <pre className="bg-gray-100 rounded-md p-4 mb-4">
          <code className="text-sm font-mono">System.out.println(myNumber);</code>
        </pre>
        <p className="mb-4">
          This will print the value of <code>myNumber</code> (in this case,{" "}
          <code>42</code>) to the console.
        </p>
      </div>
    );
  }
  
  export default Theory;