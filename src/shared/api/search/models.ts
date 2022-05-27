import { createStore, sample } from "effector";
import { debounce } from "patronum";

import { getPhotosListFx } from "@/shared/api/photos";
import { searchChanged } from "@/shared/api/search/events";

export const $search = createStore("");

$search.on(searchChanged, (_, search) => search);

const readyToSearch = debounce({ source: $search, timeout: 500 });

sample({
  clock: readyToSearch,
  target: getPhotosListFx,
  fn: searchQuery => ({ label: searchQuery }),
});
