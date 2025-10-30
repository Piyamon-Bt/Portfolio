interface CardProps {
  title: string;
  text: string;
}

export default function Card({ title, text }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
      <h2 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h2>
      <p className="text-gray-600">{text}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition">
        Learn More
      </button>
    </div>
  );
}
