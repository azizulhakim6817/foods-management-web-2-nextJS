"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Lock,
  Camera,
  ShieldCheck,
  Save,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const UserProfile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsUpdating(true);

    setTimeout(() => setIsUpdating(false), 1500);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-16 px-2">
      <div className="max-w-5xl mx-auto">
        {/* Cover */}
        <div className="relative h-44 rounded-3xl overflow-hidden shadow-lg bg-linear-to-r from-primary to-secondary p-8 flex items-end">
          <div className="text-white">
            <h2 className="text-2xl font-bold">Welcome Back 👋</h2>
            <p className="text-sm opacity-80">
              Manage your account settings and profile
            </p>
          </div>
        </div>
        {/* Profile Avatar */}
        <div className="flex flex-col items-center -mt-16 mb-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {session?.user?.image ? (
                <Image
                  width={200}
                  height={200}
                  src={session.user.image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <User size={48} />
                </div>
              )}
            </div>

            <button className="absolute bottom-0 right-0 p-2 bg-black text-white rounded-xl">
              <Camera size={18} />
            </button>
          </div>

          <h2 className="text-2xl font-bold mt-4">{session?.user?.name}</h2>

          <p className="text-gray-500 text-sm">{session?.user?.email}</p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Security Card */}
          <div className="card bg-white shadow-lg rounded-3xl p-6">
            <ShieldCheck className="text-primary mb-4" size={30} />

            <h3 className="font-bold text-lg mb-2">Security Status</h3>

            <p className="text-sm text-gray-500 mb-6">
              Your account is protected and secured.
            </p>

            <button
              onClick={() => signOut()}
              className="btn btn-secondary btn-block gap-2"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>

          {/* Profile Form */}
          <form
            onSubmit={handleUpdate}
            className="md:col-span-2 card bg-white shadow-lg rounded-3xl p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">
                Name
              </label>

              <div className="relative mt-2">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  defaultValue={session?.user?.name}
                  className="input w-full pl-12 bg-gray-50"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">
                Email
              </label>

              <div className="relative mt-2">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  value={session?.user?.email}
                  disabled
                  className="input w-full pl-12 bg-gray-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">
                New Password
              </label>

              <div className="relative mt-2">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="input w-full pl-12 bg-gray-50"
                />
              </div>
            </div>

            <button
              disabled={isUpdating}
              className="btn btn-primary w-full h-14"
            >
              {isUpdating ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  <Save size={18} /> Save Changes
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
