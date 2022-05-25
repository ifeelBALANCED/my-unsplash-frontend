import { createEffect } from "effector";

import { PhotosService } from "@/features/services/photos.service";

export const $createPhotoFx = createEffect(PhotosService.$createPhotoFx);
export const $deletePhotoFx = createEffect(PhotosService.$deletePhotoFx);
export const $getPhotosListFx = createEffect(PhotosService.$getAllPhotosFx);
