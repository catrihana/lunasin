import { useEffect, useState } from 'react';

const useProfile = () => {
  const [profile, setProfile] = useState<any>({
    email: '',
    name: '',
    bumn: null,
  });

  useEffect(() => {
    const storedProfile: any = localStorage.getItem('userProfile');

    if (storedProfile) {
      const { email, name, bumn } = JSON.parse(storedProfile);

      setProfile({
        email,
        name,
        bumn,
      });
    }
  }, []);

  return profile;
};

export default useProfile;
