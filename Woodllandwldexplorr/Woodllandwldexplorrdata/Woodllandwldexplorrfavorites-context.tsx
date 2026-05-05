import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

const wodllandwldexplorrStorageKey = 'wodllandwldexplorr:favorites:v1';

type WodllandwldexplorrFavoritesValue = {
  wodllandwldexplorrReady: boolean;
  wodllandwldexplorrIds: string[];
  wodllandwldexplorrIsFav: (id: string) => boolean;
  wodllandwldexplorrToggle: (id: string) => Promise<void>;
  wodllandwldexplorrRemove: (id: string) => Promise<void>;
};

const WodllandwldexplorrFavoritesContext =
  createContext<WodllandwldexplorrFavoritesValue | null>(null);

export const WodllandwldexplorrFavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wodllandwldexplorrFavs, wodllandwldexplorrSetFavs] = useState<Record<string, true>>({});
  const [wodllandwldexplorrReady, wodllandwldexplorrSetReady] = useState(false);

  useEffect(() => {
    let wodllandwldexplorrAlive = true;
    (async () => {
      try {
        const wodllandwldexplorrRaw = await AsyncStorage.getItem(wodllandwldexplorrStorageKey);
        const wodllandwldexplorrParsed: unknown = wodllandwldexplorrRaw ? JSON.parse(wodllandwldexplorrRaw) : {};
        if (!wodllandwldexplorrAlive) return;
        if (wodllandwldexplorrParsed && typeof wodllandwldexplorrParsed === 'object' && !Array.isArray(wodllandwldexplorrParsed)) {
          wodllandwldexplorrSetFavs(wodllandwldexplorrParsed as any);
        }
      } catch {
        // ignore
      } finally {
        if (wodllandwldexplorrAlive) wodllandwldexplorrSetReady(true);
      }
    })();
    return () => {
      wodllandwldexplorrAlive = false;
    };
  }, []);

  const wodllandwldexplorrPersist = useCallback(async (next: Record<string, true>) => {
    wodllandwldexplorrSetFavs(next);
    try {
      await AsyncStorage.setItem(wodllandwldexplorrStorageKey, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const wodllandwldexplorrToggle = useCallback(
    async (id: string) => {
      const wodllandwldexplorrNext = {...wodllandwldexplorrFavs};
      if (wodllandwldexplorrNext[id]) {
        delete wodllandwldexplorrNext[id];
      } else {
        wodllandwldexplorrNext[id] = true;
      }
      await wodllandwldexplorrPersist(wodllandwldexplorrNext);
    },
    [wodllandwldexplorrFavs, wodllandwldexplorrPersist],
  );

  const wodllandwldexplorrRemove = useCallback(
    async (id: string) => {
      if (!wodllandwldexplorrFavs[id]) return;
      const wodllandwldexplorrNext = {...wodllandwldexplorrFavs};
      delete wodllandwldexplorrNext[id];
      await wodllandwldexplorrPersist(wodllandwldexplorrNext);
    },
    [wodllandwldexplorrFavs, wodllandwldexplorrPersist],
  );

  const wodllandwldexplorrIds = useMemo(() => Object.keys(wodllandwldexplorrFavs), [wodllandwldexplorrFavs]);
  const wodllandwldexplorrIsFav = useCallback((id: string) => !!wodllandwldexplorrFavs[id], [wodllandwldexplorrFavs]);

  const value = useMemo<WodllandwldexplorrFavoritesValue>(
    () => ({
      wodllandwldexplorrReady,
      wodllandwldexplorrIds,
      wodllandwldexplorrIsFav,
      wodllandwldexplorrToggle,
      wodllandwldexplorrRemove,
    }),
    [wodllandwldexplorrIds, wodllandwldexplorrIsFav, wodllandwldexplorrReady, wodllandwldexplorrRemove, wodllandwldexplorrToggle],
  );

  return (
    <WodllandwldexplorrFavoritesContext.Provider value={value}>
      {children}
    </WodllandwldexplorrFavoritesContext.Provider>
  );
};

export function useWodllandwldexplorrFavorites() {
  const ctx = useContext(WodllandwldexplorrFavoritesContext);
  if (!ctx) {
    throw new Error('useWodllandwldexplorrFavorites must be used within WodllandwldexplorrFavoritesProvider');
  }
  return ctx;
}

