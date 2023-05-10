import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab3t7(props) {
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
      <div className="mt-20">
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
          <h1 className="text-3xl font-bold mb-4">
            Linked List Data Structure in Java... again
          </h1>
          <p className="mb-4">
            A linked list is a linear data structure that consists of a sequence
            of nodes. Each node contains a data element and a reference
            (pointer) to the next node in the sequence. The first node is called
            the head, and the last node is called the tail. Linked lists are
            commonly used in programming for their efficient insertion and
            deletion operations.
            <p></p>
          </p>
          <p className="mb-4"></p>
          <p className="mb-4"></p>

          <p className="mb-4"></p>
          <h2 className="text-2xl font-bold mb-4"> Creating a Node Class</h2>
          <p className="mb-4">
            To implement a linked list in Java, we first need to create a class
            for the nodes. Each node should have two properties: data and next.
            The data property will hold the actual value of the node, and the
            next property will hold the reference to the next node in the
            sequence. Here's an example of what the Node class might look like:
            <br></br>
            <br></br>
            For example, consider the following code:
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
              <code className="text-sm font-mono">
                {`public class Node {
    public int data;
    public Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}System.out.println(a);
}
`}
              </code>
            </pre>
            In this example, the Node class has a single constructor that takes
            an integer parameter, which will be used to set the data property.
            The next property is initially set to null, s ince we haven't
            created any other nodes yet.
            <br></br>
            <br></br>
          </p>
          <h2 className="text-2x font-bold mb-4">
            Creating a LinkedList Class
          </h2>
          <p>
            Once we have a Node class, we can create a LinkedList class to
            manage the nodes. The LinkedList class should have two properties:
            head and tail. The head property will hold a reference to the first
            node in the list, and the tail property will hold a reference to the
            last node in the list. Here's an example of what the LinkedList
            class might look like:
            <br></br>
            <br></br>
            For example, consider the following code:
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
              <code className="text-sm font-mono">
                {`public class LinkedList {
    private Node head;
    private Node tail;

    public LinkedList() {
        this.head = null;
        this.tail = null;
    }

    public void add(int data) {
        Node newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}
`}
              </code>
            </pre>
            In this example, the LinkedList class has a single constructor that
            sets both the head and tail properties to null, since we haven't
            created any nodes yet.
            <br></br>
            <br></br>
            The add() method takes an integer parameter, creates a new Node with
            that value, and adds it to the end of the list. If the list is empty
            (i.e., head is null), then both head and tail are set to the new
            node. Otherwise, the new node is added to the end of the list, and
            the tail property is updated to point to the new node.{" "}
          </p>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="mb-4">
            In summary, a linked list is a linear data structure that consists
            of a sequence of nodes. Each node contains a data element and a
            reference to the next node in the sequence. To implement a linked
            list in Java, we need to create a Node class to represent each node,
            and a LinkedList class to manage the nodes. The LinkedList class
            should have properties for both the head and tail nodes, and methods
            for adding, removing, and searching for nodes. Linked lists are
            useful for their efficient insertion and deletion operations, but
            may not be as efficient as arrays for random access of elements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lab3t7;
