/* global test expect */
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

// test('reducers', () => {
//   let state;
//   state = reducers({searchTerm:'house',omdbData:{}}, {type:'ADD_OMDB_DATA',imdbID:'tt1856010',omdbData:{Title:'House of Cards',Year:'2013–',Rated:'TV-MA',Released:'01 Feb 2013',Runtime:'51 min',Genre:'Drama',Director:'N/A',Writer:'Beau Willimon',Actors:'Kevin Spacey, Robin Wright, Michael Kelly, Nathan Darrow',Plot:'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',Language:'English',Country:'USA',Awards:'Won 2 Golden Globes. Another 25 wins & 162 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'9.0',imdbVotes:'326,913',imdbID:'tt1856010',Type:'series',totalSeasons:'5',Response:'True'}});
//   expect(state).toEqual({searchTerm:'house',omdbData:{tt1856010:{Title:'House of Cards',Year:'2013–',Rated:'TV-MA',Released:'01 Feb 2013',Runtime:'51 min',Genre:'Drama',Director:'N/A',Writer:'Beau Willimon',Actors:'Kevin Spacey, Robin Wright, Michael Kelly, Nathan Darrow',Plot:'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',Language:'English',Country:'USA',Awards:'Won 2 Golden Globes. Another 25 wins & 162 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'9.0',imdbVotes:'326,913',imdbID:'tt1856010',Type:'series',totalSeasons:'5',Response:'True'}}});
// });
