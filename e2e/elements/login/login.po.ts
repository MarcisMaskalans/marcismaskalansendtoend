import { browser, by, element } from 'protractor';

export class LoginObjects{

    public loginForm = element(by.className('nav navbar-nav pull-xs-right')).all(by.tagName('li')).get(1);
    public email = element(by.name('email'));
    public password = element(by.name('password'));
    public signin = element(by.className('btn btn-lg btn-primary pull-xs-right'));
    public error = element(by.className('error-messages'));
    

}