<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = Client::all();
        return response($client, 201);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //$client =  Customer::create($this->validateRequest());
        $request->validate([
            'first' => 'required|string',
            'last' => 'required|string',
            'email' => 'required|string',
            'phone' => 'required|string',
            'street' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'zip' => 'required|string',


        ]);

        // $client = new Client();

        // $client->first = $request->first;
        // $client->last = $request->last;
        // $client->email = $request->email;
        // $client->phone = $request->phone;
        // $client->street = $request->street;
        // $client->city = $request->city;
        // $client->state = $request->state;
        // $client->zip = $request->zip;




        // $client->save();

        $user = Auth::user()->clients()->create([

            'first' => $request->first,
            'last' => $request->last,
            'email' => $request->email,
            'phone' => $request->phone,
            'street' => $request->street,
            'city' => $request->city,
            'state' => $request->state,
            'zip' => $request->zip,


        ]);
        return response($user, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {

        // return Client::find($client);
        return response($client, 201);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        $data = $request->validate([
            'first' => 'required|string',
            'last' => 'required|string',
            'email' => 'required|string',
            'phone' => 'required|string',
            'street' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'zip' => 'required|string',


        ]);

        $client->update($data);
        return response($client, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        $client->delete();
        return response('Destroyes', 201);
    }

    private function validateRequest()
    {

        return request()->validate([
            'first' => 'required|string',
            'last' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'street' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'zip' => 'required|string',

        ]);
    }
}
