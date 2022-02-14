import React,{Component} from "react";
// import { PureComponent } from "react";

class Flower extends Component {
  state = { flower: "banafshe" };
  render() {
    console.log("rneder flower pure component");
    // this.renderTest();
    return (
      <>
        {/* <h4>my flower name is {this.props.flowerName}</h4> */}
        <h4>my flower name is Rose</h4>
        {/* <div className={styles["class-test"]}>flower color</div> */}
      </>
    );
  }

}
export default Flower;
