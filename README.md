trust-html
=====
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Git repository](#git)
5. [Version](#version)

### <a name="description"></a>1. Description
angular2+ trust html module which exposes 
[trust-html-pipe](https://github.com/tvicpe/trust-html-pipe).  
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a dev 
dependency in your `package.json` file  
```
npm install trust-html --save
```
  
### <a name="usage"></a>3. Usage
In order to use the `TrustHtmlModule` module and the 
[trust-html-pipe](https://github.com/tvicpe/trust-html-pipe) pipe you have to include/import 
it into your application:
```
import {TrustHtmlModule} from 'trust-html';
```
  
Add the module into the app's module `imports` section:
```typescript
import { TrustHtmlModule } from 'ng2-modal-module';

@NgModule({
  //...
  imports: [
	//...
	TrustHtmlModule // <<--- HERE
  ],
  //...
})
```
  
More details how to use `trust-html-pipe` you can find 
here: [https://github.com/tvicpe/trust-html-pipe](https://github.com/tvicpe/trust-html-pipe)
  
  
### <a name="git"></a>4. Git repository
[https://github.com/tvicpe/trust-html](https://github.com/tvicpe/trust-html)
  
  
### <a name="version"></a>5. Version
0.0.2
