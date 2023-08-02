import './index.css';
import {initializeIcons} from "@fluentui/react";
import Calculator from "./components/Calculator.tsx";
import useCalculator from "./hooks/useCalculator.tsx";

initializeIcons();

function App() {
	const {isOpen, openCalculator, closeCalculator} = useCalculator();

	function renderScreen() {
		return isOpen ? <Calculator close={closeCalculator}/> : <button className="" onClick={openCalculator}>Open</button>
	}

	return (
		<div className="">
			{renderScreen()}
		</div>
	)
}

export default App;