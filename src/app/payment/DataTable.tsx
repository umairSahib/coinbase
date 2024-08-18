"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
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
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const CustomPagination = () => {
    const { pageIndex } = table.getState().pagination;
    const totalPages = 172; // Total pages are set to 172

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
      paginationItems.push(renderPageButton(0));

      if (pageIndex > 2 && pageIndex < totalPages - 3) {
        paginationItems.push(<span key="dots-1">...</span>);
      }

      let startPage, endPage;

      if (pageIndex >= totalPages - 3) {
        // Show the last three pages when close to the end
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      } else {
        startPage = Math.max(1, pageIndex - 1);
        endPage = Math.min(totalPages - 4, pageIndex + 1);
      }

      // Show pages around the current page or last pages
      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(renderPageButton(i));
      }

      if (pageIndex < totalPages - 4) {
        paginationItems.push(<span key="dots-2">...</span>);
      }

      // Show the last page button only if it's not the current page
      if (pageIndex < totalPages - 1) {
        paginationItems.push(renderPageButton(totalPages - 1));
      }
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
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
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
      {/* Custom Pagination */}
      <CustomPagination />
    </>
  );
}
