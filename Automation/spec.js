// spec.js
describe('Backbase Assessment App', function() {
  var AddCompBtn = element(by.id('add'));
  var FilterNameButton = element(by.id('searchsubmit'));
  var FindCompName = element(by.id('searchbox'));

  //beforeEach(function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://computer-database.herokuapp.com/computers');
  //});

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Computers database');
  });

  it('should add a new computer Che', function() {
    
    AddCompBtn.click()

    var CompName = element(by.id('name'));
    CompName.sendKeys('Che');

    var Intro = element(by.id('introduced'));
    Intro.sendKeys('2018-03-17');   

    var DisCont = element(by.id('discontinued'));
    DisCont.sendKeys('2020-03-17');   

    var CompDrop = element(by.id('company'));
    CompDrop.$('[value="22"').click()    

    var CreateBTN = element(by.css('[value="Create this computer"]'));
    CreateBTN.click();

    var ResultText = element.all(by.cssContainingText('strong', 'Done!')).get(0).getText(); 
    
    expect(ResultText).toMatch('Done!');

    // browser.driver.sleep(5000);
  });

  it('should find computer Che', function() {

    // var FindCompName = element(by.id('searchbox'));
    FindCompName.sendKeys('Che');

    // var FilterNameButton = element(by.id('searchsubmit'));
    FilterNameButton.click();

    var ResultComp = element.all(by.cssContainingText('td', 'Che')).get(0).getText();    
    expect(ResultComp).toMatch('Che');

    var ResultIntro = element.all(by.cssContainingText('td', '17 Mar 2018')).get(0).getText();    
    expect(ResultIntro).toMatch('17 Mar 2018');    

    var ResultDisc = element.all(by.cssContainingText('td', '17 Mar 2020')).get(0).getText();    
    expect(ResultDisc).toMatch('17 Mar 2020');

    var ResultCompany = element.all(by.cssContainingText('td', 'Acorn computer')).get(0).getText();    
    expect(ResultCompany).toMatch('Acorn computer');    

   // browser.driver.sleep(5000);
  });

  it('should Edit computer Che', function() {

    var Link = element(by.cssContainingText('a', 'Che')).getAttribute('href')   
    Link.click();

    var ChangeName = element(by.id('name'));
    ChangeName.sendKeys(' - changed');

    var ChangeCompDrop = element(by.id('company'));
    ChangeCompDrop.$('[value="24"').click()    

    var SaveBTN = element(by.css('[value="Save this computer"]'));
    SaveBTN.click();

    var SaveText = element.all(by.cssContainingText('strong', 'Done!')).get(0).getText(); 
    
    expect(SaveText).toMatch('Done!');

    // browser.driver.sleep(5000);
  });

  it('should find amended computer Che', function() {

    FindCompName.sendKeys('Che - changed');

    FilterNameButton.click();

    var ResultCompAmended = element.all(by.cssContainingText('td', 'Che - changed')).get(0).getText();    
    expect(ResultCompAmended).toMatch('Che');

    var ResultIntroAmended = element.all(by.cssContainingText('td', '17 Mar 2018')).get(0).getText();    
    expect(ResultIntroAmended).toMatch('17 Mar 2018');    

    var ResultDiscAmended = element.all(by.cssContainingText('td', '17 Mar 2020')).get(0).getText();    
    expect(ResultDiscAmended).toMatch('17 Mar 2020');

    var ResultCompanyAmended = element.all(by.cssContainingText('td', 'Nintendo')).get(0).getText();    
    expect(ResultCompanyAmended).toMatch('Nintendo');    

    // browser.driver.sleep(5000);
  });

  it('should Delete computer Che', function() {
    var LinkDelete = element(by.cssContainingText('a', 'Che - changed')).getAttribute('href')   

    LinkDelete.click();

    var DeleteBTN = element(by.css('[value="Delete this computer"]'));
    DeleteBTN.click();

    var DeleteText = element.all(by.cssContainingText('strong', 'Done!')).get(0).getText(); 
    
    expect(DeleteText).toMatch('Done!');

    // browser.driver.sleep(5000);
  });

  it('check that computer Che - changed has been deleted', function() {
    FindCompName.sendKeys('Che - changed');

    FilterNameButton.click();

    var ResultText = element.all(by.cssContainingText('em', 'Nothing to display')).get(0).getText();    

    expect(ResultText).toMatch('Nothing to display');
  });

});