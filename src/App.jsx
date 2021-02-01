import React from "react";
import { ThemeProvider } from 'styled-components';
import "./style.scss";
import { Button } from "./Button";
import { theme } from './theme';
import { Layout } from './Layout';

const customTheme = Object.assign(theme, {});
customTheme.palette.success = {
	light: '#e0e0e0',
	main: '#21ac4f',
	dark: '#206336',
	contrastText: '#fff',
}

export default function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<Layout>
				<h1>React Styled components</h1>

				<Button variant="primary">primary</Button>
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
			</Layout>
		</ThemeProvider>
	);
}
