import { useSpring, useTransition } from 'react-spring';

export const useFlipVertical = (open: boolean) =>
  useSpring({
    transform: `rotateX(${open ? 180 : 0}deg)`,
  });

export const useRotate45 = (open: boolean) =>
  useSpring({
    transform: `rotateZ(${open ? 45 : 0}deg)`,
  });

export const useDropMenu = (open: boolean) =>
  useSpring({
    transform: `rotateX(${open ? 0 : -90}deg)`,
    opacity: open ? 1 : 0,
  });

export const useListPopIn = (list: Set<any> | any[]) =>
  useTransition(Array.from(list), {
    from: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
  });

export const usePopInAndOut = (show: boolean) =>
  useSpring({
    scale: show ? 1 : 0.8,
    opacity: show ? 1 : 0,
    display: show ? 'block' : 'none',
  });
