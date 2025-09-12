<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SiswaDashboardController extends Controller
{
    //
        public function __invoke()
    {
        return inertia('Siswa/Dashboard', [
            'title' => 'dashboard Siswa'
        ]);
    }
}
