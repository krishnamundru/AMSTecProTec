describe('Test suite for CSP',function() {
			beforeEach(function() {
			console.log("before each case");
			var url = 'https://www-uat.tecprotec.co/protect/cracked-screen-protection';
			browser.manage().window().maximize();
			browser.get(url);
			});

			it('test',function() {
				browser.sleep(3000);
				console.log("Inside the CSP section test1");
				element(by.cssContainingText('option','RM 3001.00 - RM 4000.00')).click();
				browser.sleep(3000);
				element(by.cssContainingText('button', 'Buy Now')).click();
				browser.sleep(3000);

				browser.actions().mouseMove(element(by.xpath("//button[contains(.,'Continue as Guest')]"))).click().perform();
				
				browser.sleep(3000);

				element(by.xpath("//input[@formcontrolname='deviceIMEI']")).sendKeys("546436655777778");
				
				element.all(by.xpath("//input[@formcontrolname='deviceBrand']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='Apple']")).click();		
				});
				
				element.all(by.xpath("//input[@formcontrolname='deviceModel']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='iPhone 6']")).click();		
				});
				
				element.all(by.xpath("//input[@formcontrolname='priceRange']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='RM 1001.00 - RM 1500.00']")).click();		
				});
				
				element(by.xpath("//input[@placeholder='Purchase Date']")).sendKeys("2018-10-10");
				browser.sleep(3000);
				
				browser.actions().sendKeys(protractor.Key.TAB).perform();
				
				element(by.xpath("//input[@formcontrolname='invoiceImageUrl']")).sendKeys("C:\\Users\\krishnaprasad\\Pictures\\Capture 2.PNG");
				
			
				browser.sleep(5000);
				element(by.xpath("//input[@placeholder='Your Name']")).sendKeys("Test sample");
				browser.sleep(3000);
				
				element(by.xpath("//input[@placeholder='Mobile No.']")).sendKeys("1117812690");
				browser.sleep(5000);
				
				element.all(by.xpath("//input[@formcontrolname='email']")).first().sendKeys("abc@gmail.com");
				browser.sleep(5000);
				
			 
				console.log("After click button");
				
			/*	var policy = element(by.linkText('privacy policy'));
				browser.executeScript("arguments[0].scrollIntoView();", policy.getWebElement());
				policy.click();

				browser.sleep(5000);
				//element(by.linkText('privacy policy')).click();
			   //browser.sleep(5000);
				element.all(by.css('.lc-1k5fzox e1m5b1js0')).get(0).click();
				browser.sleep(3000);
				
				element.all(by.xpath("//input[@formcontrolname='paymentMethod']")).then(function() {
					browser.sleep(3000);
					browser.actions().mouseMove(element(by.xpath(".//*[text()='Credit card / debit card']"))).click().perform();		
				});
				var form = element(by.xpath(".//*[@id='uploadFileTextField']"));
				var ele = form.element(by.css('input[type=file]'));
				ele.sendKeys("C://Users//krishnaprasad//Pictures//Capture 2.PNG"); // element(by.xpath("//input[type='file']")).
				*/
				
				//element(by.xpath(".//span[contains(@class,'checkmark')]")).click();
				browser.sleep(8000);
				element(by.css('.checkmark')).click();
				element(by.xpath("//button[contains(.,'Buy Now')]")).click();
				browser.sleep(5000);
				
			});

		});