<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <form action="{{ route('tasks.store') }}" method="post">
        @csrf
            <input type="text" name="description" >
            @error('description')
                <p>{{ $message }}</p>
            @enderror
            <button>Ajouter</button>
        </form>
        
    </div>
</body>
</html>