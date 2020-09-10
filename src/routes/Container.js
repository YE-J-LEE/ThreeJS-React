import React from "react";
import Presenter from "../components/Presenter";
// import "./Home.css";

class Container extends React.Component {
  state = { isMounted: true };

  render() {
    const { isMounted = true } = this.state;
    return (
      <>
        <button
          onClick={() =>
            this.setState((state) => ({ isMounted: !state.isMounted }))
          }
        >
          {isMounted ? "Unmount" : "Mount"}
        </button>
        {isMounted && <Presenter />}
        {isMounted && <div>Scroll to zoom, drag to rotate</div>}
      </>
    );
  }
}

export default Container;
