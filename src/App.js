import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homePage";
import ModalPage from "./pages/ModalPage";
import NotFound from "./Components/ui/NotFound.jsx";
import Pharmacy from "./Components/Pharmacy/Pharmacy";
import Cart from "./Components/Pharmacy/Cart/Cart"
import SingleItem from "./Components/Pharmacy/Cart/SingleItem"
import ContactUS from "./Components/Contact/Contactus/Contactus";
import Signup from "./Components/Contact/Signup/signup";
import Signin from "./Components/Contact/Signin/signin";
import BookVisitPage from "./pages/BookVisitPage";
import CovidPage from "./Components/CovidComponent/CovidPage";
import DoctorCallPage from "./Components/DoctorCall/DoctorCallPage";
import MergeDoctor from "./Components/Doctor/MergeDoctor";
import { Provider } from "react-redux";
import store from '../src/ReactRedux/Store/myStore';
import storePharmacy from './Components/Pharmacy/Redux/store'
import { LangProvider } from "./Context/LangContext";
import Success from "./Components/Success/Success";
import "./App.css";

function App() {
  const myLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  const [lang, setLang] = useState(myLang);

  //change lang handler 
  document.getElementsByTagName('html')[0].setAttribute('lang', lang);
  localStorage.setItem('lang', lang);
  return (
    <Provider store={store}>
      <LangProvider value={{ lang, setLang }}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomePage} />
          <Route path="/visiting" component={ModalPage} />
          <Provider store={storePharmacy}>
            <Route path="/pharmacy" component={Pharmacy} />
            <Route path="/cart" component={Cart} />
            <Route path="/item/:id" component={SingleItem} />
          </Provider>
          <Route path="/Contactus" component={ContactUS} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Signin" component={Signin} />
          <Route path="/bookvisit" component={BookVisitPage} />
          <Route path="/covid" component={CovidPage} />
          <Route path="/DoctorCall" component={DoctorCallPage} />
          <Route path="/MergeDoctor/:name" component={MergeDoctor} />
          <Route path="/done" component={Success} />
          <Route path="**" component={NotFound} />
        </Switch>
      </LangProvider>
    </Provider>
  );
}

export default App;
