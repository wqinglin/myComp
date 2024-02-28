export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  children?: any;
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}
