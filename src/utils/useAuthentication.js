import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribeFromAuthStateChanged();
    };
  }, []);

  return {
    user
  };
}
