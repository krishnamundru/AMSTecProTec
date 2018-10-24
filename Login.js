//var repair_page = require('./pages/repair_page.js');
//var repairPageObj;

describe('Test for Login', function() {
	
	beforeEach(function() {
		console.log("before each case");
	//	repairPageObj = new repair_page();
		var url = 'https://www-uat.tecprotec.co/';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('Login', function() {
		console.log("Inside the Login section");
		
		browser.sleep(5000);
		//repairPageObj.bookButton();
		//element(by.css('.html body app-root div app-about-us app-header nav.navbar.navbar-fixed-top.navbar-expand-lg div.container-fluid div#loginSignupModal.userModalBtn.text-center.display-desktop button.btn.login-btn')).click();
	/*	var li = element(by.xpath("//*[@id='navbarSupportedContent']/ul[1]/li[4]/a[1]"));
		
		$('button[name="LOG IN"]').click();
		
		console.log("After claim" + li.getText());*/
	/*	li.getAttribute('value').then(function (value) {
		    console.log(value);
		});
		li.click();*/
		/*element(by.xpath('//*[@id="loginSignupModal"]')).click().then(function(test) {
			console.log("Size is"+test.count());
		*/
		
		$$('button#login-btn').get(0).click();
		
		browser.sleep(6000);
			var EC = protractor.ExpectedConditions;
			var signinButton = element(by.id('loginSignupModal'));
			// waiting for 10 seconds that the button will be visible
			browser.wait(EC.visibilityOf(signinButton ), 10000, "Button signin not visible");
			    browser.executeScript('document.querySelector("#loginSignupModal").scrollIntoView()').then(function() {
			  signinButton.click().then(function() {
			    console.log('button has been clicked here');
			  });
			});
			
		//	element(by.xpath(".//*[text()='SIGN IN']")).click();
		//browser.actions().mouseMove(element.all(by.xpath("//*[@id='loginSignupModal']/button[1]"))).get(0).click().perform();	
		//element(by.css('#loginSignupModal > button.btn.login-btn')).click();
		/*element.all(by.xpath("//*[@id='loginSignupModal']/button[1]")).get(0).click().then(function() {
			browser.sleep(3000);
			browser.actions().mouseMove(element(by.xpath(".//*[text()='Sign In']"))).click().perform();		
		});*/
		
		/*element.all(by.css('.col-md-6')).get(1).click().then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='APPLE']")).click();		
		});
		
		element.all(by.css('.col-md-6')).get(2).click().then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='IPHONE 5 16GB']")).click();		
		});
		
		element.all(by.css('.col-md-6')).get(3).click().then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='Screen replacement']")).click();		
		});
		
		element(by.css('.repairType')).getText().then(function(text){
			console.log("Repair type is "+text);
		});
		
		element(by.css('.money')).getText().then(function(money){
			console.log("Money is "+money);	
		});
		
		browser.sleep(3000);
		repairPageObj.getName();
		browser.sleep(3000);
		repairPageObj.getEmail();
		browser.sleep(3000);
		repairPageObj.getMobileNum();
		browser.sleep(3000);
		repairPageObj.getMessage();
		browser.sleep(3000);
		repairPageObj.getSubmit();
		
		element(by.xpath('//app-thankyou/div/div/div/div[2]/h2')).getText().then(function(text) {
			browser.sleep(3000);
			console.log("Text is "+text.trim());
			expect(text.trim()).toEqual("Thank you for booking a repair session with our trusted TecPro! We'll contact you within 60 minutes.");
		});
			
		element(by.xpath('//app-thankyou/div/div/div/div[2]/p')).getText().then(function(text1) {
			browser.sleep(3000);
			console.log("Text is "+text1);
			expect(text1.trim()).toEqual("Available from Monday to Sunday, 9am to 6pm, excluding Public Holidays.");
		});*/
	});
});