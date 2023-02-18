import GeneratorType from "../components/enums";

function handleGeneration(props) {
  const generationMode = props.generationMode;
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

function SmallCaseGeneration(text) {}
function WideTextGeneration(text) {}
function BoldTextGeneration(text) {}
function StrikethroughGeneration(text) {}
