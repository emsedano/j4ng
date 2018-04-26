# j4Ng 
### Agenda
* Prerequisites & first step (to create an ng app)
* Components
* Data & event binding
* Directives (very small talk)
* Routing
* **Services**
  * **`@Injectable` decorator**
  * **Provide**
  * **Sharing data between components**
* Deploying
-------------------------------

Services are commonly used to fetch data from http resources, and/or sharing data between components.

**`@Injectable` decorator**
`ng create service <path/service>`

**Provide**
```typescript
//...
providers: [<YourImportedServide>]
//
```
**Sharing data between components**
One good (and most used way) is to user Subjects (which also are Observables)