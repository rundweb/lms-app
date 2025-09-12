<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Guru\GuruDashboardController;
use App\Http\Controllers\Siswa\SiswaDashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::redirect('/', '/login');

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'loginUser']);
Route::post('/logout',[AuthController::class,'destroy'])->middleware('auth');
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::middleware(['auth','role:admin'])->group(function(){
    Route::get('/admin',AdminDashboardController::class);
    Route::resource('/admin/user',UserController::class);
});

Route::middleware(['auth','role:guru'])->group(function(){
    Route::get('/guru',GuruDashboardController::class);
});

Route::middleware(['auth','role:siswa'])->group(function(){
    Route::get('/siswa',SiswaDashboardController::class);
});
