<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'first', 'last',
        'phone', 'email', 'street', 'city',
        'state', 'zip'

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
