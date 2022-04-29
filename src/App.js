
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFount from './components/NotFound/NotFount';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';
import Restaurant from './components/Restaurant/Restaurant';
import Friend from './Friend/Friend';
// import MyLineChart from './components/MyLineChart';

function App() {
 
  return (
    <div className="App">
   {/* <MyLineChart></MyLineChart> */}
  <Header></Header>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/friend' element={<Friend></Friend>}></Route>
    <Route path='/friend/:bondhu' element={<FriendDetail></FriendDetail>}></Route>
    <Route path='/posts'element={<Posts></Posts>}>
   <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
    </Route>
    <Route path='/foods' element={<Restaurant></Restaurant>}></Route>
    <Route path='*' element={<NotFount></NotFount>}></Route>
   </Routes>
    </div>
  );
}

export default App;