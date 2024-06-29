import React from "react";

export type BentoItem = {
  id: number;
  title: string;
  element: React.ReactNode;
  width: number;
  color?: string;
  height: number;
};

export type BentoItems = BentoItem[];

export type ClassNames = {
  container?: string;
  elementContainer?: string;
};

export type BentoGridProps = {
  items: BentoItems;
  gridCols?: number;
  rowHeight?: number;
  classNames: ClassNames;
};
