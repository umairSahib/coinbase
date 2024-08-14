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
      <div className="flex flex-wrap gap-4 items-center justify-center mt-8 w-full px-4">
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center  focus:text-white  focus:bg-[#0041a3]"
          onClick={() => table.previousPage()}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center  focus:text-white  focus:bg-[#0041a3]"
          onClick={() => table.setPageIndex(0)}
        >
          1
        </button>
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center  focus:text-white  focus:bg-[#0041a3]"
          onClick={() => table.setPageIndex(1)}
        >
          2
        </button>
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center  focus:text-white  focus:bg-[#0041a3]"
          onClick={() => table.setPageIndex(2)}
        >
          3
        </button>
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center  focus:text-white  focus:bg-[#0041a3]"
          onClick={() => {}}
        >
          ...
        </button>
        <button
          className="rounded-full w-8 h-8 flex justify-center items-center  focus:text-white  focus:bg-[#0041a3]"
          onClick={() => table.nextPage()}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-lg rotate-180"
          />
        </button>
      </div>
    </>
  );
}
