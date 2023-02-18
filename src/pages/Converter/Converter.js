import Tab from "react-bootstrap/Tab";
import TextInput from "../../components/TextInput/TextInput";
import Tabs from "react-bootstrap/Tabs";
import ToolTypes from "../../components/enums";
import { useState } from "react";

const Converter = (props) => {
  const [toolType, setToolType] = useState(ToolTypes.Converter.Titlecase);

  return (
    <div className="Converter">
      <Tabs
        defaultActiveKey={ToolTypes.Converter.Titlecase}
        id="fill-tab-example"
        className="mb-3"
        onSelect={(k) => setToolType(k)}
        fill
      >
        <Tab
          eventKey={ToolTypes.Converter.Titlecase}
          title="Title Case Converter"
        >
          <TextInput toolType={toolType}></TextInput>
        </Tab>
        <Tab
          eventKey={ToolTypes.Converter.Italic}
          title="Italic Text Converter"
        >
          <TextInput toolType={toolType}></TextInput>
        </Tab>
        <Tab
          eventKey={ToolTypes.Converter.Unicode}
          title="Unicode Text Converter"
        >
          <TextInput toolType={toolType}></TextInput>
        </Tab>
        <Tab
          eventKey={ToolTypes.Converter.Sentencecase}
          title="Sentence Case Converter"
        >
          <TextInput toolType={toolType}></TextInput>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Converter;
