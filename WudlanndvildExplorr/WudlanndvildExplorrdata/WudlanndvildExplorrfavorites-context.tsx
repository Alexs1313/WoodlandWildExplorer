import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

const wudlanndvildexplorrStorageKey = 'wudlanndvildexplorr:favorites:v1';

type WudlanndvildExplorrFavoritesValue = {
  wudlanndvildexplorrReady: boolean;
  wudlanndvildexplorrIds: string[];
  wudlanndvildexplorrIsFav: (id: string) => boolean;
  wudlanndvildexplorrToggle: (id: string) => Promise<void>;
  wudlanndvildexplorrRemove: (id: string) => Promise<void>;
};

const WudlanndvildExplorrFavoritesContext =
  createContext<WudlanndvildExplorrFavoritesValue | null>(null);

export const WudlanndvildExplorrFavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wudlanndvildexplorrFavs, wudlanndvildexplorrSetFavs] = useState<Record<string, true>>({});
  const [wudlanndvildexplorrReady, wudlanndvildexplorrSetReady] = useState(false);

  useEffect(() => {
    let wudlanndvildexplorrAlive = true;
    (async () => {
      try {
        const wudlanndvildexplorrRaw = await AsyncStorage.getItem(wudlanndvildexplorrStorageKey);
        const wudlanndvildexplorrParsed: unknown = wudlanndvildexplorrRaw ? JSON.parse(wudlanndvildexplorrRaw) : {};
        if (!wudlanndvildexplorrAlive) return;
        if (wudlanndvildexplorrParsed && typeof wudlanndvildexplorrParsed === 'object' && !Array.isArray(wudlanndvildexplorrParsed)) {
          wudlanndvildexplorrSetFavs(wudlanndvildexplorrParsed as any);
        }
      } catch {
        // ignore
      } finally {
        if (wudlanndvildexplorrAlive) wudlanndvildexplorrSetReady(true);
      }
    })();
    return () => {
      wudlanndvildexplorrAlive = false;
    };
  }, []);

  const wudlanndvildexplorrPersist = useCallback(async (next: Record<string, true>) => {
    wudlanndvildexplorrSetFavs(next);
    try {
      await AsyncStorage.setItem(wudlanndvildexplorrStorageKey, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const wudlanndvildexplorrToggle = useCallback(
    async (id: string) => {
      const wudlanndvildexplorrNext = {...wudlanndvildexplorrFavs};
      if (wudlanndvildexplorrNext[id]) {
        delete wudlanndvildexplorrNext[id];
      } else {
        wudlanndvildexplorrNext[id] = true;
      }
      await wudlanndvildexplorrPersist(wudlanndvildexplorrNext);
    },
    [wudlanndvildexplorrFavs, wudlanndvildexplorrPersist],
  );

  const wudlanndvildexplorrRemove = useCallback(
    async (id: string) => {
      if (!wudlanndvildexplorrFavs[id]) return;
      const wudlanndvildexplorrNext = {...wudlanndvildexplorrFavs};
      delete wudlanndvildexplorrNext[id];
      await wudlanndvildexplorrPersist(wudlanndvildexplorrNext);
    },
    [wudlanndvildexplorrFavs, wudlanndvildexplorrPersist],
  );

  const wudlanndvildexplorrIds = useMemo(() => Object.keys(wudlanndvildexplorrFavs), [wudlanndvildexplorrFavs]);
  const wudlanndvildexplorrIsFav = useCallback((id: string) => !!wudlanndvildexplorrFavs[id], [wudlanndvildexplorrFavs]);

  const value = useMemo<WudlanndvildExplorrFavoritesValue>(
    () => ({
      wudlanndvildexplorrReady,
      wudlanndvildexplorrIds,
      wudlanndvildexplorrIsFav,
      wudlanndvildexplorrToggle,
      wudlanndvildexplorrRemove,
    }),
    [wudlanndvildexplorrIds, wudlanndvildexplorrIsFav, wudlanndvildexplorrReady, wudlanndvildexplorrRemove, wudlanndvildexplorrToggle],
  );

  return (
    <WudlanndvildExplorrFavoritesContext.Provider value={value}>
      {children}
    </WudlanndvildExplorrFavoritesContext.Provider>
  );
};

export function useWudlanndvildExplorrFavorites() {
  const ctx = useContext(WudlanndvildExplorrFavoritesContext);
  if (!ctx) {
    throw new Error('useWudlanndvildExplorrFavorites must be used within WudlanndvildExplorrFavoritesProvider');
  }
  return ctx;
}

