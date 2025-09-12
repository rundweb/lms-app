<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GuruDashboardController extends Controller
{
    //
        public function __invoke()
    {
        return inertia('Guru/Dashboard', [
            'title' => 'dashboard Guru'
        ]);
    }
}
