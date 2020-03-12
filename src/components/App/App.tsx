import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from '../../i18n';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { configureStore } from '../../store/store';
import { StoreType } from '../../types/store';
import { StateTypes } from '../../types/state';
import './App.scss';

const initialState: StateTypes.State = {
  todoInput: '',
  todos: [],
  todoPreview: {
    isOpen: false,
    todo: null,
  },
};

const store: StoreType = configureStore(initialState);

export const App: FC = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </I18nextProvider>
  </Provider>
);
