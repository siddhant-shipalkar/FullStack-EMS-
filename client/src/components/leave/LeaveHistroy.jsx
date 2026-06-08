import { format } from 'date-fns'
import { Check, Loader2Icon, X } from 'lucide-react'
import React, { useState } from 'react'

const LeaveHistroy = ({leaves, isAdmin, onUpdate}) => {

    const  [processing, setProcessing] = useState(null)

    const handleStatusUpdate = async (id, status) =>{
        setProcessing(id)
    }

  return (
     <div className='card overflow-hidden'>
          <div className='overflow-auto'>
            <table className='table-modern'>
                <thead>
                    <tr>
                        {isAdmin && <th>Employee</th>}
                      <th>Type</th>
                      <th>Dates</th>
                      <th>Reason</th>
                      <th>Status</th>
                        {isAdmin && <th className='text-center'>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                  {leaves.length === 0 ? (
                    <tr>
                      <td colSpan={ isAdmin ?  6 : 4} className='text-center py-12 text-slate-400'>
                        No leave applications found
                      </td>
                    </tr>
                  ): (
                    leaves.map((leaves)=>{
                      return(
                        <tr key={leaves._id || leaves.id}>
                            {isAdmin && (
                                  <td className=' text-slate-900'>
                              {leaves.employee?.firstName}
                              {leaves.employee?.firstName}
                            </td>
                            )}

                            <td >
                              <span className='badge bg-slate-100 text-slate-600'>{leaves.type}</span>
                            </td>
                            
                            <td className='px-6 py-4 text-slate-900'>
                              { format(new Date(leaves.startDate) , "hh, mm, a")} - {format(new Date(leaves.endDate),"MMM dd,yyyy")}
                            </td>
    
                              <td className='mx-w-xs truncate text-slate-500' title={leaves.reason}>
                                {leaves.reason}
                            </td>
    
                            <td >
                                <span className={`badge ${leaves.status === "APPROVED" ? "badge-success": leaves.status === "REJECTED" ? "badge-danger" : "badge-warning" }`}>
                                    { leaves.status}
                                </span>
                            </td>
                                {isAdmin && (
                                    <td>
                                           {leaves.status === "PENDING" && (
                                            <div className='flex justify-center gap-2'>
                                                <button disabled={!!processing}  onClick={()=> handleStatusUpdate(leaves._id || leaves.id, "APPROVED")} className='p-1.5 rounded-md bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors'>
                                                    {processing === (leaves._id || leaves.id) ? <Loader2Icon className='w-4 h-4 animate-spin' />: <Check className='w-4 h-4' />}
                                                </button>

                                                <button nClick={()=> handleStatusUpdate(leaves._id || leaves.id, "REJECTED")} disabled={!!processing} className='p-1.5 rounded-md bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors'>
                                                    {processing === (leaves._id || leaves.id) ? <Loader2Icon className='w-4 h-4 animate-spin' />: <X className='w-4 h-4' />}
                                                </button>
                                            </div>
                                        )}
                                     </td>
                                )}
                             
                        </tr>
                      )
                    })
                  )}
                </tbody>
            </table>          
          </div>
        </div>
  )
}

export default LeaveHistroy
   