import React from "react";
import "./theory.css";
import TopBar from "../../../Components/topBar/topBarPresenter";
import RightSideBar from "../../../Components/Sidebar/leftSideBar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Theory() {
  return (
    <div>
    <TopBar/>
  
 <RightSideBar/>
 <Scrollingbar/>
 <Sidebar/>
 <Progress />
 <PinnedList/>
  


    <div className="Theory mt-20 ">
    
      <div className="theory-header">
        <h3 className="text-3xl font-bold mb-4">
          Getting started with Java, Integrated Development <br></br>Environments (IDEs) and other useful tips
        </h3>
        <p className="mb-4">
          <h className="text-3xl font-bold mb-4">Step 1: Install Java Development Kit (JDK) </h><br></br><br></br>
          Before using VS Code for Java development, ensure that you have the Java Development Kit (JDK) installed on your machine. You can download the latest version of the JDK from the official Oracle website and follow the installation instructions for your operating system.
          <br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 2: Install Visual Studio Code </h><br></br><br></br>
          Download and install Visual Studio Code from the official website <a href="https://code.visualstudio.com/" target="_blank">here</a>. Choose the appropriate installation package for your operating system and follow the installation instructions.
          <br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 3: Install Java Extensions in Visual Studio Code </h><br></br><br></br>
          VS Code provides various extensions to enhance Java development. Install the following extensions by navigating to the Extensions view in VS Code (click on the square icon on the left sidebar):
          <br></br><br></br>
          "Java Extension Pack" by Microsoft: This extension pack includes essential extensions for Java development, such as language support, debugging capabilities, and build tools.
          <br></br><br></br>
"Debugger for Java" by Microsoft: This extension enables Java debugging within VS Code, allowing you to set breakpoints and inspect variables during runtime.
          <br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 4: Create a Java Project </h><br></br><br></br>
          To start coding in Java, you need to create a Java project. Follow these steps:
          <br></br><br></br>
          1. Open Visual Studio Code.<br></br>

2. Create a new folder on your computer where you want to store your Java projects.<br></br>

3. Open the folder in Visual Studio Code by selecting "File" and then "Open Folder" and selecting the folder you created.<br></br>

4. Open the integrated terminal in VS Code by selecting "View" and then "Terminal".<br></br>

5. In the terminal, type the following command to create a new Java project:<br></br><br></br>
<pre><br></br>C:\ mkdir MyProject <br></br>C:\ cd MyProject<br></br><br></br></pre>
          <br></br>
          Replace "MyProject" with the desired name for your project.<br></br><br></br>

6. Initialize a Java project by running the following command:<br></br><br></br>
<pre><br></br> jdk-init<br></br><br></br></pre><br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 5: Writing Java Code </h><br></br><br></br>
          Now that you have a Java project set up, you can start writing Java code. Here's how:<br></br><br></br>
          1. In Visual Studio Code, navigate to the Explorer view on the left sidebar.<br></br>
          2. Right-click on the "src" folder, select "New File", and name it with a .java extension, such as Main.java.<br></br>
          3. Open the newly created file and start writing your Java code.<br></br>
          <br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 6: Running Java Code </h><br></br><br></br>
          To run your Java code within VS Code, follow these steps:<br></br><br></br>
          1. Open the integrated terminal in VS Code by selecting "View" and then "Terminal".<br></br>
2. Ensure that you are in the project's root directory (e.g., MyProject).<br></br>
3. Compile your Java code by running the following command:<br></br>
<br></br>
<pre><br></br>C:\MyProject&gt; javac Main.java <br></br><br></br></pre><br></br>Replace Main.java with the actual name of your Java file.<br></br><br></br>
After successful compilation, run your Java program by executing the following command:<br></br>
<pre><br></br> C:\MyProject&gt; java Main <br></br><br></br></pre>
          <br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 7: Debugging Java Code </h><br></br><br></br>
          VS Code provides a debugger for Java that allows you to set breakpoints, step through code, and inspect variables during runtime. Follow these steps to use the debugger:
          <br></br> <br></br>
          1. Open your Java file in Visual Studio Code.<br></br>
2. Place breakpoints in your code by clicking on the left gutter area next to the line numbers.<br></br>
3. Click on the Debug icon on the left sidebar or press Ctrl + Shift + D.<br></br>
4. Click on the "Run and Debug" button or press F5 to start debugging.<br></br>
5. The debugger will pause at your breakpoints, allowing you to inspect variables and step through the code using the provided controls.
          <br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 8: Using Additional Features </h><br></br><br></br>
          Visual Studio Code offers several additional features to enhance your Java development experience:<br></br><br></br>
          1.IntelliSense: VS Code provides intelligent code completion, suggestions, and documentation as you type. It helps you write code faster and reduces errors.<br></br><br></br>

2. Formatting: Use the built-in code formatter (Ctrl + Shift + I) or install a Java code formatter extension to automatically format your code according to predefined standards.<br></br><br></br>

3. Refactoring: VS Code supports various refactorings to improve code structure and maintainability. Right-click on a symbol or selection, choose "Refactor," and select the desired refactoring option.<br></br><br></br>

4. Git Integration: If you're using version control with Git, VS Code has excellent Git integration. The Source Control view allows you to stage, commit, and manage your Git repositories without leaving the editor.<br></br><br></br>

5. Task Automation: Utilize the integrated Task Runner to automate repetitive tasks. Configure build tasks, run tests, or perform custom operations using the tasks.json file.<br></br><br></br>
          <br></br><br></br>
          <h className="text-3xl font-bold mb-4">Step 9: Learning Resources </h><br></br><br></br>
          To deepen your Java knowledge and maximize your learning with Visual Studio Code, consider exploring the following resources:<br></br><br></br>
          1. Java Tutorials: <a href="https://docs.oracle.com/javase/tutorial/" target="_blank">Visit Oracle's Java Tutorials </a> for comprehensive Java documentation, including language features, core APIs, and best practices.<br></br><br></br>

2. Java Extension Pack Documentation: Access the documentation for the Java Extension Pack to understand its features and usage. You can find it in the VS Code Marketplace or on the Microsoft website.<br></br><br></br>

3. Java Learning Resources: Explore online Java courses, tutorials, and forums to expand your understanding of Java programming. Websites like Codecademy, Udemy, and Coursera offer Java courses for beginners.<br></br><br></br>

4. Community Support: Engage with the Java community through forums like Stack Overflow. Ask questions, seek advice, and learn from experienced developers.<br></br><br></br>
        
          <h className="text-3xl font-bold mb-4">Conclusion: </h><br></br><br></br>
          Visual Studio Code provides a powerful and versatile environment for Java development. By following the steps outlined in this guide, you can set up your development environment, write, run, and debug Java code effectively. As you continue learning Java, explore the various features and extensions of VS Code to enhance your productivity and streamline your development workflow. Happy coding!
        </p>
        </div>
        </div>
  </div>
  )};

export default Theory;
