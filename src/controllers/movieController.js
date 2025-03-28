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
    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscarfilmes", error });
        }
    },
    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar filme por id", error });
        }
    },
    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar filme", error });
        }
    },
    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id);
            res.status(200).json({ message: "Filme deletado com sucesso" });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar filme", error });
        }
    },
    getTop10Movies: (req, res) => {
        try {
            const top10 = lista.getTop10Movies();
            res.status(200).json(top10);
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar top 10 filmes", error });
        }
    }
};

module.exports = router;
