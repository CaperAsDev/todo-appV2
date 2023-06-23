type MessageProps = {
  text: string
};
export default function Message({ text }: MessageProps) {
  return (
    <p className="message">{text}</p>
  );
}
