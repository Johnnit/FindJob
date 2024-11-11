import './style.css';
import {account} from './appwrite';

asyn function handleLogin(){
  account.createOAuth2Session{
    'google',
    'http://localhost:8158/index.html',
     'http://localhost:8158/signup.html'
  }
}

async function getUser(){
  try{
    const user = await account.get();
    renderProfileScreen(user);
  }catch(err){
    renderLoginScreen();
  }
}

function renderLoginScreen(){
  
}
async function renderProfileScreen(user){
  document.getElementById("name").textContent = user.name;
  
}