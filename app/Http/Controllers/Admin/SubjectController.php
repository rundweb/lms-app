<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return inertia('Admin/Subject/Index', [
            'title' => 'Subject',
            'subject' => Subject::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia('Admin/Subject/Create', [
            'title' => 'Add Subject'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validate = $request->validate([
            'name' => 'required|unique:subjects',
            'description' => 'required|string'
        ]);

        Subject::create($validate);

        return redirect('/admin/subject')->with('success', 'Data has been successfully added.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        //
        return inertia('Admin/Subject/Edit', [
            'title' => 'Edit Data',
            'subject' => $subject
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subject $subject)
    {
        //

        $validate = $request->validate([
            'name'=>'required|unique:subjects,name,'.$subject->id,
            'description'=>'required|string'
        ]);

        $subject->update($validate);

        return redirect('/admin/subject')->with('success','Data updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        //
        $subject->delete();

        return redirect('/admin/subject')->with('success', 'Data has been successfully deleted.');
    }
}
