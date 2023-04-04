import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import MyContacts from '../pages/Contacts/MyContacts';

export const App = () => {
  return (
    <div>
      <MyContacts />
    </div>
  );
};
