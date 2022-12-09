@extends('adminlte::page')

@section('title', 'Editar Indicador')

@section('content_header')
    <h1>Editar Indicador</h1>
@endsection

@section('content')

    @if($errors->any())
        <div class="alert alert-danger">
            <ul>
                <h5><i class="icon fas fa-ban"></i>Ocorreu um erro.</h5>

                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="card">
        <div class="card-body">
            <form action="{{route('indicators.update', ['indicator'=>$indicator->id])}}" method="POST" class="form-horizontal">
                @method('PUT')
                @csrf
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Página</label>
                    <div class="col-sm-10">
                        <select name="page" class="form-control @error('page') is-invalid @enderror">
                        @foreach($pages as $page)
                            <option value="{{$page->id}}" selected="{{$indicator->page}}">{{$page->title}}</option>
                        @endforeach
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Descrição</label>
                    <div class="col-sm-10">
                        <input required type="text" name="description" value="{{$indicator->description}}" class="form-control @error('description') is-invalid @enderror" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Valor String</label>
                    <div class="col-sm-10">
                        <input required type="text" name="value_string" value="{{$indicator->value_string}}" class="form-control @error('value_string') is-invalid @enderror" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Valor Numérico</label>
                    <div class="col-sm-10">
                        <input required type="number" step="any" name="value_number" value="{{$indicator->value_number}}" class="form-control @error('value_number') is-invalid @enderror" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <input type="submit" value="Salvar" class="btn btn-success" />
                    </div>
                </div>
        
            </form>
        </div>
    </div>
@endsection