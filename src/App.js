import React from 'react';
import './App.css';
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';

const loginUrl = 'http://localhost:9000/api/login'
const friendsUrl = 'http://localhost:9000/api/friends'

function App() {

  const navigate = useNavigate()

  const login = ({ username, password }) => {
    axios.post(loginUrl, { username, password })
      .then(res => {
        const token = res.data.token
        window.localStorage.setItem('token', token)
        navigate('/friends')
      })
      .catch( err => {
        console.error(err)
      })
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    navigate('/')
  }

  const getFriends = () => {
    axiosWithAuth().get(friendsUrl)
      .then(res => {
        console.log(res, "friends")
      })
      .catch(err => {
        console.error(err)
      })
  }

  const postFriend = friend => {
    axiosWithAuth().post(friendsUrl, friend)
      .then(res => {
        console.log(res, "post")
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="App">
      <NavLink to="/friends">Friends</NavLink>
      <NavLink to="/friends/add">Add Friend</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <h2>Client Auth Project</h2>
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/logout" element={<Logout logout={logout} /> } />
        <Route path="/friends" element={<FriendsList getFriends={getFriends} />} />
        <Route path="/friends/add" element={<AddFriend onSubmit={postFriend} />} />
      </Routes>
    </div>
  );
}

export default App;
