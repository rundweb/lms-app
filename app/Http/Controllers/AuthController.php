<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function showLogin()
    {
        return inertia('Auth/Login');
    }

    public function loginUser(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $user = Auth::user();

            $routes = [
                'admin' => '/admin',
                'guru' => '/guru',
                'siswa' => '/siswa'
            ];

            if (isset($routes[$user->role])) {
                return redirect($routes[$user->role])->with('success', 'Login successful. Welcome back, ' . $user->name);
            }
        }

        return back()->withErrors(['email' => 'The email or password you entered is incorrect.']);
    }

    public function showRegister()
    {
        return inertia('Auth/Register');
    }

    public function register(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required'
        ]);

        $validate['password'] = Hash::make($validate['password']);

        User::create($validate);

        return redirect('/login')->with('success', 'Account created successfully. You can now log in.');
    }

    public function destroy()
    {
        Auth::logout();

        return redirect('/login')->with('success', 'Logout successful. See you next time!');
    }
}
