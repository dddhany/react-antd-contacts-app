import React, { FC, Fragment, useState } from "react";
import { Button } from "antd";
import "./App.less";
import { PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";

const App: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState({});
  const [errorInfo, setErrorInfo] = useState({});

  const handleAddFormOnFinish = (values) => {
    setValues(values)
    console.log("values: ", values)
    console.log("errorInfo: ", errorInfo)
  }
  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo)
  }
  return (
    <Fragment>
      <Button
        type="primary"
        icon={<PlusCircleFilled />}
        data-testid="add-contact-button"
        onClick={() => setShowDrawer(true)}
      >
        Button
      </Button>
      <AddDrawer show={showDrawer} handleOnClose={() => setShowDrawer(false)}
        handleOnFinish={handleAddFormOnFinish}
        handleOnFinishFailed={ handleAddFormOnFinishFailed}/>
    </Fragment>
  );
};

export default App;
