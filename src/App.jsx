import React from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Button, Layout, Card, CardBody, Typography } from "./components";
import "./style.scss";

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
			<Layout className="p-3">
				<Typography as="h1">React Styled components</Typography>

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

				<Button disabled style={{ marginLeft: "10px" }}>
					disabled
      			</Button>

				<Card className="mt-3">
					<CardBody>
						<Typography as="h1">Heading1</Typography>
						<Typography as="h2">Heading2</Typography>
						<Typography as="h3">Heading3</Typography>
						<Typography as="h4">Heading4</Typography>
						<Typography as="h5">Heading5</Typography>
						<Typography as="h6">Heading6</Typography>
						<Typography>some span</Typography>
						<Typography as="p">some paragraph</Typography>
					</CardBody>
				</Card>

			</Layout>
		</ThemeProvider>
	);
}
