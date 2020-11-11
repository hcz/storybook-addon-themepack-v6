function webpackFinal(config) {
	config.output.filename = '[name].client.bundle.js';

	return config;
}

module.exports = {webpackFinal}
