export interface MovieInfo {
    id: string;
    original_language: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: string;
    vote_count: string;
    genres: [
        {
            id: string,
            name: string,
        }
    ];

}