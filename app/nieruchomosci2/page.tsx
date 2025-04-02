import { readItems, aggregate } from "@directus/sdk";
import SortSelector from "@/components/sort-selector";
import directus from "@/lib/directus";
import { cn } from "@/lib/utils";
import PropertyCard from "@/components/property-card";
import Pagination from "@/components/pagination";

export default async function Articles({ searchParams }) {
  const sort = searchParams.sort || "-date_created";
  const page = parseInt(searchParams.page) || 1;
  const limit = 2;
  const offset = (page - 1) * limit;

  // Pobierz właściwości z Directus
  const properties = await directus.request<Property[]>(readItems("properties", {
    filter: { status: { _eq: "published" } },
    sort: [sort],
    fields: [
      "title", "slug", "thumbnail", "type", "listing_type", "city", 
      "address", "price", "rooms_count", "date_created", "property_surface"
    ],
    limit,
    offset,
  }));

  // Pobierz całkowitą liczbę elementów
  const getTotalPropertiesCount = async () => {
    const totalCount = await directus.request(
      aggregate("properties", {
        aggregate: { count: "*" },
      })
    );
    return totalCount[0].count;
  };

  const totalCount = await getTotalPropertiesCount();
  const totalPages = Math.ceil(totalCount / limit);

  let gridClass = "grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="mt-48">
      <SortSelector />
      <section className={cn("section")}>
        <div className="wrapper !max-w-[1800px]">
          <div className="flex flex-col justify-center items-center gap-4 max-w-screen-lg mx-auto text-center"></div>

          <div className={gridClass}>
            {properties?.map((property) => (
              <PropertyCard key={property?.slug} {...property} />
            ))}
          </div>

          {/* Dodaj paginację i przekaż całkowitą liczbę stron */}
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
}
