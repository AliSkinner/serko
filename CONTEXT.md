# Context

In the alotted time, I focussed on getting the new media types fetched and rendered.

I tidied up some of the rendering logic, and seperated some of the data formatting, into a more easily testable module.

There were some quick performance wins available, by avoiding multiple passes through nested loops, when assigning genres to media.

I would like to have added more tests and to have better error handling.


### Todo
- [x] Add Prettier and configure ESLint, to make development easier.
- [x] Refactor `SearchResultItem`, to be reusable for movies, tv shows & people.
- [x] Refactor fetching genres, to handle tv and movies in one function.
- [x] Fetch search results and genres in parallel.
- [x] Remove duplicate requests, that are scattered amongst rendering logic (I know that the responses are cached, but the repeated invocations are a bit messy).
- [x] Decouple rendering and data formatting logic.
- [x] Optimise mapping of genre names to search results.
- [x] Unit test for data formatting.
- [x] Fix skipped test in `__tests__/Search.test.tsx`.


- [ ] Add elegant error handling.
- [ ] Add tests for rendering of each result type.
- [ ] Add validation to search params, so that the search page cannot be loaded without params.

