export class Movie {
    constructor(
        public movieId?: number,
        public title?: string,
        public shortDesc?: string,
        public genreId?: number,
        public movieLength?: number,
        public actors?: string,
        public moviePicture?: string,
        public trailer?: string
    ) {}
}