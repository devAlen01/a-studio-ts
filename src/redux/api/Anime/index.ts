import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getAnimeList: builder.query<AnimeList, number>({
      query: (activePage) => ({
        url: "title/updates",
        params: {
          items_per_page: 20,
          page: activePage,
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
  }),
});

export const { useGetAnimeListQuery, useGetOneAnimeQuery, useGetFeedQuery } =
  api;
