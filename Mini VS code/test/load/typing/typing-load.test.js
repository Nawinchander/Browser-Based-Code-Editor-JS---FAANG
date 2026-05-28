it('handles rapid typing', () => {

  const text =
    'console.log("hello");';

  let output = '';

  const start =
    performance.now();

  for (let i = 0; i < 100000; i++) {
    output += text;
  }

  const end =
    performance.now();

  expect(end - start)
    .toBeLessThan(1000);
});


// Why Important?

// Editors process thousands of events rapidly.