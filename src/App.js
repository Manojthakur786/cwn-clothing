import './App.css';
import React from 'react';

import Header from './Component/Header/header';
import {Route,Switch,Redirect}from 'react-router-dom';

import Shop from './Page/shop/Shop';
import HomePage from './Page/homepage/homepage';
import SignInAndSignUp from './Page/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import CheckoutPage from './Page/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import {setCurrentUser}from './redux/user/user.action';

class App extends React.Component {
 
  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser}=this.props;
   this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef=await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot=>{
        setCurrentUser({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
      });
     }
     setCurrentUser(userAuth);
   }
      
      );
  }
 
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (

    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path='/shop' component={Shop}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/SignIn' render={()=>
      this.props.currentUser
      ?(<Redirect to='/'/>):
      (<SignInAndSignUp/>)}/>
      </Switch>
    </div>
  );
}
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
