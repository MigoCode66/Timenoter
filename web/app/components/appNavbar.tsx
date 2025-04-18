'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { getUser } from '../Data/user';
import { useEffect, useState } from 'react';
import { userData } from '../actions_login_register';

const AppNavbar = () => {
  const [data, setData] = useState<userData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setData(userData); // Set the fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <nav className="AppNavbar">
      <div className="UserInformation cursor-pointer">
        {data !== null ? (
          <>
            <p className="name">{data.username}</p>
            <p className="e-mail">{data.email}</p>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
