import { useContext } from 'react';
import { AppContext } from '../contexts';

export default function useHeader() {
  return useContext(AppContext);
}
