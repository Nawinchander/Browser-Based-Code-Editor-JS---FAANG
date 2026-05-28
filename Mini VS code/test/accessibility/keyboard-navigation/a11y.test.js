import axe from 'axe-core';

it('has no accessibility violations',
async () => {

  const results =
    await axe.run(document);

  expect(results.violations.length)
    .toBe(0);
});

