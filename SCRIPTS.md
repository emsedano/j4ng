> **Prereqs & first steps**
 `ng new mynotes --style=scss --routing`

> **Components**
  `ng g c home`
  `ng g c details`
   how use them
   ```html
    <!--app.component.html-->
    <ul>
      <li><a routerLink="">Home</a>
      <li><a routerLink="about">Details</a>
    </ul>
    
    <app-home></app-home>

    <router-outlet></router-outlet>
   ```

   home.component.html
   ```html
<div class="container color-dark">
  <div class="col">
   <p>Add a Note</p>
  </div>
  <div class="col">
   <p>Your note list</p>
  </div>
  </div>
  <div class="container color-light">
  <div class="col">
   <p class="sm">Use this form below to add a new note. How do you digest a tech topic?</p>

   <form>
     <input type="text" class="txt" name="note" placeholder="Note title">
     <textarea placeholder="Your digested topic"></textarea>
     <input type="submit" class="btn" value="Add Note">
   </form>
  </div>
  <div class="col">
   <p class="life-container">
     How to grant linux permissions in console
   </p>
  </div>
  </div>


  <p data-line="45" class="sync-line" style="margin:0;"></p>
```

   **templating**
   styles.scss
   ```css
@import url('https://fonts.googleapis.com/css?family=Raleway:300,700');

body {
 background:rgb(230, 120, 46);
 padding: 3em;
 font-family: 'Raleway', 'Arial';
 color:#fff;
}
ul {
 list-style-type:none;
 margin:0 0 2em 0;
 padding:0;
}
ul li {
 display:inline;
 margin-right: 30px;
}
ul li a {
 font-size: 1.5em;
}
a {
 color:#fff;
 text-decoration:none;
}

```

home.scss
```css
.container {
  display: grid;
  grid-template-columns: 50% auto;
}
.col {
  padding: .4em 1.3em;
}
.color-dark {
  background: rgb(196, 110, 40);
}
.color-light {
  background: rgb(241, 174, 87);
}

input.txt {
  border: 0;
  padding: 1em;
  width: 80%;
  margin-bottom: 2em;
}
input.btn {
  border: 0;
  display:block;
  padding:1em 3em;
  background:rgb(246, 248, 131);
  color:#003A61;
  margin-bottom:1em;
  cursor:pointer;
}
.life-container {
  background: rgb(196, 110, 40);
  padding:.5em;
  font-weight:bold;
  cursor:pointer;
}

```