<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SupportRequest;

class SupportRequestController extends Controller
{
    public function store(Request $request){
        
        $validated = $request->validate([
            'department_name' => 'required|max:255',
            'branch_name' => 'required|max:255',
            'requester_name' => 'required|max:255',
            'requester_email' => 'nullable|max:255',
            'request_description' => 'required',
        ]);        

        $new = new SupportRequest;

        $new->department_name = $request->department_name;
        $new->branch_name = $request->branch_name;
        $new->requester_name = $request->requester_name;
        $new->requester_email = $request->requester_email;
        $new->request_description = $request->request_description;
        $new->status_id = 1;
        $new->user_id = 0;
        $new->save();

        return Response()->json($new,201);
    }
}
