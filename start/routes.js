'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome').as('welcome');
Route.post('/login', 'UserController.login').as('login');
Route.post('/logout', 'UserController.logout').as('logout');
Route.on('/about').render('about').as('about');
Route.on('/contact').render('contact').as('contact');

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/
Route.on('/login').render('log-in').as('loginForm').middleware(['guest']);

Route.on('/recover_password')
  .render('recover-password')
  .as('passwordRecovery')
  .middleware(['guest']);

Route.on('/new_password')
  .render('new-password')
  .as('passwordChange')
  .middleware(['auth']);

Route.on('/new_email')
  .render('new-email')
  .as('emailChange')
  .middleware(['auth']);

Route.on('/schools')
  .render('create-schools-form')
  .as('schoolsManagement')
  .middleware(['auth']);

Route.on('/automatic-school-form')
  .render('school-automatic-form')
  .as('automaticForm')
  .middleware(['auth']);

Route.on('/manual-school-form')
  .render('school-manual-form')
  .as('manualForm')
  .middleware(['auth']);

//POST
Route.post('/generar-clave', 'GroupController.saveManual').as('generateKey');
Route.post('/generar-claves', 'GroupController.saveAutomatic').as(
  'generateKeys'
);

Route.get('/claves/:id', 'GroupController.showKeys').as('accessKeys');

Route.on('/statistics')
  .render('school-info')
  .as('statistics')
  .middleware(['auth']);

Route.on('/statistics-classroom')
  .render('classroom-info')
  .as('classRoomAnswers')
  .middleware(['auth']);

/*
|--------------------------------------------------------------------------
| Teacher
|--------------------------------------------------------------------------
*/
Route.on('/professor').render('professor').as('professor');
Route.on('/professor-list').render('professor-list').as('groupAnswersList');
Route.post('/teacher-access', 'TeacherController.index').as('teacherAccess');

/*
|--------------------------------------------------------------------------
| Student
|--------------------------------------------------------------------------
*/
Route.on('/student').render('student').as('student');
Route.on('/student-error').render('student').as('student');
Route.on('/student-warning').render('student').as('student');
Route.post('/student-access', 'QuestionnaireController.access').as(
  'questionnaireAccess'
);

Route.get(
  '/student-questionnaire/:page',
  'QuestionnaireController.questionnaire'
).as('questions');
Route.post(
  '/student-questionnaire-end',
  'QuestionnaireController.SaveAnswers'
).as('saveAnswers');
Route.on('/contact-end-questionnaire').render('contact').as('contact');
