/* eslint-disable react/require-default-props */
type MessageProps = {
  text: string
  type?: string
};
export default function Message({ text, type }: MessageProps) {
  return (
    <p className={`message message--${type && 'generic'}`}>{text}</p>
  );
}
