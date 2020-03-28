'use strict'

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
const Route = use('Route')

Route.on('/').render('welcome')
Route.on('/about').render('about')
Route.on('/contact').render('contact')

/* 
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/
Route.on('/login').render('log-in')
Route.on('/recover_password').render('recover-password')
Route.on('/new_password').render('new-password')
Route.on('/new_email').render('new-email')

Route.on('/schools').render('create-schools-form')
Route.on('/automatic-school-form').render('school-automatic-form')
Route.on('/manual-school-form').render('school-manual-form')

Route.on('/statistics').render('school-info')
Route.on('/statistics-classroom').render('classroom-info')

/* 
|--------------------------------------------------------------------------
| Teacher
|--------------------------------------------------------------------------
*/
Route.on('/professor').render('professor')
Route.on('/professor-list').render('professor-list')

/* 
|--------------------------------------------------------------------------
| Student
|--------------------------------------------------------------------------
*/
Route.on('/student').render('student')
Route.on('/student-questionnarie').render('questionnaire')
Route.on('/student-questionnarie-end').render('end-questionnaire')
