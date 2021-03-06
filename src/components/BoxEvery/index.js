import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {View} from 'react-native';

import Box from '../Box';
// import { Container } from './styles';

export default function BoxEvery({track}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Box track={track.cases} title="Casos" color="#FFB259" />
      <Box track={track.deaths} title="Óbitos" color="#FF5959" />
      <Box track={track.recovered} title="Recuperados" color="#4DD97B" />
      <Box track={track.active} title="Ativos" color="#4CB1FB" />
    </>
  );
}
