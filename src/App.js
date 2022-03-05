import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homePage";
import ModalPage from "./pages/ModalPage";
import NotFound from "./Components/ui/NotFound.jsx";
import Pharmacy from "./Components/Pharmacy/Pharmacy";
import ContactUS from "./Components/Contact/Contactus/Contactus";
import Signup from "./Components/Contact/Signup/signup";
import Signin from "./Components/Contact/Signin/signin";
import BookVisitPage from "./pages/BookVisitPage";
import CovidPage from "./Components/CovidComponent/CovidPage";
import DoctorCallPage from "./Components/DoctorCall/DoctorCallPage";
import MergeDoctor from "./Components/Doctor/MergeDoctor";
import { Provider } from "react-redux";
import store from '../src/ReactRedux/Store/myStore';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ar', 'en'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'querystring', 'cookie', 'path', 'subdomain'],
      caches: ['cookie'],
      backend: {
        loadPath: '../public/assets/locales/{{lng}}/translation.json',
      },
      react: {
      }
    }
  });

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage} />
        <Route path="/visiting" component={ModalPage} />
        <Route path="/pharmacy" component={Pharmacy} />
        <Route path="/Contactus" component={ContactUS} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
        <Route path="/bookvisit" component={BookVisitPage} />
        <Route path="/covid" component={CovidPage} />
        <Route path="/DoctorCall" component={DoctorCallPage} />
        <Route path="/MergeDoctor/:name" component={MergeDoctor} />
        <Route path="**" component={NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
