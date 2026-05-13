import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useMemo, useState} from 'react';

const wudlanndvildexplorrStorageKey = 'wudlanndvildexplorr:favorites:v1';

type WudlanndvildExplorrFavoritesState = Record<string, true>;

export function useWudlanndvildExplorrFavorites() {
  const [wudlanndvildexplorrFavs, wudlanndvildexplorrSetFavs] =
    useState<WudlanndvildExplorrFavoritesState>({});
  const [wudlanndvildexplorrReady, wudlanndvildexplorrSetReady] =
    useState(false);

  useEffect(() => {
    let wudlanndvildexplorrAlive = true;
    (async () => {
      try {
        const wudlanndvildexplorrRaw = await AsyncStorage.getItem(
          wudlanndvildexplorrStorageKey,
        );
        const wudlanndvildexplorrParsed: unknown = wudlanndvildexplorrRaw
          ? JSON.parse(wudlanndvildexplorrRaw)
          : {};
        if (!wudlanndvildexplorrAlive) return;
        if (
          wudlanndvildexplorrParsed &&
          typeof wudlanndvildexplorrParsed === 'object' &&
          !Array.isArray(wudlanndvildexplorrParsed)
        ) {
          wudlanndvildexplorrSetFavs(wudlanndvildexplorrParsed as any);
        }
      } catch {
        // ignore corrupted storage
      } finally {
        if (wudlanndvildexplorrAlive) {
          wudlanndvildexplorrSetReady(true);
        }
      }
    })();
    return () => {
      wudlanndvildexplorrAlive = false;
    };
  }, []);

  const wudlanndvildexplorrPersist = useCallback(
    async (wudlanndvildexplorrNext: WudlanndvildExplorrFavoritesState) => {
      wudlanndvildexplorrSetFavs(wudlanndvildexplorrNext);
      try {
        await AsyncStorage.setItem(
          wudlanndvildexplorrStorageKey,
          JSON.stringify(wudlanndvildexplorrNext),
        );
      } catch {
        // ignore write failures
      }
    },
    [],
  );

  const wudlanndvildexplorrIsFav = useCallback(
    (wudlanndvildexplorrId: string) => !!wudlanndvildexplorrFavs[wudlanndvildexplorrId],
    [wudlanndvildexplorrFavs],
  );

  const wudlanndvildexplorrToggle = useCallback(
    async (wudlanndvildexplorrId: string) => {
      const wudlanndvildexplorrNext = {...wudlanndvildexplorrFavs};
      if (wudlanndvildexplorrNext[wudlanndvildexplorrId]) {
        delete wudlanndvildexplorrNext[wudlanndvildexplorrId];
      } else {
        wudlanndvildexplorrNext[wudlanndvildexplorrId] = true;
      }
      await wudlanndvildexplorrPersist(wudlanndvildexplorrNext);
    },
    [wudlanndvildexplorrFavs, wudlanndvildexplorrPersist],
  );

  const wudlanndvildexplorrIds = useMemo(
    () => Object.keys(wudlanndvildexplorrFavs),
    [wudlanndvildexplorrFavs],
  );

  return {
    wudlanndvildexplorrReady,
    wudlanndvildexplorrIds,
    wudlanndvildexplorrIsFav,
    wudlanndvildexplorrToggle,
  };
}

