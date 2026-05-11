<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    @if($tasks == null)
        @foreach($tasks as $task)
    <div >
        <p>{{ $task->description }}</p>
        <span>{{ $task->statut }}</span>
        <form action="{{ route('tasks.delete', [$task->id]) }}" method="post">
            @method('DELETE')
            <button>supprimer</button>
        </form>
        <button>modifier</button>
    </div>
    @endforeach
    @else
        <p>il n y'a aucun tache</p>
    @endif

    <a href="{{ route('tasks.create') }}">Ajouter une tache</a>
    
    
</body>
</html>