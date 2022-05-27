import { request } from "@/app/http/http";
import * as types from "@/app/types";
import { AddFormValues } from "@/shared/ui/add-form";

export const $createPhotoFx = async (data: AddFormValues) => {
  return await request<types.PhotoEntity>({
    method: "post",
    url: "/photo",
    data,
  });
};

export const $deletePhotoFx = async (id: number) => {
  return await request<types.PhotoEntity>({
    method: "delete",
    url: `/photo/${id}`,
  });
};

export const $getAllPhotosFx = async (params?: types.GetPhotosParams) => {
  return await request<types.PhotoEntity[]>(
    {
      method: "get",
      url: "/photo",
    },
    params
  );
};

export const PhotosService = {
  $createPhotoFx,
  $getAllPhotosFx,
  $deletePhotoFx,
};
