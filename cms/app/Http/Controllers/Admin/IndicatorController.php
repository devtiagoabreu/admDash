<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Indicator;
use App\User;
use App\Page;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class IndicatorController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $loggedId = intval( Auth::id() );

        //var_dump($loggedId);

        $indicators = Indicator::where('user', $loggedId)
            ->orderBy('page', 'ASC',)
            ->orderBy('id', 'DESC',)->paginate(10);

        return view('admin.indicators.index', [
            'indicators' => $indicators
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $loggedId = intval( Auth::id() );

        $pages = Page::where('user', $loggedId)->paginate(100);;

        return view('admin.indicators.create', [
            'pages' => $pages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $loggedId = intval( Auth::id() );

        $data = $request->only([
            'page',
            'description',
            'value_string',
            'value_number'
        ]);
        
        $data['user'] = $loggedId;

        $validator = Validator::make($data, [
            'page' => ['required','int'],
            'description' => ['required', 'string'],
            'value_string' => ['string'],
            'value_number' => ['numeric']            
        ]);

        if($validator->fails()) {
            return redirect()->route('indicators.create')
            ->withErrors($validator)
            ->withInput();
        }

        $indicator = new Indicator;
        $indicator->description = $data['description'];
        $indicator->value_string = $data['value_string'];
        $indicator->value_number = $data['value_number'];
        $indicator->user = $data['user'];
        $indicator->page = $data['page'];
        $indicator->save();

        return redirect()->route('indicators.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $indicator = Indicator::find($id);

        $loggedId = intval( Auth::id() );

        $pages = Page::where('user', $loggedId)->paginate(100);;

        //if($indicator) {
        //    return view('admin.indicators.edit', [
        //        'indicator' => $indicator,
        //        'pages' => $pages
        //    ]);
        //}

        //return redirect()->route('indicators.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $indicator = Indicator::find($id);

        if($indicator) {
            $data = $request->only([
                'page',
                'description',
                'value_string',
                'value_number'
            ]);
                        
            $validator = Validator::make($data, [
                'page' => ['required','int'],
                'description' => ['required', 'string'],
                'value_string' => ['string'],
                'value_number' => ['numeric']   
            ]);
    
            if($validator->fails()) {
                return redirect()->route('indicators.create')
                ->withErrors($validator)
                ->withInput();
            }

            $indicator = new Indicator;
            $indicator->description = $data['description'];
            $indicator->value_string = $data['value_string'];
            $indicator->value_number = $data['value_number'];
            $indicator->page = $data['page'];
            $indicator->save();
        }

        return redirect()->route('indicators.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
