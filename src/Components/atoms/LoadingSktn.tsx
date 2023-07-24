export default function LoadingSkeleton() {
  return (
    <div className="skl">
      <div className="skl__title animated" />
      <div className="skl__bottom">
        <div className="items">
          <div className="item animated" />
          <div className="item animated" />
          <div className="item animated" />
          <div className="item animated" />
        </div>
        <div className="right-box animated" />
      </div>
    </div>
  );
}
