function managerWebpack(config) {
	config.output.filename = '[name].manager.bundle.js';

	return config;
}

module.exports = {managerWebpack}
