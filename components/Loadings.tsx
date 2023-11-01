import LoadingItem from "./LoadingItem";

type LoadingsProps = {
  limit: string | number;
};

export default function Loadings({ limit }: LoadingsProps) {
  return (
    <>
      {Array.from({ length: Number(limit) }).map((_, i) => (
        <LoadingItem key={i} />
      ))}
    </>
  );
}
