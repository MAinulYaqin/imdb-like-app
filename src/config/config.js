let env = process.env;

module.exports = {
    API_SEED: 'https://api.themoviedb.org/3/discover/movie?api_key=ed4c8f0aa9a3479a1c12c6805141e43c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    API_KEY: env.API_KEY || 'ed4c8f0aa9a3479a1c12c6805141e43c'
}