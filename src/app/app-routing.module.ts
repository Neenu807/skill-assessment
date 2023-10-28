import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ResultComponent } from './result/result.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path:"intro", component:IntroComponent},
  {path:"result", component:ResultComponent},
  {path:"question", component:QuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
