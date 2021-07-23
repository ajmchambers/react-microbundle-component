import * as React from "react";
import ReactDOM from "react-dom";
import { Alert, Button, Input, Item } from "../../src";

const Demo = (): JSX.Element => {
  return (
    <div style={{padding: '5px'}}>
      <h1>Demo Page</h1>
      <Input placeholder="Enter a value..." />
      <Alert variant="primary">This is an alert</Alert>
      <Button label="Button Label" />

      <Item>
        <Input placeholder="Enter a value..." variant="success" alertText="This is alert text" />
        <Alert variant="danger">This is an alert</Alert>
      </Item>
    </div>
  )
}

ReactDOM.render(<Demo />, document.getElementById("root"));