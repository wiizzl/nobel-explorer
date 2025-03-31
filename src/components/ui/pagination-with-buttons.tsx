"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type ReactNode, useCallback } from "react";

import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { cn } from "@/lib/utils";

type PaginationWithButtonsProps = {
  pageSizeSelectOptions?: {
    pageSizeSearchParam?: string;
    pageSizeOptions: number[];
  };
  totalCount: number;
  pageSize: number;
  page: number;
  pageSearchParam?: string;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

function PaginationWithButtons(props: PaginationWithButtonsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPageCount = Math.ceil(props.totalCount / props.pageSize);

  // const buildLink = useCallback(
  //   (newPage: number) => {
  //     const key = props.pageSearchParam || "page";
  //     if (!searchParams) return `${pathname}?${key}=${newPage}`;
  //     const newSearchParams = new URLSearchParams(searchParams);
  //     newSearchParams.set(key, String(newPage));
  //     return `${pathname}?${newSearchParams.toString()}`;
  //   },
  //   [searchParams, pathname, props.pageSearchParam]
  // );

  const navToPageSize = useCallback(
    (newPageSize: number) => {
      const key = props.pageSizeSelectOptions?.pageSizeSearchParam || "pageSize";
      const newSearchParams = new URLSearchParams(searchParams || undefined);
      newSearchParams.set(key, String(newPageSize));
      newSearchParams.delete(props.pageSearchParam || "page"); // Clear the page number when changing page size
      router.push(`${pathname}?${newSearchParams.toString()}`);
    },
    [searchParams, pathname, props.pageSearchParam, props.pageSizeSelectOptions?.pageSizeSearchParam, router]
  );

  const renderPageNumbers = () => {
    const items: ReactNode[] = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationButton
              // href={buildLink(i)}
              onClick={() => props.onPageChange(i)}
              isActive={props.page === i}
            >
              {i}
            </PaginationButton>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationButton
            // href={buildLink(1)}
            onClick={() => props.onPageChange(1)}
            isActive={props.page === 1}
          >
            1
          </PaginationButton>
        </PaginationItem>
      );

      if (props.page > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      const start = Math.max(2, props.page - 1);
      const end = Math.min(totalPageCount - 1, props.page + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationButton
              // href={buildLink(i)}
              onClick={() => props.onPageChange(i)}
              isActive={props.page === i}
            >
              {i}
            </PaginationButton>
          </PaginationItem>
        );
      }

      if (props.page < totalPageCount - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPageCount}>
          <PaginationButton
            // href={buildLink(totalPageCount)}
            onClick={() => props.onPageSizeChange(totalPageCount)}
            isActive={props.page === totalPageCount}
          >
            {totalPageCount}
          </PaginationButton>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 w-full">
      {props.pageSizeSelectOptions && (
        <div className="flex flex-col gap-4 flex-1">
          <SelectRowsPerPage
            options={props.pageSizeSelectOptions.pageSizeOptions}
            setPageSize={navToPageSize}
            pageSize={props.pageSize}
          />
        </div>
      )}
      <Pagination className={cn({ "md:justify-end": props.pageSizeSelectOptions })}>
        <PaginationContent className="max-sm:gap-0">
          <PaginationItem>
            <PaginationPrevious
              // href={buildLink(Math.max(props.page - 1, 1))}
              onClick={() => props.onPageChange(Math.max(props.page - 1, 1))}
              aria-disabled={props.page === 1}
              tabIndex={props.page === 1 ? -1 : undefined}
              className={props.page === 1 ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              // href={buildLink(Math.min(props.page + 1, totalPageCount))}
              onClick={() => props.onPageChange(Math.max(props.page + 1, totalPageCount))}
              aria-disabled={props.page === totalPageCount}
              tabIndex={props.page === totalPageCount ? -1 : undefined}
              className={props.page === totalPageCount ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

function SelectRowsPerPage({
  options,
  setPageSize,
  pageSize,
}: {
  options: number[];
  setPageSize: (newSize: number) => void;
  pageSize: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="whitespace-nowrap text-sm">Rows per page</span>

      <Select value={String(pageSize)} onValueChange={(value) => setPageSize(Number(value))}>
        <SelectTrigger>
          <SelectValue placeholder="Select page size">{String(pageSize)}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={String(option)}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export { PaginationWithButtons };
