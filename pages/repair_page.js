var repair_page = function() {
    
    this.button = element(by.xpath("//a[contains(.,'Book Now')]"));
    this.name =  element(by.xpath("//input[@placeholder='Name*']"));
    this.email = element(by.xpath(".//*[@id='repairForm']/div/div/div/form/div[5]/div[2]/div[2]/input"));
    this.number = element(by.xpath("//input[@placeholder='Phone*']"));
    this.message = element(by.xpath("//textarea[@placeholder='Message*']"));
    this.submit = element(by.xpath("//button[contains(.,'SUBMIT')]"));
    
    this.bookButton = function() {
        return this.button.click();
    };
      
    this.getName = function() {
    	return this.name.sendKeys("Test2");
    };
    
    this.getEmail = function() {
    	return this.email.sendKeys("abc@gmail.com");
    };
    
    this.getMobileNum = function() {
    	return this.number.sendKeys("099494959696");
    };
    
    this.getMessage = function() {
    	return this.message.sendKeys("Test abc");
    };
    
    this.getSubmit = function() {
    	return this.submit.click();
    };
        
};

module.exports = repair_page;