const Movie = require('../models/Movie');
const MovieList = require('../models/MovieList');

const lista = new MovieList();

const movie1 = new Movie('Mufasa: O Rei Leão', 128, 'Barry Jenkins');
lista.addMovie(movie1);

lista.addMovie(new Movie('Divertida Mente 2', 135, 'Pete Docter'));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, duration, director, plays } = req.body;
            if (!title || !duration || !director) {
                throw new Error('Campos obrigatórios');
            }
            const movie = new Movie(title, duration, director, plays);
            lista.addMovie(movie);
            res.status(200).json({ message: "Filme adicionado com sucesso" });
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar filme", error });
        }
    },
        }
        }
}
