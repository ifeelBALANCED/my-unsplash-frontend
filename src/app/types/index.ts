export type PhotoEntity = {
  id: number;
  label: string;
  photoUrl: string;
  password?: string;
};

export type GetPhotosParams = {
  label?: string;
};
