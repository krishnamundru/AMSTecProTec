var guestcsr_page = function() {
    
    this.crackedscreenrepair =  element(by.xpath("//*[@id='navbarSupportedContent']/ul/li[2]/div/a[1]"));
    this.guestButton = browser.actions().mouseMove(element(by.xpath("//button[contains(.,'Continue as Guest')]"))).click().perform();
    this.buynow = element(by.xpath("//app-crack-screen-protection/section/div/div[3]/button"));
    
    this.number = element(by.xpath("//input[@formcontrolname='mobileNo']"));
    this.message = element(by.xpath("//textarea[@formcontrolname='message']"));
    this.submit = element(by.xpath("//app-crack-screen-protection/section/div/div[3]/button"));
    
    this.getCrackedscreenrepair = function() {
    	return this.crackedscreenrepair.click();
    };
    
    this.getBuynow = function() {
    	return this.buynow.click();
    };
    
    this.guestButton = function() {
        return this.guestbutton;
    };
    
    this.getMobileNum = function() {
    	return this.number.sendKeys("114949596");
    };
    
    this.getMessage = function() {
    	return this.message.sendKeys("Test demo 1");
    };
    
    this.getSubmit = function() {
    	return this.submit.click();
    };
};

module.exports = guestcsr_page;