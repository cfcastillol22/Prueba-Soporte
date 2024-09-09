<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|max:500',
            'user_id' => 'required|integer|exists:user,id'
        ]);

        try {
            $task = new Task($validated);
            $task->save();

            $task->load('user');

            return response()->json([
                'message' => 'Task created successfully',
                'data' => $task
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error to create task',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            $validated = $request->validate([
                'completed' => 'required|boolean'
            ]);

            $task = Task::find($id);

            if (!$task) {
                return response()->json([
                    'message' => 'Task not found'
                ], 404);
            }

            $task->completed = $validated['completed'];
            $task->save();

            $task->load('user');

            return response()->json([
                'message' => 'Task updated successfully',
                'data' => $task
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error to update task',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function destroy($id)
    {
        try {

            $task = Task::find($id);
            if (!$task) {

                return response()->json([
                    'message' => 'Task not found'
                ], 404);
            }
            $task->delete();
            return response()->json([
                'message' => 'Task deleted successfully'
            ], 200);
        } catch (\Exception $e) {

            return response()->json([
                'message' => 'Error to delete task',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index()
    {
        $tasks = Task::with('user')->get();
        return response()->json($tasks);
    }
}
