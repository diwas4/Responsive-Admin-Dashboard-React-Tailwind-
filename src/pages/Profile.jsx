import { Mail, Phone } from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* left column */}
      <div
        className="col-span-1 bg-white border border-gray-200 shadow-sm rounded-xl
      p-6 flex flex-col items-center justify-center gap-4"
      >
        {/* logo */}
        <div
          className="w-20 h-20 bg-primary text-white font-medium
        flex items-center justify-center text-3xl border-2 border-gray-400
        rounded-full"
        >
          DL
        </div>

        <div
          className="text-center border-b border-gray-200 w-full
        pb-4 mb-4"
        >
          <p className="text-xl font-light text-text-primary">Diwas Lamichhane</p>
          <p className="text-sm font-light text-text-primary mb-2">
            Super Admin
          </p>
          <p className="text-xs font-light text-text-primary">
            Joined 2026-06-04
          </p>
        </div>

        {/* email and phone */}
        <div className="space-y-2">
          <div className='flex items-center gap-2'>
            <Mail size={14} />
            <span className='text-sm text-text-primary font-light'>lamichhanediwas7@gmail.com</span>
          </div>
          <div className='flex items-center gap-2'>
            <Phone size={14} />
            <span className='text-sm text-text-primary font-light'>+977 9702000000</span>
          </div>
        </div>
      </div>
      
      {/* right column */}
  
      <div className='col-span-2 space-y-6'>
        {/* About */}
        <div className='bg-white border border-gray-200
        shadow-sm rounded-xl p-6'>
          <p className='text-sm text-text-primary
          font-light mb-4 uppercase'>About</p>
          <p className='text-sm text-text-primary font-light
          max-w-xl'>
            Frontend developer passionate about building
            beautiful scalable products with user-friendly
            user-interfaces.
          </p>
        </div>

        {/* Details */}
        <div className='bg-white border border-gray-200
        shadow-sm rounded-xl p-6'>
          <p className='text-sm text-text-primary font-light
          mb-4 uppercase'>Details</p>

          <div className='text-sm text-text-primary font-light
          flex items-center gap-8 mb-2'>
            <span>Location</span>
            <span>Kathmandu, Nepal</span>
          </div>

          <div className='text-sm text-text-primary font-light
          flex items-center gap-8 mb-2'>
            <span>Website</span>
            <span>https://bytesyatra.com</span>
          </div>

          <div className='text-sm text-text-primary font-light
          flex items-center gap-8 mb-2'>
            <span>Email</span>
            <span>lamichhanediwas@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
