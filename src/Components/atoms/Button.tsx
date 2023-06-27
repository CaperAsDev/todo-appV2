/* eslint-disable react/require-default-props */
export enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}
type ButtonProps = {
  size:Sizes
  content: string
  action: () => void
  customClass?: string
};
export default function Button({
  size, content, action, customClass = '',
}: ButtonProps) {
  return (
    <button onClick={action} type="button" className={`button button--${size} ${customClass}`}>{content}</button>
  );
}
