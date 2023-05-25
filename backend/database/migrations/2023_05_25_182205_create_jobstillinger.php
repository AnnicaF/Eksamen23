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
        Schema::create('jobstillinger', function (Blueprint $table) {
            $table->id();
            $table->string     ('overskrift'); $table->string('om_dig');
            $table->string     ('beskrivelse');
            $table->foreignId  ('type_id')->constrained(('typer'));
            $table->foreignId  ('region_id')->constrained(('regioner'));
            $table->foreignId  ('by_id')->constrained(('by'));
            $table->date       ('dato');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobstillinger');
    }
};
