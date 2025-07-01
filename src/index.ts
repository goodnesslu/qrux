#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import { scaffoldProject } from "./scaffolder.js";

program
	.command("create")
	.description("Create a new project with interactive setup")
	.action(async () => {
		const options = await inquirer.prompt([
			{
				type: "input",
				name: "projectName",
				message: "What is your project named?",
				default: "my-qrux-app",
			},
			{
				type: "list",
				name: "template",
				message: "Choose a base template:",
				choices: [
					{ name: "React + Vite (TypeScript)", value: "react-ts" },
					{ name: "Vanilla JS + Vite", value: "vanilla-ts" },
				],
			},
			{
				type: "checkbox",
				name: "addons",
				message: "Select additional tools to install:",
				choices: [
					{ name: "ESLint + Prettier", value: "lint-format", checked: true },
					{ name: "Tailwind CSS", value: "tailwind", checked: true },
				],
			},
			{
				type: "confirm",
				name: "git",
				message: "Initialize a new git repository?",
				default: true,
			},
		]);

		await scaffoldProject(options);
	});

program.parse(process.argv);
