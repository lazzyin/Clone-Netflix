const API_KEY = "4bc9d0c67767eee1fb426514712a1f5c";

const categories=[
    {
        name:"trending",
        title:"Em Alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true
    },
    {
        name: "netflixOriginais",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
        isLarge: false
    },
    {
        name:"topRated",
        title:"Populares",
        path:`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false
        
    },
    {
        name:"nowPlaying",
        title:"Lançamentos",
        path:`/movie/now_playing?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false
    },
    {
        name:"romances",
        title:"Romances",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=1074`,
        isLarge: false
    },
    {
        name:"documentaries",
        title:"Documentarios",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false
    },
];

export const getMovies = async (path) => {
    
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies:", error);
    }
};

export default categories;