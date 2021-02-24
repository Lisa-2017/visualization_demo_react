import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { examples } from "../Visualization/exampleList.js";
import A01Example from "./components/A01Example";
import A02Example from "./components/A01Example";
import A03Example from "./components/A01Example";
import A04Example from "./components/A01Example";
import A05Example from "./components/A01Example";
import A06Example from "./components/A01Example";
import A07Example from "./components/A01Example";
import A08Example from "./components/A01Example";
import A09Example from "./components/A01Example";
import C10Example from "./components/C10Example";
// import A02Example from "./components/A02Example";
// import A03Example from "./components/A03Example";
// import A04Example from "./components/A04Example";
// import A05Example from "./components/A05Example";
// import A06Example from "./components/A06Example";
// import A07Example from "./components/A07Example";
// import A08Example from "./components/A08Example";
// import A09Example from "./components/A09Example";

function ExampleEntry({ title, url, text }) {
  return (
    <div>
      <Link to={url}>{text}</Link>
      <p></p>
    </div>
  );
}

function Index() {
  const style = {
    height: "512px",
  };
  const exampleComponents = examples.map((e) => {
    return <ExampleEntry key={e.title} {...e} />;
  });

  return (
    <div className="wraper">
      <div style={style}>{exampleComponents}</div>
    </div>
  );
}

function Example(props) {
  return (
    <div>
      <h5>
        <Link to="/">Back to Examples</Link>
      </h5>
      {props.children}
    </div>
  );
}

function AppRouter() {
  const A01 = () => Example({ children: <A01Example /> });
  const A02 = () => Example({ children: <A02Example /> });
  const A03 = () => Example({ children: <A03Example /> });
  const A04 = () => Example({ children: <A04Example /> });
  const A05 = () => Example({ children: <A05Example /> });
  const A06 = () => Example({ children: <A06Example /> });
  const A07 = () => Example({ children: <A07Example /> });
  const A08 = () => Example({ children: <A08Example /> });
  const A09 = () => Example({ children: <A09Example /> });
  const C10 = () => Example({ children: <C10Example /> });

  return (
    <Router>
      <h1 className="wraper"> 可视化案例列表 </h1>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/A01" render={A01} />
        <Route exact path="/A02" render={A02} />
        <Route exact path="/A03" render={A03} />
        <Route exact path="/A04" render={A04} />
        <Route exact path="/A05" render={A05} />
        <Route exact path="/A06" render={A06} />
        <Route exact path="/A07" render={A07} />
        <Route exact path="/A08" render={A08} />
        <Route exact path="/A09" render={A09} />
        <Route exact path="/C10" render={C10} />
        <Route exact component={Index} />
      </Switch>
    </Router>
  );
}

export default class Visualization extends Component {
  render() {
    return <AppRouter />;
  }
}
