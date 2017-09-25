export interface DetectionType {
  label: string;
  value: string;
  color: string;
}

export interface ImageArea {
  key: string;
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
}

export interface Rectangle {
  width: number;
  height: number;
}
