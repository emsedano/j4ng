# j4Ng 
### Agenda
* Prerequisites & first step (to create an ng app)
* Components
* Data & event binding
* Directives (very small talk)
* **Routing**
  * RouterConfig
* Services
* Deploying
-------------------------------
### Routing
Routing in Angular is very easy 3 steps

#### 1) Import & configure Routing module
```typescript
import { Routes, RouterModule } from '@angular/router';
//... other stuff
```
#### 2) Define your Routes
```typescript
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'note',
    component: NoteComponent
  }
];
```

#### 3) Create the routing module
```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```



#### Extra: Routes options

* `Guard` Services
* Load `children routes`
* Set up `Resolvers`
```typescript
{
    path: 'user-profile',
    canActivate: [AuthGuardService], // Guard Services
    // children: [{/** more routes */}]
    loadChildren: './user-profile/user-profile.module#UserProfileModule'
  }

// ./user-profile/user-profile.module#UserProfileModule'
const routes = [
  {
    path: '',
    component: UserProfileComponent,
    resolve: {
      currentUser: UserProfileResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }

```


