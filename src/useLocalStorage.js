import { useState, useEffect } from "react";

//Usage
// const [name, setName] = useLocalStorage('name', '')
// return(
//     <input type="text" value={name} onChange={e=>setName(e.target.value)} />
// )

function getSavedValue(key, initialValue) {
  const savedValue = JSON.pasre(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}
export default function useLocalStoage(initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
