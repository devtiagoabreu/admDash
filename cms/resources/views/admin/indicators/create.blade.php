@extends('adminlte::page')

@section('title', 'Novo Indicador')

@section('content_header')
    <h1>Novo Indicador</h1>
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
            <form action="{{route('indicators.store')}}" method="POST" class="form-horizontal" enctype="multpart/form-data">
                @csrf
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Página</label>
                    <div class="col-sm-10">
                        <select name="page" value="{{old('page')}}" class="form-control @error('page') is-invalid @enderror">
                        @foreach($pages as $page)    
                        <option value="{{$page->id}}">{{$page->title}}</option>    
                        @endforeach   
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Descrição</label>
                    <div class="col-sm-10">
                        <input required type="text" name="description" value="{{old('description')}}" class="form-control @error('description') is-invalid @enderror" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Valor String</label>
                    <div class="col-sm-10">
                        <input required type="text" name="value_string" value="{{old('value_string')}}" class="form-control @error('value_string') is-invalid @enderror" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Valor Numérico</label>
                    <div class="col-sm-10">
                        <input required type="number" step="any" name="value_number" value="{{old('value_number')}}" class="form-control @error('value_number') is-invalid @enderror" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <input type="submit" value="Criar" class="btn btn-success" />
                    </div>
                </div>
        
            </form>
        </div>
    </div>

<!--<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"></script>-->
<script>

tinymce.init({
    selector:'textarea.bodyfield',
    height:300,
    menubar:false,
    plugins:['link', 'table', 'image', 'autoresize', 'lists'],
    toolbar:'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | table | link image | bullist numlist',
    content_css:[
        '{{asset('assets/css/content.css')}}'
    ],
    images_upload_url:'{{route('imageupload')}}',
    images_upload_credentials:true,
    convert_urls:false
});

</script>

@endsection