import { combine, guard, restore } from "effector";
import { status } from "patronum/status";

import { PhotoEntity } from "@/app/types";
import {
  $createPhotoFx,
  $deletePhotoFx,
  $getPhotosListFx,
} from "@/shared/api/photos/effects";
import { $submitForm } from "@/shared/api/photos/events";

export const $photos = restore<PhotoEntity[]>($getPhotosListFx.doneData, []);
const isIdle = $getPhotosListFx.pending.map(pending => !pending);

export const $createPhotoStatus = status({
  effect: $createPhotoFx,
});

export const $deletePhotoStatus = status({
  effect: $deletePhotoFx,
});

export const $getPhotosListStatus = status({
  effect: $getPhotosListFx,
});

export const $createPhotoError = restore<Error>($createPhotoFx.failData, null);

export const $deletePhotoError = restore<Error>($deletePhotoFx.failData, null);

export const $getPhotosListError = restore<Error>(
  $getPhotosListFx.failData,
  null
);

$photos
  .on($createPhotoFx.doneData, (state, photo) => [...state, photo])
  .on($deletePhotoFx.doneData, (state, photo) =>
    state.filter(statePhoto => statePhoto.id !== photo.id)
  );

export const $photosCombined = combine({
  data: $photos,
  error: $createPhotoError,
  isLoading: $createPhotoStatus,
});

export const $deleteRequestInfo = combine({
  error: $deletePhotoError,
  isLoading: $deletePhotoStatus,
});

export const $photosListCombined = combine({
  data: $photos,
  error: $getPhotosListError,
  isLoading: $getPhotosListStatus,
});

guard({
  clock: $submitForm,
  filter: isIdle,
  source: $photos,
  target: $getPhotosListFx,
});

$createPhotoFx.done.watch(console.log);
$getPhotosListFx.done.watch(console.log);

$photos.watch(console.log);
