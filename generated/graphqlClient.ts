import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Movie = {
  __typename?: 'Movie';
  id?: Maybe<Scalars['ID']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  movie?: Maybe<Movie>;
  popularMovies: Array<Movie>;
  search: Array<Movie>;
};


export type QueryMovieArgs = {
  id: Scalars['Int'];
};


export type QueryPopularMoviesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchArgs = {
  query: Scalars['String'];
};

export type MovieQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MovieQueryQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id?: string | null, title?: string | null, overview?: string | null, poster_path?: string | null, release_date?: string | null, vote_average?: string | null } | null };

export type PopularMoviesQueryQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type PopularMoviesQueryQuery = { __typename?: 'Query', popularMovies: Array<{ __typename?: 'Movie', id?: string | null, title?: string | null, overview?: string | null, poster_path?: string | null, release_date?: string | null, vote_average?: string | null }> };

export type CoreMovieFragment = { __typename?: 'Movie', id?: string | null, title?: string | null, overview?: string | null, poster_path?: string | null, release_date?: string | null, vote_average?: string | null };

export type SearchQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Movie', id?: string | null, title?: string | null, overview?: string | null, poster_path?: string | null, release_date?: string | null, vote_average?: string | null }> };

export const CoreMovieFragmentDoc = gql`
    fragment CoreMovie on Movie {
  id
  title
  overview
  poster_path
  release_date
  vote_average
}
    `;
export const MovieQueryDocument = gql`
    query MovieQuery($id: Int!) {
  movie(id: $id) {
    id
    title
    overview
    poster_path
    release_date
    vote_average
  }
}
    `;

/**
 * __useMovieQueryQuery__
 *
 * To run a query within a React component, call `useMovieQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieQueryQuery(baseOptions: Apollo.QueryHookOptions<MovieQueryQuery, MovieQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieQueryQuery, MovieQueryQueryVariables>(MovieQueryDocument, options);
      }
export function useMovieQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQueryQuery, MovieQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieQueryQuery, MovieQueryQueryVariables>(MovieQueryDocument, options);
        }
export type MovieQueryQueryHookResult = ReturnType<typeof useMovieQueryQuery>;
export type MovieQueryLazyQueryHookResult = ReturnType<typeof useMovieQueryLazyQuery>;
export type MovieQueryQueryResult = Apollo.QueryResult<MovieQueryQuery, MovieQueryQueryVariables>;
export const PopularMoviesQueryDocument = gql`
    query PopularMoviesQuery($page: Int) {
  popularMovies(page: $page) {
    ...CoreMovie
  }
}
    ${CoreMovieFragmentDoc}`;

/**
 * __usePopularMoviesQueryQuery__
 *
 * To run a query within a React component, call `usePopularMoviesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularMoviesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularMoviesQueryQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePopularMoviesQueryQuery(baseOptions?: Apollo.QueryHookOptions<PopularMoviesQueryQuery, PopularMoviesQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularMoviesQueryQuery, PopularMoviesQueryQueryVariables>(PopularMoviesQueryDocument, options);
      }
export function usePopularMoviesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularMoviesQueryQuery, PopularMoviesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularMoviesQueryQuery, PopularMoviesQueryQueryVariables>(PopularMoviesQueryDocument, options);
        }
export type PopularMoviesQueryQueryHookResult = ReturnType<typeof usePopularMoviesQueryQuery>;
export type PopularMoviesQueryLazyQueryHookResult = ReturnType<typeof usePopularMoviesQueryLazyQuery>;
export type PopularMoviesQueryQueryResult = Apollo.QueryResult<PopularMoviesQueryQuery, PopularMoviesQueryQueryVariables>;
export const SearchDocument = gql`
    query Search($query: String!) {
  search(query: $query) {
    ...CoreMovie
  }
}
    ${CoreMovieFragmentDoc}`;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;