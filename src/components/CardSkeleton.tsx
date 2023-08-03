import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }: { cards: number }) => {
  return (
    <div className="card-skeleton-list">
      {Array(cards)
        .fill(0)
        .map((card, index) => (
          <div className="card-skeleton" key={index}>
            <Skeleton height={170} />
            <div className="info-skeleton">
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardSkeleton;
