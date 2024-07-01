import React from 'react';
import { AuthContext } from '../context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../components/dashboard/Perfil';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log('user', user);

  const profileFields = [
    { label: 'PHOTO', value: user?.profileImage, isImage: true },
    { label: 'NAME', value: user?.name || 'Xanthe Neal' },
    { label: 'BIO', value: user?.bio },
    { label: 'PHONE', value: user?.phone },
    { label: 'EMAIL', value: user?.email },
    { label: 'PASSWORD', value: '************' },
  ];

  return (
    <div className="font-sans">
      <header className="flex justify-between items-center p-4">
      <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        className="p-3 bg-gray-100 rounded-full hover:bg-gray-300">
                        <span class="[&>svg]:w-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" /></svg>
                        </span>
                    </button>
        <div className="flex items-center gap-8">
          <Perfil />
         
        </div>
      </header>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Personal info</h1>
        <p className="text-gray-600">Basic info, like your name and photo</p>
      </div>

      <div className="w-[845.91px] mx-auto rounded-[12px] border border-gray-300">
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <div>
            <h2 className="text-2xl font-medium">Profile</h2>
            <p className="text-sm text-gray-500">Some info may be visible to other people</p>
          </div>
          <Link to="/UpdateDash">
            <button className="px-8 py-2 border border-gray-300 rounded-xl text-gray-700">Edit</button>
          </Link>
        </div>

        <div>
          {profileFields.map((field, index) => (
            <div className="flex py-4 px-12 border-b border-gray-300" key={index}>
              <div className="w-1/3 text-gray-500 text-sm">{field.label}</div>
              <div className="w-2/3 text-gray-800">
                {field.isImage ? (
                  <img src={field.value} alt="profile" className="w-16 h-16 rounded-lg" />
                ) : (
                  field.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>created by username</p>
        <p>devChallenges.io</p>
      </footer>
    </div>
  );
};

export default Dashboard;
