import React from 'react';
import { render } from 'react-dom';
import HomePage from '../views/HomePage';

beforeEach(() => {
  document.body.innerHTML = '';
});

test('HomePage renders when mounted', () => {
  const headingText = 'MERN stack starter';
  const paragraphText = 'Boostrap your SPA React project';
  const buttonText = 'Ping API';

  const div = document.createElement('div');
  document.body.appendChild(div);
  render(<HomePage />, div);

  const heading = document.querySelector('h1');
  const paragraph = document.querySelector('p');
  const button = document.querySelector('button[type="button"]');

  expect(heading.textContent).toBe(headingText);
  expect(paragraph.textContent).toBe(paragraphText);
  expect(button.textContent).toBe(buttonText);
});
