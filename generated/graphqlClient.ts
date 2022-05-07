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
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  popularMovies?: Maybe<Array<Maybe<Movie>>>;
};


export type QueryPopularMoviesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type PopularMoviesQueryQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type PopularMoviesQueryQuery = { __typename?: 'Query', popularMovies?: Array<{ __typename?: 'Movie', title?: string | null } | null> | null };


export const PopularMoviesQueryDocument = gql`
    query PopularMoviesQuery($page: Int) {
  popularMovies(page: $page) {
    title
  }
}
    `;

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