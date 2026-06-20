import { useState } from 'react'

const ReferralTable = ({ referrals }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const rowsPerPage = 10

  const totalPages = Math.ceil(referrals.length / rowsPerPage)

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage

  const currentRows = referrals.slice(
    indexOfFirstRow,
    indexOfLastRow
  )

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 my-10 mx-4 md:mx-10">
      <h2 className="text-lg font-semibold mb-6">
        All referrals
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 text-slate-500 text-sm">
              <th className="text-left p-4">NAME</th>
              <th className="text-left p-4">SERVICE</th>
              <th className="text-left p-4">DATE</th>
              <th className="text-left p-4">PROFIT</th>
            </tr>
          </thead>

          <tbody>
            {currentRows.map(item => (
              <tr
                key={item.id}
                className="border-b border-slate-100"
              >
                <td className="p-4">{item.name}</td>

                <td className="p-4">
                  {item.serviceName}
                </td>

                <td className="p-4">
                  {item.date}
                </td>

                <td className="p-4 text-violet-600 font-medium">
                  ${item.profit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-slate-400">
          Showing {indexOfFirstRow + 1}-
          {Math.min(indexOfLastRow, referrals.length)}
          {' '}of {referrals.length} entries
        </p>

        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(prev => prev - 1)
            }
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`w-8 h-8 rounded ${
                currentPage === index + 1
                  ? 'bg-violet-600 text-white'
                  : 'border'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(prev => prev + 1)
            }
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReferralTable