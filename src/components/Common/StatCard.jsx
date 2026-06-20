import '../../index.css'

const iconMap = {
  balance: '💲',
  discountPct: '💳',
  totalRef: '🔗',
  discountAmt: '⏳',
  commissionAmt: '%',
  totalEarn: '💰',
  commissionDisc: '👥',
  bankTransfer: '⇄',
}

const StatCard = ({ id, value, label }) => {
  return (
    <div className="bg-[#F2EDF5] border border-slate-200 rounded-3xl p-8 w-[280px] shadow-sm">
      <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center">
        <span className="text-white text-2xl">
          {iconMap[id]}
        </span>
      </div>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-3 text-lg text-slate-500">
        {label}
      </p>
    </div>
  )
}

export default StatCard