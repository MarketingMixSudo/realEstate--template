'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

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
     
    </div>
  );
}