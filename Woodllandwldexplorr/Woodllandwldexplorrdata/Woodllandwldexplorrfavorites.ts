import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useMemo, useState} from 'react';

const wodllandwldexplorrStorageKey = 'wodllandwldexplorr:favorites:v1';

type WoodllandwldexplorrFavoritesState = Record<string, true>;

export function useWodllandwldexplorrFavorites() {
  const [wodllandwldexplorrFavs, wodllandwldexplorrSetFavs] =
    useState<WoodllandwldexplorrFavoritesState>({});
  const [wodllandwldexplorrReady, wodllandwldexplorrSetReady] =
    useState(false);

  useEffect(() => {
    let wodllandwldexplorrAlive = true;
    (async () => {
      try {
        const wodllandwldexplorrRaw = await AsyncStorage.getItem(
          wodllandwldexplorrStorageKey,
        );
        const wodllandwldexplorrParsed: unknown = wodllandwldexplorrRaw
          ? JSON.parse(wodllandwldexplorrRaw)
          : {};
        if (!wodllandwldexplorrAlive) return;
        if (
          wodllandwldexplorrParsed &&
          typeof wodllandwldexplorrParsed === 'object' &&
          !Array.isArray(wodllandwldexplorrParsed)
        ) {
          wodllandwldexplorrSetFavs(wodllandwldexplorrParsed as any);
        }
      } catch {
        // ignore corrupted storage
      } finally {
        if (wodllandwldexplorrAlive) {
          wodllandwldexplorrSetReady(true);
        }
      }
    })();
    return () => {
      wodllandwldexplorrAlive = false;
    };
  }, []);

  const wodllandwldexplorrPersist = useCallback(
    async (wodllandwldexplorrNext: WoodllandwldexplorrFavoritesState) => {
      wodllandwldexplorrSetFavs(wodllandwldexplorrNext);
      try {
        await AsyncStorage.setItem(
          wodllandwldexplorrStorageKey,
          JSON.stringify(wodllandwldexplorrNext),
        );
      } catch {
        // ignore write failures
      }
    },
    [],
  );

  const wodllandwldexplorrIsFav = useCallback(
    (wodllandwldexplorrId: string) => !!wodllandwldexplorrFavs[wodllandwldexplorrId],
    [wodllandwldexplorrFavs],
  );

  const wodllandwldexplorrToggle = useCallback(
    async (wodllandwldexplorrId: string) => {
      const wodllandwldexplorrNext = {...wodllandwldexplorrFavs};
      if (wodllandwldexplorrNext[wodllandwldexplorrId]) {
        delete wodllandwldexplorrNext[wodllandwldexplorrId];
      } else {
        wodllandwldexplorrNext[wodllandwldexplorrId] = true;
      }
      await wodllandwldexplorrPersist(wodllandwldexplorrNext);
    },
    [wodllandwldexplorrFavs, wodllandwldexplorrPersist],
  );

  const wodllandwldexplorrIds = useMemo(
    () => Object.keys(wodllandwldexplorrFavs),
    [wodllandwldexplorrFavs],
  );

  return {
    wodllandwldexplorrReady,
    wodllandwldexplorrIds,
    wodllandwldexplorrIsFav,
    wodllandwldexplorrToggle,
  };
}

