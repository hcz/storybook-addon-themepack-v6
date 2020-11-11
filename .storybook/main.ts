const {managerWebpack} = require('./webpack/webpackManager.config');
const {webpackFinal} = require('./webpack/webpackFinal.config');

module.exports = {
	"stories": [
		"../src/**/*.stories.@(ts|tsx)",
	],
	"addons": [
		'storybook-addon-themepack'
	],
	managerWebpack,
	webpackFinal,
}
