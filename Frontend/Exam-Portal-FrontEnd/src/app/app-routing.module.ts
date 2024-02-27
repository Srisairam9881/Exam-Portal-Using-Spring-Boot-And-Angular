import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { PrequizComponent } from './pages/user/prequiz/prequiz.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './Services/admin.guard';
import { UserGuard } from './Services/user.guard';

const routes: Routes = [
{path:'signup',component:SignupComponent,pathMatch:'full'},
{path:'login',component:LoginComponent,pathMatch:"full"},
{path:'',component:HomeComponent,pathMatch:'full'},

//admin routerLinks
{path:'admin-dashboard',component:DashboardComponent,canActivate:[AdminGuard],
children:[
{path:'profile',component:ProfileComponent},
{path:'categories',component:ViewCategoriesComponent},
{path:'add-category',component:AddCategoryComponent},
{path:'quizzes',component:ViewQuizzesComponent},
{path:'add-quiz',component:AddQuizComponent},
{path:'quiz/:qid',component:UpdateQuizComponent},
{path:'view-questions/:qid/:title',component:ViewQuizQuestionsComponent},
{path:'add-question/:qid/:title',component:AddQuestionsComponent},
{path:'',component:WelcomeComponent},
],},

//user routerLinks
{path:'user-dashboard',component:UserDashboardComponent,canActivate:[UserGuard],
children:[
{path:'user-profile',component:ProfileComponent},
{path:':catId',component:LoadQuizComponent},
{path:'instructions/:qid',component:PrequizComponent},
],},

{path:'start-quiz/:qid',component:StartQuizComponent,canActivate:[UserGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
