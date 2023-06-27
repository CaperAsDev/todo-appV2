/* eslint-disable react/require-default-props */
type MessageProps = {
  text: string
  type?: string
};
export default function Message({ text, type = 'generic' }: MessageProps) {
  return (
    <p className={`message message--${type}`}>{text}</p>
  );
}
