import ToolTypes from "../components/enums";

function handleGeneration(mode) {
  const generationMode = mode;
  switch (generationMode) {
    case ToolTypes.Generator.Smallcase:
      return SmallCaseGeneration();
    case ToolTypes.Generator.Wide:
      return WideTextGeneration();
    case ToolTypes.Generator.Bold:
      return BoldTextGeneration();
    case ToolTypes.Generator.Strikethrough:
      return StrikethroughGeneration();
    default:
      return null;
  }
}

function SmallCaseGeneration() {
  return {
    textTransform: "lowercase",
  };
}
function WideTextGeneration() {
  return { fontStretch: "expanded" };
}
function BoldTextGeneration() {
  return { fontWeight: "bold" };
}
function StrikethroughGeneration() {
  return { textDecoration: "line-through" };
}

export default handleGeneration;
