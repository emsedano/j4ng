## => j4Ng 
> `@emsedano` ([github.com](github.com/emsedano), [live.com.mx](mailto:emsedano@live.com.mx)
> `@eliasmsedano` ([gmail.com](mailto:eliasmsedano@gmail.com), [linkedin.com](https://www.linkedin.com/in/eliasmsedano), [twitter.com](https://twitter.com/eliasmsedano))
> `@eliasm` ([mx1.ibm.com](mailto:eliasm@mx1.ibm.com))
 ### Agenda
  * Prerequisites & first step (to create an ng app)
  * Components
  * **Data & event binding**
    * Interpolation
    * Data binding
    * Two-way data binding
    * Event binding
      * dom events
      * custom events
  * Directives (very small talk)
  * Routing
  * Services
  * Deploying
  -------------------------------
  ## Data & event binding
  Here we start adding logic with differents mechanism like interpolation, data-binding, two-way data binding and of course, with events (dom and custom).

![databinding](https://raw.githubusercontent.com/emsedano/j4ng/03-data-event-binding-complete/assets/databinding.png)

  ### Data interpolation
  To comunicate props to somewhere in the view, this is achieved in the following format palced in html `{{<propName>}}`

  ### Data binding
  Bind a property to input controls

  ```javascript
   // Somewhere in the top of my component.../
   buttonText: string = 'Create note';
  ```
  ```html
  <button type="submit" [value]="buttonText"/>
  ```

  ### Two-way data binding
  Bind a property to input controls AND input value changes to modify the property value

  ```html
  <input type="text" ([ngModel])="noteTitle" name="title"/>
  ```

  **BUT**... before that, we need to import a dependency that is the `FormsModule`
  ```typescript
  // Add this to the module that contains your component
  import {FormsModule} from '@angular/forms`
  ```

  > Note: inputs within `form` tags should include the `name` in conmbination to `ngModel`, this is because internally angular creates a `NgForm` and register the fields using the value of `name` attribute

  ![component-databinding.png](https://raw.githubusercontent.com/emsedano/j4ng/03-data-event-binding-complete/assets/component-databinding.png)

  ### Events
  You can use Angular event bindings to respond to any [DOM event](https://www.w3schools.com/jsref/dom_obj_event.asp).

  ```html 
  <a (click)="handleClick()">click me</a>
  ```


### Custom events
Custom events are basically events emit in up way direction, and is the angular way to send data from child to parents. We achieve that by using the `@Output()` decorator assigned to a `EventEmitter` object.

  ![component-databinding.png](https://raw.githubusercontent.com/emsedano/j4ng/03-data-event-binding-complete/assets/parent-child-binding.png)