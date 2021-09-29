<template>
  <div class="container">
    <div class="has-text-centered">
      <p class="fetchMessage">{{ fetchMessage }}</p>
      <img :src="loadIcon" alt="" style="width: 10%" />
    </div>
    <div class="movies">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <label for="" class="label">Title</label>
        <h3 class="subtitle">{{ movie.title }}</h3>
        <img :src="movie.image" alt="" style="width: 90%" />
        <label for="showMore" class="infoLabel">Show more info</label>
        <input
          type="checkbox"
          @click="movie.showInfo = !movie.showInfo"
          name="showMore"
          id="showMore"
        />
        <div v-show="movie.showInfo">
          <label for="" class="label">Release year</label>
          <p>{{ movie.year }}</p>
          <label for="" class="label">IMDb rating</label>
          <p>{{ Math.round(movie.imDbRating) }} / 10</p>
          <label for="" class="label">IMDb raters</label>
          <p>{{ movie.imDbRatingCount }}</p>
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
import { data } from "../shared/data";

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

    async loadMovies() {
      this.fetchMessage = "loading movies";
      this.movies = await data.getMovies();
      console.log("movies on frontend", this.movies);
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
      if (value > Math.round(this.selectedMovie.imDbRating)) {
        this.selectedMovie.imdbRatingMessage =
          "IMDb raters think this movie is less good than you";
      } else if (value < Math.round(this.selectedMovie.imDbRating)) {
        this.selectedMovie.imdbRatingMessage =
          "IMDb raters think this movie is better than you";
      } else if (value == Math.round(this.selectedMovie.imDbRating)) {
        this.selectedMovie.imdbRatingMessage =
          "IMDb raters have the same taste as you";
      }
    },
  },
  created() {
    this.loadMovies();
  },
};
</script>
