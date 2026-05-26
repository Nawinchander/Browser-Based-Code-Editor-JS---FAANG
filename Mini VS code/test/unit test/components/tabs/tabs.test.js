import { Tabs }
from '../../../src/components/tabs/tabs';

it('renders active tab', () => {

  const html = Tabs({

    openTabs: [
      {
        id: '1',
        name: 'App.js'
      }
    ],

    activeTab: '1'
  });

  expect(html)
    .toContain('active');
});

