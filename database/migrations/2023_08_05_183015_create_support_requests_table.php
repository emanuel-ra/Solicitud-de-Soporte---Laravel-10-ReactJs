<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('support_requests', function (Blueprint $table) {
            $table->id();
            $table->string('department_name');
            $table->string('branch_name');
            $table->string('requester_name');            
            $table->string('requester_email')->nullable();
            $table->text('request_description');
            $table->text('observations')->nullable();
            $table->dateTime('closed_at', $precision = 0)->nullable();
            $table->unsignedInteger('status_id')->default(1);
            $table->unsignedInteger('user_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_requests');
    }
};
