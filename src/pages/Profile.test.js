import { render, screen, fireEvent } from "@testing-library/react";
import Profile from "./Profile";
// import { MemoryRouter } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
// import { MemoryRouter } from 'react-router';
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
// @ts-expect-error
global.TextDecoder = TextDecoder


test("renders the Profile form", () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
});

test("allows user to edit profile fields", () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  const nameInput = screen.getByLabelText(/Name:/i);
  fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
  expect(nameInput.value).toBe("Jane Doe");
});
