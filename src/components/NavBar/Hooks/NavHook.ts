import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const useNavHook = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    
    setCurrentPath(location.pathname);
    
    const lastItem = document.querySelector('.font-titles.bg-accent-50');
    if (lastItem) {
      lastItem.classList.remove('font-titles', 'bg-accent-50');
    }
  
    const currentItem = document.getElementById(currentPath);
    if (currentItem) {
      currentItem.classList.add('font-titles', 'bg-accent-50');
    }

  }, [currentPath, location.pathname]);
  
}

export default useNavHook
