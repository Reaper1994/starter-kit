<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class UserController extends Controller
{
    //

    public function index(): Response {

       return Inertia::render('payments', [
            'payments' => User::all()
        ]);
    }
}
