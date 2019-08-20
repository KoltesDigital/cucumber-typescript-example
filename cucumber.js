const common = [
	'tests/features/**/*.feature',
	'--require-module ts-node/register',
	'--require tests/step-definitions/**/*.ts',
];

function setProfile(name, ...args) {
	exports[name] = common.concat(args).join(' ');
}

const testsOutputDirectory = 'tests-output';

setProfile(
	'cicd',
	`--format json:${testsOutputDirectory}/results.json`,
	`--format usage-json:${testsOutputDirectory}/usage.json`,
	'--parallel 20'
);

setProfile('default', '--format progress-bar');
