<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\VarDumper\VarDumper;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $tasks = Task::all();
        return view('tasks.index', compact('tasks'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('tasks.create');
    }

    /**
     * Store a newly created resource in storage.
     */

    public function register(Request $request){

        $validate = $request->validate([
            'name' => 'required|string|min:3',
            'email' => 'email|required|unique:users,email',
            'password' => 'required|min:6|confirmed'
        ]);

        $validate['password'] = Hash::make($request->password);

        

        $user = User::create($validate);
        $token = $user->createToken('token')->plainTextToken;

        return response()->json(['user' => $user, 'token'=> $token], 201);
    }

    public function login(Request $request){

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'min:6|required'
        ]);

        if(Auth::attempt($credentials)){

            $user = Auth::user();

            $token = $user->createToken('token')->plainTextToken;

            return response()->json(['user' => $user, 'token' => $token], 200);
        }else{
                return response()->json(['message' => 'identifiant incorrecte'], 401);

        }
    }


    public function store(Request $request)
    {
        //

        $validate = $request->validate([
            'description' => 'required',
        ]);

        $task = Task::create($validate);
        return response()->json(['task' => $task], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id )
    {
        //
        Task::destroy($id);
        return redirect()->route('tasks.index')->with('success', 'la tache a ete supprimer avec succées');


    }
}
