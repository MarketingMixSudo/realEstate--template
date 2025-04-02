'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function SortAndPagination() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  
  const currentSort = searchParams.get('sort') || '-date_created';
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const handleSortChange = (newSort) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set('sort', newSort);
      params.set('page', '1'); // Reset paginacji przy zmianie sortowania
      router.replace(`?${params.toString()}`);
    });
  };

  // const handlePageChange = (newPage) => {
  //   startTransition(() => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set('page', newPage.toString());
  //     router.replace(`?${params.toString()}`);
  //   });
  // };

  return (
    <div className="flex flex-col gap-4">
      <Select onValueChange={handleSortChange} defaultValue={currentSort} disabled={isPending}>
        <SelectTrigger>
          <SelectValue placeholder="Sortuj według" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-date_created">od najnowszych</SelectItem>
          <SelectItem value="date_created">od najstarszych</SelectItem>
          <SelectItem value="price">cena rosnąco</SelectItem>
          <SelectItem value="-price">cena malejąco</SelectItem>
        </SelectContent>
      </Select>
      {/* <div className="flex gap-4 justify-center items-center">
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1 || isPending}>
          Poprzednia
        </Button>
        <span className="text-lg">Strona {currentPage}</span>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={isPending}>
          Następna
        </Button>
      </div> */}
    </div>
  );
}