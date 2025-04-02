// import Pagination from "@/components/pagination"
// import Pagination2 from "@/components/pagination2"
// import PropertyCard from "@/components/property-card"
// import SortSelect from "@/components/test"
// import directus from "@/lib/directus"
// import { cn } from "@/lib/utils"
// import { aggregate, readItems } from "@directus/sdk"


// const getTotalPropertyCount = async () => {
//     const totalCount = await directus.request(
//       aggregate("properties", {
//         aggregate: { count: "*" },
//         filter: { status: { _eq: "published" } }, // Tylko opublikowane nieruchomości
//       })
//     );
//     return totalCount[0].count;
//   };

// const Properties = async ({ searchParams }) => { 
//     const LIMIT = 3;
//     const currentPage = parseInt(searchParams.page) || 1;
//     // const sortParam = searchParams.sort ;  // Domyślnie sortowanie po dacie utworzenia
// const sortParam = searchParams?.sort || "-date_created"; // Pobieramy aktualne sortowanie

// const totalCount = await directus.request(
//     aggregate("properties", {
//       aggregate: { count: "*" },
//       filter: { status: { _eq: "published" } }, // Tylko opublikowane nieruchomości
//     })
//   );

//   const total =  totalCount[0].count
 


//     const properties = await directus.request<Property[]>(
//         readItems('properties', {
//             filter: { status: { _eq: 'published' } },
//             sort: ['-date_created'],  // Dynamiczne sortowanie na podstawie searchParams
//             fields: [
//                 'title',
//                 'slug',
//                 'thumbnail',
//                 'type',
//                 'listing_type',
//                 'city',
//                 'address',
//                 'price',
//                 'rooms_count',
//                 'property_surface',
//             ],
//             limit: LIMIT,
//             page: currentPage,
//         })
//     );

// console.log('properties',properties)
    

//     let gridClass = 'grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

//     return (
//         <>
//             <section className='bg-red-500 w-full h-[300px]'></section>

//         <SortSelect/>

//             <section className={cn('section')}>
//                 <div className='wrapper !max-w-[1800px]'>
//                     <div className='flex flex-col justify-center items-center gap-4 max-w-screen-lg mx-auto text-center'>
//                     </div>

//                     <div className={gridClass}>
//                         {properties?.map(property => (
//                             <PropertyCard
//                                 key={property?.slug}
//                                 {...property}
//                             />
//                         ))}
//                     </div>

//                     <div className="flex justify-center items-center">
//                         {/* <Pagination limit={LIMIT} currentPage={currentPage} /> */}
//                         <Pagination  limit={LIMIT} currentPage={currentPage} totalCount={total}/>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Properties;
