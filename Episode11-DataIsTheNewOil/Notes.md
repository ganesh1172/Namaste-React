#### Higher Order Components(HOC)

- Its function that take component as input and return component(enhance)

#### Lifting State up

#### Controlled and Uncontrolled component

#### props drilling

- passing data from grandparent => parent => child => ....

#### Context API/React Context

- storing data on seperate file(globally) and acces it anywhere in appp
- context provide global space and provide data

* createContext({ pass data})
* useContext({to get data}) Hook- in functional component
* <UserContext.Consumer>{(data) => console.log(data)}</UserContext.Consumer> -- in class component
* <UserContext.Provider value={}><div className="App"></div></UserContext.Provider> -- provide data to all child
