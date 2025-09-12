<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    //
    public function __invoke()
    {
        return inertia('Admin/Dashboard', [
            'title' => 'Dashboard Admin'
        ]);
    }
}
