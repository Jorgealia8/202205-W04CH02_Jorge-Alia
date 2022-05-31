import React, { useState } from 'react';
export function FormFirst({ state }: { state: number }) {
  const [formFirstData, setFormFirstData] = useState({
    name: '',
    lastname: '',
    birthdate: '',
    gender: '',
    email: '',
    information: Boolean,
  });

  function handleSubmit(ev: any) {
    ev.preventDefault();
    console.log('Guardando', formFirstData);
  }

  function handleChange(ev: any) {
    const value =
      ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setFormFirstData({ ...formFirstData, [ev.target.name]: value });
  }

  const firstForm = (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formFirstData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={formFirstData.lastname}
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
          />
          <label htmlFor="Male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="Female">Female</label>
          <input
            type="radio"
            name="gender"
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
              value={formFirstData.email}
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

  const [formSecondData, setFormSecondData] = useState({
    user: '',
    password: '',
    repeatPassword: '',
    type: '',
  });

  function handleSubmitSecond(ev: any) {
    ev.preventDefault();
    console.log('Guardando', formSecondData);
  }

  function handleChangeSecond(ev: any) {
    const value =
      ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setFormSecondData({ ...formSecondData, [ev.target.name]: value });
  }

  const secondForm = (
    <>
      <form onSubmit={handleSubmitSecond}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="User name"
            value={formSecondData.user}
            onChange={handleChangeSecond}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={formSecondData.password}
            onChange={handleChangeSecond}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={formSecondData.repeatPassword}
            onChange={handleChangeSecond}
            required
          />
        </div>
        <select
          name="type"
          id=""
          value={formSecondData.type}
          onChange={handleChangeSecond}
          required
        ></select>
      </form>
    </>
  );

  if (state === 1) {
    return firstForm;
  }
  if (state === 2) {
    return secondForm;
  }
  return <></>;
}
