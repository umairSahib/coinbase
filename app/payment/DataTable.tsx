"use client";
//we have to import a lot of things and here are they
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

//now we are expecting 2 props: columns and the data(that we are expecting from the page component)
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // and now we will use this useReactTable hook
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    // and yes adding pagination can be done with just this above one line
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
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
        {/* //now to use the pagination we will use the buttons */}
      </div>
      <div className="flex gap-4 items-center justify-center mt-8">
        <button
          className="rounded-full p-4 bg-[#0052FF] text-white w-8 h-8 flex justify-center items-center "
          onClick={() => table.nextPage()}
        >
          1
        </button>
        <button
          className="rounded-full w-8 h-8  flex justify-center items-center "
          onClick={() => table.nextPage()}
        >
          2
        </button>
        <button
          className="rounded-full  w-8 h-8  flex justify-center items-center "
          onClick={() => table.nextPage()}
        >
          3
        </button>
        <button
          className="rounded-full  w-8 h-8  flex justify-center items-center "
          onClick={() => table.nextPage()}
        >
          ...
        </button>
        <button
          className="rounded-full w-8 h-8 bg-[#0052FF] text-white flex justify-center items-center "
          onClick={() => table.previousPage()}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="fa-chevron-left text-lg text-[#AEBAE5]"
          ></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
}
