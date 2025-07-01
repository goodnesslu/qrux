import chalk from "chalk";
import { execa } from "execa";
import ora from "ora";

// Define the type for our options object for clarity
interface ScaffoldingOptions {
	projectName: string;
	template: string;
	addons: string[];
	git: boolean;
}

export async function scaffoldProject(options: ScaffoldingOptions) {
	console.log(chalk.bold.cyan("\nStarting your project setup..."));

	const spinner = ora("Creating project structure with Vite...").start();

	try {
		// 1. Run `npm create vite`
		await execa("npm", [
			"create",
			"vite@latest",
			options.projectName,
			"--",
			"--template",
			options.template,
		]);
		spinner.succeed("Project structure created.");

		const projectPath = `./${options.projectName}`;

		// 2. Install "Day One" addons if selected
		if (options.addons.length > 0) {
			spinner.start(`Installing dependencies and configuring addons...`);
			// In a real implementation, you would have functions for each addon
			// For now, we'll just log it. You can build these out.
			if (options.addons.includes("tailwind")) {
				console.log(
					chalk.gray(
						"  - (Skipped) Would install and configure Tailwind CSS..."
					)
				);
				// Example: await execa('npm', ['install', '-D', 'tailwindcss', 'postcss', 'autoprefixer'], { cwd: projectPath });
			}
			if (options.addons.includes("lint-format")) {
				console.log(
					chalk.gray(
						"  - (Skipped) Would install and configure ESLint + Prettier..."
					)
				);
			}
			spinner.succeed("Addons configured.");
		}

		// 3. Initialize Git
		if (options.git) {
			spinner.start("Initializing Git repository...");
			await execa("git", ["init"], { cwd: projectPath });
			await execa("git", ["add", "."], { cwd: projectPath });
			await execa("git", ["commit", "-m", "Initial commit from qrux"], {
				cwd: projectPath,
			});
			spinner.succeed("Git repository initialized.");
		}

		console.log(chalk.bold.green("\n✅ Your project is ready!"));
		console.log(chalk.cyan("\nNext steps:"));
		console.log(`  cd ${options.projectName}`);
		console.log(`  npm install`);
		console.log(`  npm run dev`);
	} catch (error) {
		spinner.fail("An error occurred during setup.");
		console.error(chalk.red(error));
		process.exit(1);
	}
}
