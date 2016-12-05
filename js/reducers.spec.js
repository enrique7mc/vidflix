import reducers from './reducers'

test('@@INIT', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({searchTerm: '', omdbData: {}})
})

test('reducers', () => {
  let state
  state = reducers({searchTerm: '', omdbData: {}}, {type: 'SET_SEARCH_TERM', searchTerm: 'house'})
  expect(state).toEqual({searchTerm: 'house', omdbData: {}})
})
