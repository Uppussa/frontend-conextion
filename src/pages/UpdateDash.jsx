import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import Perfil from '../components/dashboard/Perfil';

const UpdateProfile = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(user?.profileImage || '/path-to-default-profile-image.jpg');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    phone: user?.phone || '',
    email: user?.email || '',
    profileImage: '',
  });

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setFormData({ ...formData, profileImage: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await updateProfile(formDataToSend);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className="font-sans min-h-screen">
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
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl border border-gray-300">
        <div className="p-6 border-b border-gray-200">
          <Link to="/dashboard">
            <span className="text-blue-500 mb-4">← Back </span>
          </Link>
          <h2 className="text-2xl font-medium">Change Info</h2>
          <p className="text-sm text-gray-500">Changes will be reflected to every service</p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-6">
              <img
                src={photo}
                alt="Profile"
                className="w-16 h-16 rounded-lg mr-4"
                onClick={handlePhotoClick}
              />
              <input
                type="file"
                name="profileImage"
                onChange={handlePhotoChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Bio</label>
              <textarea
                name="bio"
                placeholder="Enter your bio..."
                value={formData.bio}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone..."
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your new password..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save</button>
          </form>
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500 pb-4">
        <p>created by username</p>
        <p>devChallenges.io</p>
      </footer>
    </div>
  );
};

export default UpdateProfile;
