@extends('adminlte::page')

@section('title', 'Indicators')

@section('content_header')
    <h1>
        Indicadores
        <a href="{{ route('indicators.create') }}" class="btn btn-sm btn-success">Novo Indicador</a>
    </h1>
@endsection

@section('content')

<div class="card">
    <div class="card-body">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Página</th>
                    <th>Descrição</th>
                    <th>Valor String</th>
                    <th>Valor Numérico</th>
                    <th>Data</th>
                    <th>Ativo</th>
                    <th width="200">Ações</th>
                </tr>
            </thead>
            <tbody>
            @foreach($indicators as $indicator)
                <tr>
                    <td>{{$indicator->id}}</td>
                    <td>{{$indicator->page}}</td>
                    <td>{{$indicator->description}}</td>
                    <td>{{$indicator->value_string}}</td>
                    <td>{{$indicator->value_number}}</td>
                    <td>{{$indicator->dateInsert}}</td>
                    <td>{{$indicator->active}}</td>
                    <td>
                        <a href="" target="_blank" class="btn btn-sm btn-success" hidden=true>Ver</a>

                        <a href="{{ route('indicators.edit', ['indicator' => $indicator->id]) }}" class="btn btn-sm btn-info">Editar</a>
                        
                        <form class="d-inline" method="POST" action="{{ route('indicators.destroy', ['indicator' => $indicator->id]) }}" onsubmit="return confirm('Tem certeza que deseja excluir?')">
                            @method('DELETE')
                            @csrf
                            <button class="btn btn-sm btn-danger">Excluir</button>
                        </form>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>

{{ $indicators->links() }}

@endsection