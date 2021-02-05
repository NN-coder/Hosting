const imgFolder = require.context('../../img');
const getImgPath = (name: string): string => imgFolder(name).default;

export type Extension = 'png' | 'jpg' | 'jpeg' | 'svg' | 'webp' | 'gif' | 'ico';
export type ImgObj = {
  [x in Extension]: string;
};

export function getSingleImage(name: string, ext: Extension): string {
  return getImgPath(`./${name}.${ext}`);
}

export function getImages(name: string, extensions: Extension[], returnType: 'array'): string[];
export function getImages(name: string, extensions: Extension[], returnType: 'object'): ImgObj;

export function getImages(
  name: string,
  extensions: Extension[],
  returnType: 'array' | 'object'
): string[] | ImgObj {
  if (returnType === 'array') {
    return extensions.map((ext) => getSingleImage(name, ext));
  }

  return Object.fromEntries(extensions.map((ext) => [ext, getSingleImage(name, ext)])) as ImgObj;
}
