import { Component } from '@angular/core';
import { initializeApp,FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
/*const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/
}
