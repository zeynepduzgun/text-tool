import Tab from "react-bootstrap/Tab";
import TextInput from "../../components/TextInput/TextInput";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import ToolTypes from "../../components/enums";

const Generator = () => {
  const [toolType, setToolType] = useState(ToolTypes.Generator.Smallcase);
  return (
    <div className="Generator">
      <Tabs
        defaultActiveKey={ToolTypes.Generator.Smallcase}
        id="fill-tab-example"
        className="mb-3"
        onSelect={(k) => setToolType(k)}
        fill
      >
        <Tab
          eventKey={ToolTypes.Generator.Smallcase}
          title="Small Text Generator"
        >
          <TextInput toolType={toolType}></TextInput>
        </Tab>
        <Tab eventKey={ToolTypes.Generator.Wide} title="Wide Text Generator">
          <TextInput toolType={toolType}></TextInput>
        </Tab>
        <Tab eventKey={ToolTypes.Generator.Bold} title="Bold Text Generator">
          <TextInput toolType={toolType}></TextInput>
        </Tab>
        <Tab
          eventKey={ToolTypes.Generator.Strikethrough}
          title="Strikethrough Text Generator"
        >
          <TextInput toolType={toolType}></TextInput>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Generator;
