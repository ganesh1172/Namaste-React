import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy location",
        avatar_url: "https://avatars.githubusercontent.com/",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ganesh1172");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <p>GithubCard Component</p>
        <img src={avatar_url} alt={name} />
        <h2>name : {name}</h2>
        <p>location: {location}</p>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * Phase of LifeCycle
 *
 * ---Mounting---
 *
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML Dummy/>
 * ComponentDidMount
 *      <API Call/>
 *      this.setState => state variable is updated
 *
 * ---UPDATE---
 *      Render(api data)
 *      <HTML (new api data replace with dummy)/>
 * ComponentDidUpdate
 * ComponentWillUnmount
 *
 *
 ****/
