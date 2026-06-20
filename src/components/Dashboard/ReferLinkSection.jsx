import React from 'react'

const ReferLinkSection = ({ code, link }) => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 my-10 mx-4 md:mx-10">
      <h1 className="text-lg font-semibold text-slate-900 mb-6">
        Refer friends and earn more
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Referral Link */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase mb-2">
            Your Referral Link
          </p>

          <div className="flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-lg px-4 py-3 text-sm text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap">
              {link}
            </div>

            <button
              onClick={() => copyToClipboard(link)}
              className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-3 rounded-lg transition"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Referral Code */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase mb-2">
            Your Referral Code
          </p>

          <div className="flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-lg px-4 py-3 text-sm text-slate-600">
              {code}
            </div>

            <button
              onClick={() => copyToClipboard(code)}
              className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-3 rounded-lg transition"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferLinkSection