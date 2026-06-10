import { useState } from "react";

import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  const [formData, setFormData] =
    useState({
      name: user?.name || "",
      targetRole:
        user?.targetRole || "",
      experience:
        user?.experience || 0,
      skills:
        user?.skills?.join(",") ||
        "",
      bio: user?.bio || "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          name="targetRole"
          value={
            formData.targetRole
          }
          onChange={handleChange}
          placeholder="Target Role"
        />

        <input
          type="number"
          name="experience"
          value={
            formData.experience
          }
          onChange={handleChange}
          placeholder="Experience"
        />

        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />

        <button type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;