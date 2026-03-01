import '../src/assets/styles/main.scss';
import './styles.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    controls: { expanded: true },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'centered',
  backgrounds: { disable: true },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'theme--light', color: '#f6f8fa' },
      { name: 'dark', class: 'theme--dark', color: '#161624' }
    ]
  }
};
