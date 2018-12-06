var pg = require('pg');

var product_page = function() {
	
	this.priceRange = element(by.cssContainingText('option','RM 2001.00 - RM 3000.00'));
	
    this.buyNowCSRButton = element(by.xpath("//app-crack-screen-protection/section/div/div[3]/button"));
    
    this.buyNowDRButton = element(by.xpath("//app-accidental-damage/section/div/div[3]/button"));
    
    this.buyNowERButton = element(by.xpath("//app-extended-warranty/section/div/div[3]/button"));
    
    this.devicePrice = element(by.xpath("//input[@formcontrolname='devicePrice']"));
    
    this.name =  element(by.xpath("//input[@placeholder='Name*']"));
    
    this.imei = element(by.xpath("//input[@formcontrolname='deviceIMEI']"));
    
    this.personalName = element(by.xpath("//input[contains(@placeholder,'Full Name (as per IC or Passport)*')]"));
    
    this.personalMobileNum = element(by.xpath("//input[contains(@placeholder,'Mobile No.*')]"));
    
    this.personalEmail = 	element(by.xpath("//*[@id='guest_email']"));

    this.otp = element(by.xpath("//*[@id='otpVerifyModal']/div[1]/div/div/form/div[1]/input"));
    
    this.cardHolderName = element(by.css('#braintree__card-view-input__cardholder-name'));
    
    this.submit = element(by.xpath("//button[contains(.,'SUBMIT')]"));
    
    
    this.getPriceRange = function() {
        return this.priceRange.click();
    };
    
    this.getBuyNowCSRButton = function() {
        return this.buyNowCSRButton.click();
    };
    
    this.getBuyNowDRButton = function() {
        return this.buyNowDRButton.click();
    };
    
    this.getBuyNowERButton = function() {
        return this.buyNowERButton.click();
    };
        
    this.getDevicePrice = function() {
    	return this.devicePrice.sendKeys("2222");
    };
    
    this.getGuest = function() {
    	return this.continueGuest;
    };
    
    this.getIMEI = function() {
    	return this.imei.sendKeys("546436655777778");
    };
    
    this.getPersonalName = function() {
    	return this.personalName.sendKeys("Krishnaprasad");;
    };
    
    this.getPersonalMobileNum = function() {
    	return this.personalMobileNum.sendKeys("1117812690");
    };
    
    this.getPersonalEmail = function() {
    	return this.personalEmail.sendKeys("kprasad1155@gmail.com")
    };
    
    this.getCardHolderName = function() {
    	return this.cardHolderName.sendKeys("TestABC");
    };
    
    this.getOTP = function() {
    	/*var resultOTP;

    	(function(){
    	var config = {
    				database : 'Prod-Test', // env var: PGDATABASE
    				user : 'root', // env var: PGUSER
    				password : 'password', // env var: PGPASSWORD
    				host : 'fom-digital-dev.cqawwlhgqyb6.ap-southeast-1.rds.amazonaws.com', // Server hosting the postgres database
    				port : 5432, // env var: PGPORT
    				max : 10, // max number of clients in the pool
    				idleTimeoutMillis : 30000, // how long a client is allowed to remain idle before being closed
    			};
    		
	    	var pool = new pg.Pool(config);
	    		
	    	pool.connect(function(err, client, done) {
    		
    		if (err) {
    			return console.error('error fetching client from pool', err);
    		}
    		
    		pool.on('error', function(err, client) {
    			console.error('idle client error', err.message,	err.stack);
    		});

    		client.query("select otp from d2c_payment_customer_mobile_otp where mobile_no=' 601117812690'",	
    					function(err, result) 
    					{
    			// call `done()` to release the client back to the pool
    			done();
    			
    			if (err) {
    			return console.error('error running query',err);
    			}
    			browser.sleep(3000);
    			console.log("Result length"+ result.rows.length);
    			browser.sleep(3000);
    			//	console.log("Result rows are"+ result.rows);
    			//resultOTP1=result;
    			console.log("Return otp is==>"+ result.otp);

    			return resultOTP = result.rows[0].otp;

    			console.log("Return otp is==>"+ resultOTP);
    			
    			console.log("Return otp text is==>"+ resultOTP.toString());
    		});
    	});
    	})(resultOTP);

    	console.log("Return value outside is"+resultOTP);	

    	browser.sleep(4000);
    	
    	console.log("Return value inside is"+resultOTP);
    	
    	return this.otp.sendKeys(""+resultOTP);*/
    	return this.otp.sendKeys("");
    };
};

module.exports = product_page;