import { browser, by, element } from 'protractor';

export class RegisterObjects{
    
    public registerForm = element(by.className('nav navbar-nav pull-xs-right')).all(by.tagName('li')).get(2);
    public username = element(by.name('username'));
    public signup = element(by.className('btn btn-lg btn-primary pull-xs-right'));
    public errorEmail = element(by.className('error-messages')).all(by.tagName('li')).get(0);
    public errorPassword = element(by.className('error-messages')).all(by.tagName('li')).get(1);
    public errorUser = element(by.className('error-messages')).all(by.tagName('li')).get(2);
    public settings = element.all(by.className('nav-item')).get(2);
    public logout = element(by.className('btn btn-outline-danger'));

}