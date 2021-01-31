import React from "react";
import { ThemeProvider } from 'styled-components';
import "./style.scss";
import { Button } from "./Button";
import { theme } from './theme';
import { Layout } from './Layout';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
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
			</Layout>
		</ThemeProvider>
	);
}
