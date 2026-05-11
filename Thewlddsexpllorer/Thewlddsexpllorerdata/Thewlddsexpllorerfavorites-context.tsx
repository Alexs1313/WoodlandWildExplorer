import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

const thewlddsexpllorerStorageKey = 'thewlddsexpllorer:favorites:v1';

type ThewlddsexpllorerFavoritesValue = {
  thewlddsexpllorerReady: boolean;
  thewlddsexpllorerIds: string[];
  thewlddsexpllorerIsFav: (id: string) => boolean;
  thewlddsexpllorerToggle: (id: string) => Promise<void>;
  thewlddsexpllorerRemove: (id: string) => Promise<void>;
};

const ThewlddsexpllorerFavoritesContext =
  createContext<ThewlddsexpllorerFavoritesValue | null>(null);

export const ThewlddsexpllorerFavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [thewlddsexpllorerFavs, thewlddsexpllorerSetFavs] = useState<Record<string, true>>({});
  const [thewlddsexpllorerReady, thewlddsexpllorerSetReady] = useState(false);

  useEffect(() => {
    let thewlddsexpllorerAlive = true;
    (async () => {
      try {
        const thewlddsexpllorerRaw = await AsyncStorage.getItem(thewlddsexpllorerStorageKey);
        const thewlddsexpllorerParsed: unknown = thewlddsexpllorerRaw ? JSON.parse(thewlddsexpllorerRaw) : {};
        if (!thewlddsexpllorerAlive) return;
        if (thewlddsexpllorerParsed && typeof thewlddsexpllorerParsed === 'object' && !Array.isArray(thewlddsexpllorerParsed)) {
          thewlddsexpllorerSetFavs(thewlddsexpllorerParsed as any);
        }
      } catch {
        // ignore
      } finally {
        if (thewlddsexpllorerAlive) thewlddsexpllorerSetReady(true);
      }
    })();
    return () => {
      thewlddsexpllorerAlive = false;
    };
  }, []);

  const thewlddsexpllorerPersist = useCallback(async (next: Record<string, true>) => {
    thewlddsexpllorerSetFavs(next);
    try {
      await AsyncStorage.setItem(thewlddsexpllorerStorageKey, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const thewlddsexpllorerToggle = useCallback(
    async (id: string) => {
      const thewlddsexpllorerNext = {...thewlddsexpllorerFavs};
      if (thewlddsexpllorerNext[id]) {
        delete thewlddsexpllorerNext[id];
      } else {
        thewlddsexpllorerNext[id] = true;
      }
      await thewlddsexpllorerPersist(thewlddsexpllorerNext);
    },
    [thewlddsexpllorerFavs, thewlddsexpllorerPersist],
  );

  const thewlddsexpllorerRemove = useCallback(
    async (id: string) => {
      if (!thewlddsexpllorerFavs[id]) return;
      const thewlddsexpllorerNext = {...thewlddsexpllorerFavs};
      delete thewlddsexpllorerNext[id];
      await thewlddsexpllorerPersist(thewlddsexpllorerNext);
    },
    [thewlddsexpllorerFavs, thewlddsexpllorerPersist],
  );

  const thewlddsexpllorerIds = useMemo(() => Object.keys(thewlddsexpllorerFavs), [thewlddsexpllorerFavs]);
  const thewlddsexpllorerIsFav = useCallback((id: string) => !!thewlddsexpllorerFavs[id], [thewlddsexpllorerFavs]);

  const value = useMemo<ThewlddsexpllorerFavoritesValue>(
    () => ({
      thewlddsexpllorerReady,
      thewlddsexpllorerIds,
      thewlddsexpllorerIsFav,
      thewlddsexpllorerToggle,
      thewlddsexpllorerRemove,
    }),
    [thewlddsexpllorerIds, thewlddsexpllorerIsFav, thewlddsexpllorerReady, thewlddsexpllorerRemove, thewlddsexpllorerToggle],
  );

  return (
    <ThewlddsexpllorerFavoritesContext.Provider value={value}>
      {children}
    </ThewlddsexpllorerFavoritesContext.Provider>
  );
};

export function useThewlddsexpllorerFavorites() {
  const ctx = useContext(ThewlddsexpllorerFavoritesContext);
  if (!ctx) {
    throw new Error('useThewlddsexpllorerFavorites must be used within ThewlddsexpllorerFavoritesProvider');
  }
  return ctx;
}

