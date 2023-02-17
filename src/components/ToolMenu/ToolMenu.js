import React from "react";
import PropTypes from "prop-types";
import "./ToolMenu.scss";
import Tab from "react-bootstrap/Tab";
import TextInput from "../TextInput/TextInput";
import Tabs from "react-bootstrap/Tabs";

function GenetorTabs() {
  return (
    <div className="ToolMenu">
      <Tabs
        defaultActiveKey="smallCase"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="smallCase" title="Small Text Generator">
          <TextInput toolName="Small Text Generator"></TextInput>
        </Tab>
        <Tab eventKey="wide" title="Wide Text Generator">
          <TextInput toolName="Wide Text Generator"></TextInput>
        </Tab>
        <Tab eventKey="bold" title="Bold Text Generator">
          <TextInput toolName="Bold Text Generator"></TextInput>
        </Tab>
        <Tab eventKey="strike" title="Strikethrough Text Generator">
          <TextInput toolName="Strikethrough Text Generator"></TextInput>
        </Tab>
      </Tabs>
    </div>
  );
}

function ConverterTabs() {
  return (
    <div className="ToolMenu">
      <Tabs
        defaultActiveKey="titleCase"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="titleCase" title="Title Case Converter">
          <TextInput toolName="Title Case Converter"></TextInput>
        </Tab>
        <Tab eventKey="italic" title="Italic Text Converter">
          <TextInput toolName="Italic Text Converter"></TextInput>
        </Tab>
        <Tab eventKey="unicode" title="Unicode Text Converter">
          <TextInput toolName="Unicode Text Converter"></TextInput>
        </Tab>
        <Tab eventKey="sentenceCase" title="Sentence Case Converter">
          <TextInput toolName="Sentence Case Converter"></TextInput>
        </Tab>
      </Tabs>
    </div>
  );
}

const ToolMenu = (props) => {
  const isConverter = props.toolMode;
  if (isConverter) {
    return <ConverterTabs />;
  }
  return <GenetorTabs />;
};

ToolMenu.propTypes = {};

ToolMenu.defaultProps = {};

export default ToolMenu;
