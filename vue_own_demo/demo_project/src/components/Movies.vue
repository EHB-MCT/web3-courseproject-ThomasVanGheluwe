<template>
  <div class="container">
    <div class="has-text-centered">
      <p>{{ fetchMessage }}</p>
      <img :src="loadIcon" alt="" style="width: 10%" />
    </div>
    <div class="movies">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <label for="" class="label">Title</label>
        <h3 class="subtitle">{{ movie.name }}</h3>
        <img :src="movie.image" alt="" style="width: 90%" />
        <label for="showMore" class="infoLabel">Show more info</label>
        <input
          type="checkbox"
          @click="movie.showInfo = !movie.showInfo"
          name="showMore"
          id="showMore"
        />
        <div v-show="movie.showInfo">
          <label for="" class="label">Description</label>
          <p>{{ movie.description }}</p>
          <label for="" class="label">Release year</label>
          <p>{{ movie.release }}</p>
          <label for="" class="label">Imdb rating</label>
          <p>{{ movie.rating }} / 10</p>
          <hr />
        </div>
        <label for="" class="label">Own rating</label>
        <select
          v-model="movie.ownRating"
          @click="selectedMovie = movie"
          :style="{ backgroundColor: movie.rateColor }"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>{{ movie.ownRatingMessage }}</p>
        <p>{{ movie.imdbRatingMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const movies = [
  {
    id: 1,
    name: "Se7en",
    image: "https://media.s-bol.com/L962xKDE7GEr/550x782.jpg",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    release: 1996,
    rating: Math.round(8.6),
    ownRating: undefined,
    ownRatingMessage: "",
    imdbRatingMessage: "",
    showInfo: false,
    rateColor: "",
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    image: "https://media.s-bol.com/xvx1OpjgvVjE/844x1200.jpg",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    release: 1994,
    rating: Math.round(9.3),
    ownRating: undefined,
    ownRatingMessage: "",
    imdbRatingMessage: "",
    showInfo: false,
    rateColor: "",
  },
  {
    id: 3,
    name: "The Godfather",
    image: "https://media.s-bol.com/xkqpRqQ88mLl/550x788.jpg",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    release: 1972,
    rating: Math.round(9.2),
    ownRating: undefined,
    ownRatingMessage: "",
    imdbRatingMessage: "",
    showInfo: false,
    rateColor: "",
  },
  {
    id: 3,
    name: "The Godfather",
    image: "https://media.s-bol.com/xkqpRqQ88mLl/550x788.jpg",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    release: 1972,
    rating: Math.round(9.2),
    ownRating: undefined,
    ownRatingMessage: "",
    imdbRatingMessage: "",
    showInfo: false,
    rateColor: "",
  },
];

export default {
  name: "Movies",
  data() {
    return {
      movies: [],
      fetchMessage: "",
      loadIcon:
        "https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg",
      selectedMovie: undefined,
    };
  },
  watch: {
    "selectedMovie.ownRating": {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(`Watcher evaluated: old, ${oldValue} new, ${newValue}`);
        this.compareRating(newValue);
      },
    },
  },
  methods: {
    selectMovie(movie) {
      this.selectedMovie = movie;
    },
    async getMovies() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(movies), 1500);
      });
    },
    async loadMovies() {
      this.movies = [];
      this.fetchMessage = "loading movies";
      this.movies = await this.getMovies();
      this.fetchMessage = "";
      this.loadIcon = "";
    },
    compareRating(rating) {
      const value = parseInt(rating);
      if (value <= 2) {
        this.selectedMovie.ownRatingMessage =
          "You think this is the worst movie ever";
        this.selectedMovie.rateColor = "red";
      } else if (value <= 4) {
        this.selectedMovie.ownRatingMessage = "You think this was a bad movie";
        this.selectedMovie.rateColor = "red";
      } else if (value <= 6) {
        this.selectedMovie.ownRatingMessage =
          "You think this movie was average";
        this.selectedMovie.rateColor = "orange";
      } else if (value <= 8) {
        this.selectedMovie.ownRatingMessage = "You think this movie was good";
        this.selectedMovie.rateColor = "green";
      } else if (value <= 10) {
        this.selectedMovie.ownRatingMessage =
          "You think this movie was one of the best ever made";
        this.selectedMovie.rateColor = "green";
      }
      if (rating != undefined) {
        this.compareRatingImdb(value);
      }
    },
    compareRatingImdb(rating) {
      const value = parseInt(rating);
      if (value > this.selectedMovie.rating) {
        this.selectedMovie.imdbRatingMessage =
          "Imdb raters think this movie is worse then you";
      } else if (value < this.selectedMovie.rating) {
        this.selectedMovie.imdbRatingMessage =
          "Imdb raters think this movie is better then you";
      } else if (value == this.selectedMovie.rating) {
        this.selectedMovie.imdbRatingMessage =
          "Imdb raters have the same taste as you";
      }
    },
  },
  created() {
    this.loadMovies();
  },
};
</script>
