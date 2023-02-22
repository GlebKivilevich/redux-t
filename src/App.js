import './App.css';
import Likes from './components/Likes';
import Title from './components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike } from './components/likesSplit';
import Comments from './components/Comments';
import Spin from './components/Spin';

function App() {
  // const error = useSelector((state) => state.appReducer.error);
  // console.log('ERROR >>', error);
  // const photoLikes = useSelector((state) => {
  //   const { likesReducer } = state;
  //   return likesReducer;
  // });

  const likes = useSelector(state => state.likes);

  const dispatch = useDispatch();

  function getLikesThisPost() {
    dispatch(incrementLike(likes));
  }

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {/* {error && <div className='error-message'>{error}</div>} */}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" onDoubleClick={getLikesThisPost} />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
