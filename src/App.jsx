import React from "react";
import "./style.scss";
import { Button } from "./Button";

export default function App() {
	return (
		<div>
			<h1>React Styled components</h1>

			<Button>primary</Button>
			<Button variant="secondary" style={{ marginLeft: "10px" }}>
				secondary
      		</Button>
			<Button variant="accent" style={{ marginLeft: "10px" }}>
				accent
      		</Button>
			<Button variant="error" style={{ marginLeft: "10px" }}>
				error
      		</Button>

			<Button variant="success" style={{ marginLeft: "10px" }}>
				success
      		</Button>
		</div>
	);
}
