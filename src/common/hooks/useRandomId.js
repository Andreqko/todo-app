import { useRef } from 'react';

const useRandomId = () => useRef(Math.random().toString(36).substr(2, 9)).current;

export default useRandomId;
