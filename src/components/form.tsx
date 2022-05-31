import React, { useState } from 'react';
export function FormFirst() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    birthdate: '',
    gender: '',
    email: '',
    information: Boolean,
  });

  function handleSubmit(ev: any) {
    ev.preventDefault();
    console.log('Guardando', formData);
  }

  function handleChange(ev: any) {
    const value =
      ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setFormData({ ...formData, [ev.target.name]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="date"
            name="birthdate"
            placeholder="Birthdate"
            // checked={formData.birthdate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={handleChange}
            required
          />
          <label htmlFor="Male">Male</label>
          <input
            type="radio"
            name="Gender"
            id="female"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="Female">Female</label>
          <input
            type="radio"
            name="Gender"
            id="Other"
            value="Other"
            onChange={handleChange}
          />
          <label htmlFor="Other">Other</label>
          <input
            type="radio"
            name="gender"
            id="Prefernot"
            value="Prefernot"
            onChange={handleChange}
          />
          <label htmlFor="Prefer not to mention">Prefer not to mention</label>
        </div>
        <div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="checkbox"
            name="information"
            id="information"
            // checked={formData.information}
            onChange={handleChange}
          />
          <label htmlFor="information">
            ¿Do you want to receive information from our newsletter?
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
