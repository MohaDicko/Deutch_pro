export default function Testimonials({ dict }: { dict: any }) {
  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 font-outfit">{dict.testimonials.title}</h2>
        <div className="bg-red-50 p-8 rounded-2xl max-w-3xl mx-auto">
          <p className="text-xl italic text-gray-700 mb-6">{dict.testimonials.quote}</p>
          <div className="font-bold text-gray-900">{dict.testimonials.author}</div>
        </div>
      </div>
    </section>
  );
}
