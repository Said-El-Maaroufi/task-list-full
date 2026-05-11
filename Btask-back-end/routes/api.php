<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/store', [TaskController::class, 'store']);
Route::post('/register', [TaskController::class, 'register']);
Route::post('/login', [TaskController::class, 'login']);

// Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
// Route::get('/tasks/create', [TaskController::class, 'create'])->name('tasks.create');
// Route::Post('/tasks/store', [TaskController::class, 'store'])->name('tasks.store');
// Route::Post('/tasks/delete', [TaskController::class, 'destroy'])->name('tasks.delete');
