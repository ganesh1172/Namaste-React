- Syntax for ClassBaseComponent

* class ClassName extends React.Component{
  // to receive props use
  constructor(props){
  super(props)
  }
  render(){
  return <>Code here</>
  }
  }

- why do we use super(props) in class?

- NEVER UPDATE STATE VARIABLES DIRECTLY

#### Class-component Lifecycle

- Render Phase
  It batch the component and then render.

- Commit Phase
  DOM is an expensive process. So it will occur after render phase.

##### Mounting - showing in UI

- Constructor
- render
- react updates DOM
- componentDidMount

##### Updating

- setstate()
- render
- react updates DOM
- componentDidUpdate

##### Unmounting - removing from UI

- componentWillUnmount()

## Never compare class lifecycle with functional component

- ComponentDidMount !== useEffect()

- in useEffect() :- if we not put dependency it will call after every component render

- in ComponentDidMount - it will can only once. but later it only update

useEffect(() => {
const timer = setInterval(() =>{
console.log('set Interval');
}, 1000);

return () => {
clearInterval(timer);
console.log("Unmounting phase in Fn component');
}
})
