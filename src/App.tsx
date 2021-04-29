import React, { FC, Fragment, useState } from "react";
import { Button } from "antd";
import "./App.less";
import { PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";

const App: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
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
      <AddDrawer show={showDrawer} handleOnClose={() => setShowDrawer(false)} />
    </Fragment>
  );
};

export default App;
