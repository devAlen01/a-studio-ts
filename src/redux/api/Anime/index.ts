import { api } from "..";

const apiAnime = api.injectEndpoints({
  endpoints: (builder) => ({
    getAnimeList: builder.query<AnimeList, number>({
      query: (itemPage) => ({
        url: "title/changes",
        params: {
          items_per_page: itemPage,
        },
        method: "GET",
      }),
      providesTags: ["anime"],
    }),
    getOneAnime: builder.query<AnimeData, string>({
      query: (code) => ({
        url: `title?code=${code}`,
        method: "GET",
      }),
      providesTags: ["anime"],
    }),
    getFeed: builder.query<AnimeFeedData, void>({
      query: () => ({
        url: `feed`,
        params: {
          limit: 25,
        },
        method: "GET",
      }),
      providesTags: ["anime"],
    }),
    searchAnime: builder.query<AnimeList, string>({
      query: (value) => ({
        url: `title/search?search=${value}`,
        params: {
          limit: 15,
        },
        method: "GET",
      }),
    }),
  }),
});

export default apiAnime;
