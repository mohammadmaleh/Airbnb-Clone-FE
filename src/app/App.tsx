import { store } from '@/lib/store';
import { Provider } from 'react-redux';

const App = ({ children }: { children: React.ReactNode }) => {
  return <Provider {...{ store }}>{children}</Provider>;
};

export default App;
