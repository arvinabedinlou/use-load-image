import { useEffect, DependencyList, EffectCallback } from "react";

export const useLoadImage = (
  effect: EffectCallback,
  pictures: any[],
  length?: number,
  deps?: DependencyList
) => {
  useEffect(() => {
    const loadImage = (image: any) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => {
          resolve(image.url);
          loadImg.onerror = (err) => reject(err);
        };
      });
    };
    Promise.allSettled(pictures.map((image: any) => loadImage(image)))
      .then(() => {
        if (pictures.length === length) {
          effect();
        }
      })
      .catch((err) => console.log("Failed to load images", err));
  }, deps);
};
