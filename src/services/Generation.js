import GeneratorType from "../components/enums";

const Generation = (props) => {
  return handleGeneration(props);
};

function handleGeneration(props) {
  const generationMode = props.mode;
  switch (generationMode) {
    case GeneratorType.Smallcase:
      return SmallCaseGeneration(props.text);
      break;
    case GeneratorType.Wide:
      return WideTextGeneration(props.text);
      break;
    case GeneratorType.Bold:
      return BoldTextGeneration(props.text);
      break;
    case GeneratorType.Strikethrough:
      return StrikethroughGeneration(props.text);
      break;
    default:
      return null;
  }
}

function SmallCaseGeneration(text) {
  console.log("test");
  return <p>Oley!</p>;
}
function WideTextGeneration(text) {}
function BoldTextGeneration(text) {}
function StrikethroughGeneration(text) {}

export default Generation;
