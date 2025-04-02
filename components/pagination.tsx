'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'

export default function PaginationComponent({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
	const searchParams = useSearchParams()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const handlePageChange = (newPage: number) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams)
			params.set('page', newPage.toString())
			router.replace(`?${params.toString()}`)
		})
	}

	// Generowanie przycisków stron
	const pageNumbers = []

	// Dodajemy zawsze pierwszą stronę
	pageNumbers.push(1)

	// Dodajemy dwie strony przed i dwie strony po aktualnej, jeśli to możliwe
	for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
		pageNumbers.push(i)
	}

	// Dodajemy zawsze ostatnią stronę, jeśli nie jest już w liście
	if (!pageNumbers.includes(totalPages)) {
		pageNumbers.push(totalPages)
	}

	// Dodajemy wielokropek, jeśli trzeba
	const renderPageNumbers = pageNumbers.map((page, index) => (
		<>
			{index > 0 && page !== pageNumbers[index - 1] + 1 && (
				<span key={`ellipsis-${index}`} className='text-gray-500'>
					...
				</span>
			)}
			<Button
				key={page}
				onClick={() => handlePageChange(page)}
				disabled={isPending}
				variant={page === currentPage ? 'outline' : 'default'}
				className={
					page === currentPage
						? 'bg-primary-400 text-white border-primary-400 px-2 py-1 cursor-pointer'
						: 'bg-transparent text-black px-2 py-1 cursor-pointer'
				}>
				{page}
			</Button>
		</>
	))

	return (
		<div className='flex gap-4 justify-center items-center mt-6'>
			{/* Przycisk "Poprzednia" */}
			<Button
				className='bg-transparent text-black px-2 py-1 cursor-pointer'
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage <= 1 || isPending}>
				&laquo;
			</Button>

			{/* Generowanie przycisków z numerami stron */}
			{renderPageNumbers}

			{/* Przycisk "Następna" */}
			<Button
				className='bg-transparent text-black px-2 py-1 cursor-pointer'
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage >= totalPages || isPending}>
				&raquo;
			</Button>
		</div>
	)
}
