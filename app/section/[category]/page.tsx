import { Button } from "@/app/components/button";
import MediaCard from "@/app/components/mediaCard";
import Navbar from "@/app/components/navBar";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  try {
    const { summaries } = await import(`../../data/${category}.json`);
    const lowPoly = category === "lowPoly" ? "lowPoly" : "";
    return (
      <div className="m-4 space-y-12">
        <Navbar />
        <Button />
        <div className="flex flex-col items-center justify-start min-h-screen space-y-10 px-6">
          <div>
            <MediaCard render={summaries} type={lowPoly} />
          </div>

          <div className="text-center animate-bounceSlow">
            <h2 className="text-2xl font-semibold text-gray-700">More to come...</h2>
            <p className="text-lg text-gray-600">Stay tuned for more exciting designs and experiments.</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading category data:", error);
    return <div>Category not found.</div>;
  }
}
