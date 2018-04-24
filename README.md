## => j4Ng 
> `@emsedano` ([github.com](github.com/emsedano), [live.com.mx](mailto:emsedano@live.com.mx)
> `@eliasmsedano` ([gmail.com](mailto:eliasmsedano@gmail.com), [linkedin.com](https://www.linkedin.com/in/eliasmsedano), [twitter.com](https://twitter.com/eliasmsedano))
> `@eliasm` ([mx1.ibm.com](mailto:eliasm@mx1.ibm.com))
 ### Agenda
  * Prerequisites & first step (to create an ng app)
  * Components
  * Data & event binding
  * **Directives (very small talk)**
    * Structural
    * Attribute
  * Routing
  * Services
  * Deploying
  -------------------------------
  ## Directives
  The facts:
  * `@Component`s are technically `@Directive`s (Component extends from Directive)
  * There are two kind of them `structural`& `attribute` directives
  
  ### Structural directive
  Alter layout by adding, removing, and replacing elements in DOM
  ```html
    <li *ngFor="let hero of heroes"></li>
    <app-hero-detail *ngIf="selectedHero"></app-hero-detail>
    <!-- *ngSwitchCase -->
  ```
  We can identify them because the `*` prefixed
  ### Attribute directive
  Alter the appearance or behavior of an existing element. (normally are within brackets but is not a rule)
  ```html
  <input [(ngModel)]="hero.name"/>
  <div [ngStyle]="currentStyles">
  <div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special</div>
  ```