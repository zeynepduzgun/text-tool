import Tab from "react-bootstrap/Tab";
import TextInput from "../../components/TextInput/TextInput";
import Tabs from "react-bootstrap/Tabs";
import { useEffect, useState } from "react";
import ToolTypes from "../../components/enums";
import Form from "react-bootstrap/Form";
import handleGeneration from "../../services/Generation";

const Generator = (props) => {
  const [toolType, setToolType] = useState(ToolTypes.Generator.Smallcase);
  const [text, setText] = useState("");
  const pull_data = (data) => {
    setText(data);
  };
  // useEffect(() => {
  //   console.log("Text is reset");
  //   setText("");
  // }, [toolType]);

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
          <TextInput func={pull_data} toolType={toolType}></TextInput>
        </Tab>
        <Tab eventKey={ToolTypes.Generator.Wide} title="Wide Text Generator">
          <TextInput func={pull_data} toolType={toolType}></TextInput>
        </Tab>
        <Tab eventKey={ToolTypes.Generator.Bold} title="Bold Text Generator">
          <TextInput func={pull_data} toolType={toolType}></TextInput>
        </Tab>
        <Tab
          eventKey={ToolTypes.Generator.Strikethrough}
          title="Strikethrough Text Generator"
        >
          <TextInput func={pull_data} toolType={toolType}></TextInput>
        </Tab>
      </Tabs>

      {/* OUTPUT TEXTAREA */}
      <Form.Control
        as="textarea"
        style={Object.assign({}, handleGeneration(toolType), {
          height: "150px",
          margin: "2%",
        })}
        readOnly
        value={text}
        placeholder="Output text"
      />
    </div>
  );
};

export default Generator;
