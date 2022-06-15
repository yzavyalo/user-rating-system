import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/UserCard'
import { UserCard } from './components/UserCard';
import usersFromFile from './test-data.json';

import { Button } from '@rneui/base';

const App = () => {
  return <Button title="Hello World" />;
};

export default App;
