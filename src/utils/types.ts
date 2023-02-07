export interface noteData {
  id?: string;
  title?: string;
  description?: string;
  pinned?: boolean;
}

export interface acctionType {
  type: string;
  payload: noteData[];
}