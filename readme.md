


### Framework setup
**CodeceptJS** is an end to end testing framework.CodeceptJS bypasses execution commands to helpers
When the helper is enabled in config all methods of a helper class are available in I object.

- **codecept.conf.js** configuration file will include helper, report, output,...
- **pages folder**: contains page object class contains selector, function to interact with this one
- **helper folder**: contains custom helper class contains common function to interact with element on app and available in I object to call
to methods of helpers defined in configuration file, utils file contains common function 
- **features folder**: features file in BDD styles
- **step_defination folder**: steps files

 ### How to run the project
1. Run test scripts by these ways

- Install node modules and allow IDE provide  

```
 npm install 
 npx codeceptjs def 
 
```
- **Run script to see verbose log** 
```
 npx codeceptjs run --grep "@pricing" --verbose

```

- **Run script to see allure report and open** 

```
 npx codeceptjs run --grep "@pricing" --plugins allure --debug

```
OR

```
 npm run test

```
And view the Allure report

```
 allure serve output

```