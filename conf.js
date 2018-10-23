var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		directConnect: true,
		
		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		
		specs: ['Repair.js'],
		specs: ['Claims.js'],
		specs: ['SMD.js'],
		specs: ['TermsofUse.js'],
		specs: ['ContactUS.js'],
		specs: ['AboutUS.js'],
		specs: ['CSP.js'],
		specs: ['Damage_Protection.js'],
		
		capabilities: {
			browserName: 'chrome'
		},
		
		jasmineNodeOpts: {
		    showColors: true,   // Use colors in the command line report.  
		    defaultTimeoutInterval: 90000   // Default time to wait in ms before a test fails.
	},
		//for reports
		onPrepare: function(){			
			jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
				savePath: './reports',
				takeScreenshots : true,
				fixedScreenshotName:true,
				consolidateAll : true
			})
			);
		}
};
