it('survives long typing session', () => {

  let text = '';

  for (let i = 0; i < 1000000; i++) {
    text += 'a';
  }

  expect(text.length)
    .toBe(1000000);
});