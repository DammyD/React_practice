import './App.css';
import Counter from './Counter';
import Employee from './Employee';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <>
    <div style={{padding: "8px"}}>
      <h1>I am the parent component</h1>
      <ChildComponent style={{color: "red"}} text={"I am the first child"} name={"Blessing"} age={26} />
      <ChildComponent style={{color: "green"}} text={"I am the second child"} name={"Onome"} age={24} />
      <ChildComponent style={{color: "blue"}} text={"I am the third child"} name={"Tosin"} age={20} />
    </div>
    
     {/*Destructuring Example*/}
    <div>
      <Employee firstName={"David"} lastName={"Tanko"} email={"david@tanko.com"} />
    </div>
     { /*State Example using Counter*/}
    <div>
      <Counter />
    </div>
    </>
   );
 }

export default ParentComponent;