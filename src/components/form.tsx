import React from 'react';
export function FormFirst() {
  return (
    <>
      <form>
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input type="text" name="last name" placeholder="Last name" />
        </div>
        <div>
          <input type="text" name="Birthdate" placeholder="Birthdate" />
        </div>
        <div>
          <input type="radio" name="Gender" id="male" />
          <label htmlFor="Male">Male</label>
          <input type="radio" name="Gender" id="female" />
          <label htmlFor="Female">Female</label>
          <input type="radio" name="Gender" id="Other" />
          <label htmlFor="Other">Other</label>
          <input type="radio" name="Gender" id="Prefernot" />
          <label htmlFor="Prefer not to mention">Prefer not to mention</label>
        </div>
        <div>
          <input type="checkbox" name="information" id="information" />
          <label htmlFor="information">
            ¿Do you want to receive information from our newsletter?
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
