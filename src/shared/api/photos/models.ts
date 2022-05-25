import { combine, restore } from "effector";
import { status } from "patronum/status";

import { PhotoEntity } from "@/app/types";
import { $createPhotoFx, $getPhotosListFx } from "@/shared/api/photos/effects";

export const $photos = restore<PhotoEntity[]>($getPhotosListFx.doneData, []);

export const $createPhotoStatus = status({
  effect: $createPhotoFx,
});

export const $getPhotosListStatus = status({
  effect: $getPhotosListFx,
});

export const $createPhotoError = restore<Error>($createPhotoFx.failData, null);

export const $getPhotosListError = restore<Error>(
  $getPhotosListFx.failData,
  null
);

$photos.on($createPhotoFx.doneData, (state, photo) => [...state, photo]);

export const $photosCombined = combine({
  data: $photos,
  error: $createPhotoError,
  isLoading: $createPhotoStatus,
});

export const $photosListCombined = combine({
  data: $photos,
  error: $getPhotosListError,
  isLoading: $getPhotosListStatus,
});

$createPhotoFx.done.watch(({ params, result }) => {
  console.log(result);
});

$getPhotosListFx.done.watch(({ params, result }) => {
  console.log(result);
});

$photos.watch(console.log);
