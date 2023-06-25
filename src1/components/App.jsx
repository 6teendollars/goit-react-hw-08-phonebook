import css from './App.module.css';
import { PhonebookForm } from './Form/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
// import Auth from './auth/Auth';
import Home from 'page/Home';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import Register from 'page/Register';
import Login from 'page/Login';
// import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks';
// import { useEffect } from 'react';

export const App = () => {
// const dispatch = useDispatch()
// const { isRefreshing } = useAuth()

// useEffect(() => {
//   dispatch(refreshUser())
// }, [dispatch])
  return (
    <div>
      <Routes>
        <Route path='/auth' element={<Layout/>}/>
        <Route index element={<Home/>}/>
<Route path='/register' element={<RestrictedRoute redirectTo='/tasks' component={<Register/>} />}/>
<Route path='/login' element={<RestrictedRoute redirectTo='/tasks' component={<Login/>} />}/>
<Route path='/tasks' element={<RestrictedRoute redirectTo='/login' component={<Login/>} />}/>


        </Routes>
       


      <div className={css.wrapper}>
        <h1 className={css.titleForm}>Phonebook</h1>
      <PhonebookForm />
      </div>
      <h2 className={css.titleContacts}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
