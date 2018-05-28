// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    //listenAddress: process.env.LOCAL_IP,
    hostname: process.env.LOCAL_IP,
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    /*browsers: ['HeadlessChrome'],
    customLaunchers:{
	HeadlessChrome:{
	  base: 'ChromeHeadless',
	  flags: [
		 '--no-sandbox',
		 '--disable-setuid-sandbox',
		 '--disable-gpu',
		 '--remote-debugging-port=9222',
	  ]
	}
    },*/
    browsers: ['ChromeHeadless'],
    /*browsers: ['Chrome_without_security'],
    customLaunchers: {
	    Chrome_without_security: {
		base: 'ChromeHeadless',
		flags: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-gpu',
			'--remote-debugging-port=9222',
			],
		debug: true
		},
     }, */
     //concurrency: Infinity,	  
     singleRun: false
  });
};
