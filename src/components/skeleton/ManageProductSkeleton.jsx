"use client";

const ManageProductSkeleton = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-10 animate-pulse">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 w-72 bg-gray-200 rounded"></div>
          </div>

          <div className="flex gap-3">
            <div className="h-10 w-64 bg-gray-200 rounded-2xl"></div>
            <div className="h-10 w-28 bg-gray-200 rounded-2xl"></div>
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-[2.5rem] overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-6 border-b"
            >
              {/* Product */}
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>

                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-3 w-40 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Price */}
              <div className="h-4 w-16 bg-gray-200 rounded"></div>

              {/* Priority */}
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>

              {/* Actions */}
              <div className="flex gap-3">
                <div className="h-9 w-9 bg-gray-200 rounded"></div>
                <div className="h-9 w-9 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProductSkeleton;
