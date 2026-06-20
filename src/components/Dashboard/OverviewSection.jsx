import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

import StatCard from '../Common/StatCard'
import ServiceSummary from './ServiceSummary'
import ReferLinkSection from './ReferLinkSection'
import ReferralTable from './ReferralTable'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}





const OverviewSection = () => {
    const [referrals, setReferrals] = useState({})
    const [serviceStats, setServiceStats] = useState()
    const [refer, setRefer] = useState()
    const [referralTableDetails, setReferralTableDetails] = useState([])
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

    const getReferrals = async () => {
        setApiStatus(apiStatusConstants.inProgress)

        const token = Cookies.get('jwt_token')
        const apiUrl = 'https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals'
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const response = await fetch(apiUrl, options)

        if(response.ok) {
            const fetchedData = await response.json()
            setReferrals(fetchedData.data.metrics)
            setServiceStats(fetchedData.data.serviceSummary)
            setRefer(fetchedData.data.referral)
            setReferralTableDetails(fetchedData.data.referrals)
            setApiStatus(apiStatusConstants.success)
            console.log(fetchedData)
        } else {
            setApiStatus(apiStatusConstants.failure)
            console.log('Failed to fetch referrals data')
        }
    }

    useEffect(() => {
        getReferrals()
    }, [])

    const renderReferralMetrics = () => (
    
        <>
             <div className='bg-white w-full p-8 rounded-xl shadow-lg my-10 mx-10'>
                <h1 className='text-2xl text-balck font-medium mb-4'>Overview</h1>
                <ul className="flex flex-wrap gap-6">
                    {referrals.map(stat => (
                        <li key={stat.id}>
                            <StatCard 
                            id={stat.id}
                            key={stat.id} 
                            value={stat.value} 
                            label={stat.label} />
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ServiceSummary
                    activeReferrals={serviceStats.activeReferrals}
                    totalRefEarnings={serviceStats.totalRefEarnings}
                    service={serviceStats.service}
                    yourReferrals={serviceStats.yourReferrals}
                 />
            </div>

            <div>
                <ReferLinkSection code={refer.code} link={refer.link} />
            </div>

            {/* extract referal details from array as shown in the api in console */}
            <div>
                <ReferralTable referrals={referralTableDetails} />
            </div>
        </>
       
    )
    
  switch(apiStatus) {
    case apiStatusConstants.success:
        return renderReferralMetrics()
    case apiStatusConstants.failure:
        return <p>Failed to load referral metrics. Please try again.</p>
    case apiStatusConstants.inProgress:
        return <p>Loading referral metrics...</p>
    default:
        return null
  }
}

export default OverviewSection