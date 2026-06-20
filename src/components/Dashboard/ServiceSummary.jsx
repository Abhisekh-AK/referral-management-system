import React from 'react'

const ServiceSummary = ({
  activeReferrals,
  totalRefEarnings,
  service,
  yourReferrals,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 my-10 mx-4 md:mx-10">
      <h2 className="text-lg font-semibold text-slate-900 mb-6">
        Service summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase text-slate-400 mb-2">
            Service
          </p>
          <p className="text-sm font-semibold text-indigo-600">
            {service}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase text-slate-400 mb-2">
            Your Referrals
          </p>
          <p className="text-lg font-bold text-slate-900">
            {yourReferrals}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase text-slate-400 mb-2">
            Active Referrals
          </p>
          <p className="text-lg font-bold text-slate-900">
            {activeReferrals}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase text-slate-400 mb-2">
            Total Ref. Earnings
          </p>
          <p className="text-lg font-bold text-slate-900">
            {totalRefEarnings}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceSummary