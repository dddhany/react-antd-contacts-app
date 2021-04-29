import React, { FC } from 'react';
import { Button } from 'antd'
import './App.less';
import { PlusCircleFilled } from "@ant-design/icons";

const App: FC = () => (
  <div className="App">
    <Button type="primary" icon={<PlusCircleFilled/>} >Button</Button>
  </div>
);

export default App;
