## => j4Ng ???
> `@emsedano` ([github.com](github.com/emsedano), [live.com.mx](mailto:emsedano@live.com.mx)
> `@eliasmsedano` ([gmail.com](mailto:eliasmsedano@gmail.com), [linkedin.com](https://www.linkedin.com/in/eliasmsedano), [twitter.com](https://twitter.com/eliasmsedano))
> `@eliasm` ([mx1.ibm.com](mailto:eliasm@mx1.ibm.com))
 ### Agenda
  * Prerequisites & first step (to create an ng app)
  * **Components**
    * How to create them
    * Structure
    * Templating & styling
  * Data & event binding
  * Directives (very small talk)
  * Routing
  * Services
  * Deploying
  -------------------------------
  ## Understanding `@component`
  We can think on them as the basic building blocks of your application

  #### How to create them
> `ng generate component <[component/path/]component-name>`
> e.g. `ng generate component home`

> **for millenials ;)** `ng g c <millenial/way>`
> `-it -is` another way, `ng g component home -it - is`


  #### Structure
 ```typescript
 // The imports
import { Component } from '@angular/core';
// The decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// The actual component definition (where our magic resides)
export class AppComponent {
  title = 'app';
}
 ```
#### Templating & styling
```typescript
// The angular way
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// The inline way
@Component({
  selector: 'app-root',
  template: `
   <div class="inline-templating">Hello I'm inline component</div>
  `,
  styles: [`
  .inline-templating {
    color: orange;
  }
  `]
})
```

**Important points**
* Global styles resides on `src/styles.scss`
* Local styles only affects current component (and overrides globals)