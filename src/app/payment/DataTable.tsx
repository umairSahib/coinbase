"use client";

import React, { useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<
    Array<{ id: string; desc: boolean }>
  >([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  useEffect(() => {
    table.setPageIndex(0); // Reset to the first page whenever data is filtered
  }, [data]); // Run this effect when the data changes

  const CustomPagination = () => {
    const { pageIndex } = table.getState().pagination;
    const totalPages = 172; // Set total pages to 172 as requested

    const paginationItems = [];

    const renderPageButton = (page: number) => (
      <button
        key={page}
        className={`rounded-full w-8 h-8 flex justify-center items-center ${
          pageIndex === page ? "text-white bg-[#0041a3]" : ""
        }`}
        onClick={() => table.setPageIndex(page)}
        disabled={pageIndex === page}
      >
        {page + 1}
      </button>
    );

    if (totalPages > 0) {
      // Always show the first page
      paginationItems.push(renderPageButton(0)); // Page 1

      // Show ellipsis if pageIndex is far from the beginning
      if (pageIndex > 2) {
        paginationItems.push(<span key="dots-1">...</span>);
      }

      // Show pages around the current page index
      let startPage = Math.max(1, pageIndex - 1);
      let endPage = Math.min(totalPages - 2, pageIndex + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(renderPageButton(i));
      }

      // Show ellipsis if pageIndex is far from the end
      if (pageIndex < totalPages - 3) {
        paginationItems.push(<span key="dots-2">...</span>);
      }

      // Always show the last page
      paginationItems.push(renderPageButton(totalPages - 1)); // Last page
    }

    return (
      <div className="flex flex-wrap gap-4 items-center justify-center mt-8 w-full px-4">
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center focus:text-white focus:bg-[#0041a3]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>
        {paginationItems}
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center focus:text-white focus:bg-[#0041a3]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-lg rotate-180"
          />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="3xl:w-full rounded-md border overflow-x-auto">
        <Table className="3xl:w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    onClick={() => {
                      const isSorted = table
                        .getState()
                        .sorting.find((sort) => sort.id === header.id);
                      const desc = isSorted ? !isSorted.desc : false;
                      setSorting([{ id: header.id, desc }]);
                    }}
                    className={`cursor-pointer ${
                      table
                        .getState()
                        .sorting.find((sort) => sort.id === header.id)
                        ? table
                            .getState()
                            .sorting.find((sort) => sort.id === header.id)?.desc
                          ? "bg-gray-200"
                          : "bg-gray-100"
                        : ""
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {table
                      .getState()
                      .sorting.find((sort) => sort.id === header.id) ? (
                      table
                        .getState()
                        .sorting.find((sort) => sort.id === header.id)?.desc ? (
                        <span> 🔽</span>
                      ) : (
                        <span> 🔼</span>
                      )
                    ) : null}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : ""}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <CustomPagination />
    </>
  );
}
