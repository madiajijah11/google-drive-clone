export interface Button {
  btnClass: string;
  title: string;
  onClick: () => void;
}

export interface Progress {
  progress: number;
}

export interface ArrayType {}

export interface File {
  id: string;
  parentId: string;
  userEmail: string;
}
