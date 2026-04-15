type Props = {
  title: string;
  value: string;
};

export default function Card({ title, value }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
}