import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useMemo, useState} from 'react';

const thewlddsexpllorerStorageKey = 'thewlddsexpllorer:favorites:v1';

type ThewlddsexpllorerFavoritesState = Record<string, true>;

export function useThewlddsexpllorerFavorites() {
  const [thewlddsexpllorerFavs, thewlddsexpllorerSetFavs] =
    useState<ThewlddsexpllorerFavoritesState>({});
  const [thewlddsexpllorerReady, thewlddsexpllorerSetReady] =
    useState(false);

  useEffect(() => {
    let thewlddsexpllorerAlive = true;
    (async () => {
      try {
        const thewlddsexpllorerRaw = await AsyncStorage.getItem(
          thewlddsexpllorerStorageKey,
        );
        const thewlddsexpllorerParsed: unknown = thewlddsexpllorerRaw
          ? JSON.parse(thewlddsexpllorerRaw)
          : {};
        if (!thewlddsexpllorerAlive) return;
        if (
          thewlddsexpllorerParsed &&
          typeof thewlddsexpllorerParsed === 'object' &&
          !Array.isArray(thewlddsexpllorerParsed)
        ) {
          thewlddsexpllorerSetFavs(thewlddsexpllorerParsed as any);
        }
      } catch {
        // ignore corrupted storage
      } finally {
        if (thewlddsexpllorerAlive) {
          thewlddsexpllorerSetReady(true);
        }
      }
    })();
    return () => {
      thewlddsexpllorerAlive = false;
    };
  }, []);

  const thewlddsexpllorerPersist = useCallback(
    async (thewlddsexpllorerNext: ThewlddsexpllorerFavoritesState) => {
      thewlddsexpllorerSetFavs(thewlddsexpllorerNext);
      try {
        await AsyncStorage.setItem(
          thewlddsexpllorerStorageKey,
          JSON.stringify(thewlddsexpllorerNext),
        );
      } catch {
        // ignore write failures
      }
    },
    [],
  );

  const thewlddsexpllorerIsFav = useCallback(
    (thewlddsexpllorerId: string) => !!thewlddsexpllorerFavs[thewlddsexpllorerId],
    [thewlddsexpllorerFavs],
  );

  const thewlddsexpllorerToggle = useCallback(
    async (thewlddsexpllorerId: string) => {
      const thewlddsexpllorerNext = {...thewlddsexpllorerFavs};
      if (thewlddsexpllorerNext[thewlddsexpllorerId]) {
        delete thewlddsexpllorerNext[thewlddsexpllorerId];
      } else {
        thewlddsexpllorerNext[thewlddsexpllorerId] = true;
      }
      await thewlddsexpllorerPersist(thewlddsexpllorerNext);
    },
    [thewlddsexpllorerFavs, thewlddsexpllorerPersist],
  );

  const thewlddsexpllorerIds = useMemo(
    () => Object.keys(thewlddsexpllorerFavs),
    [thewlddsexpllorerFavs],
  );

  return {
    thewlddsexpllorerReady,
    thewlddsexpllorerIds,
    thewlddsexpllorerIsFav,
    thewlddsexpllorerToggle,
  };
}

