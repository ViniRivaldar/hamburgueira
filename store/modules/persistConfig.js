import storage from 'redux-persist/lib/storage';

const createNoopStorage = () => ({
  getItem: () => Promise.resolve(null),
  setItem: () => Promise.resolve(),
  removeItem: () => Promise.resolve()
});

const persistConfig = {
  key: 'root',
  storage: storage || createNoopStorage(),
  whitelist: ['auth']
};

export default persistConfig;