import React from 'react'
import { Bar ,Chart,Line} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels';


const Analytics=()=>{

    //Patient Ratio
    const patientRatio = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
              label: 'New Patient',
              backgroundColor: '#740AC7',
              fill: false,
              lineTension: 0.5,
              borderColor: '#740AC7',
              borderWidth: 2,
              data: [25, 27, 35, 37, 40, 45, 50,73,48,45,43,44],
            },
          {
            label: 'Repeated Patient',
            backgroundColor: '#F0DCFF',
            data: [30, 34, 37, 52, 55, 63, 67,70,73,76,80,85],
            fill: false,
            lineTension: 0.5,
            borderColor: '#F0DCFF',
            borderWidth: 2,
          },
        ],
    }

    const patientRatioOption={
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            title:{
                display:true,
                text:"Patient's Ratio",
                align:"start",
                font:{size:"20px",family:"Open Sans",weight:"400"}
            },
        },
        scales:{
            y:{
                grid:{
                    drawOnChartArea:false
                },
                min:0,
                max:100,
                ticks: {
                    stepSize: 25
                  }
            }
        }
    }

    // Gender Ratio
    const genderRatio = {
        labels: ['Male','Female','Others'],
        datasets: [
            {
              backgroundColor: ['#C085EF','#740AC7','#3C0E60'],
              fill: false,
              lineTension: 0.5,
              borderRadius:5,
              borderSkipped:false,
              data: [58,42,10],
              categoryPercentage: 1.0,
              datalabels:{
                color:'white',
                labels: {
                    title: {
                      font: {
                        weight: 'bold'
                      }
                    },
                }
              }
            },
        ],
    }

    const genderRatioOption={
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:"Gender Ratio",
                align:"start",
                font:{size:"20px",family:"Open Sans",weight:"400"},
                padding:{bottom:30},
                color:'black',
            },
        },
        scales:{
            x:{
                
                grid:{
                    display:false
                },
                ticks:{
                    padding:30,
                    // display:false
                    font:{
                        size:17
                    },
                    color:'black',
                },
                border:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                },
                suggestedMin:0,
                ticks: {
                    display:false,
                },
                border:{
                    display:false
                }
            }
        }
    }
     

    // Age Group
    const ageGroup = {
        labels: ['0-15 yrs','16-40 yrs','41-60 yrs','60+ yrs'],
        datasets: [
            {
              backgroundColor: ['#F0DCFF','#C085EF','#740AC7','#3C0E60'],
              fill: false,
              lineTension: 0.5,
              borderRadius:5,
              borderSkipped:false,
              data: [15,60,20,5],
              categoryPercentage: 1.0,
              axis:'y',
              datalabels:{
                color:'white',
                labels: {
                    title: {
                      font: {
                        weight: 'bold'
                      }
                    },
                }
              }
            },
        ],
    }

    const ageGroupOption={
        indexAxis:'y',
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:"Age Group Analysis",
                align:"start",
                font:{size:"20px",family:"Open Sans",weight:"400",fontColor:'black'},
                padding:{bottom:30},
                color:'black',
            },
        },
        scales:{
            x:{
                
                grid:{
                    display:false
                },
                ticks:{
                    // padding:10,
                    display:false,
                },
                border:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                },
                suggestedMin:0,
                ticks: {
                    // display:false,
                    font:{
                        size:17
                    },
                    color:'black',
                },
                border:{
                    display:false
                }
            }
        }
    }

    // Appointment Booking Analysis
    const appointmentBooking = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
              label: 'By Whatsapp Assistance',
              backgroundColor: '#740AC7',
              fill: false,
              lineTension: 0.5,
              borderColor: '#740AC7',
              borderWidth: 2,
              data: [25, 27, 35, 37, 40, 45, 50,73,48,45,43,44],
            },
          {
            label: 'In The Hospitals',
            backgroundColor: '#F0DCFF',
            data: [30, 34, 37, 52, 55, 63, 67,70,73,76,80,85],
            fill: false,
            lineTension: 0.5,
            borderColor: '#F0DCFF',
            borderWidth: 2,
          },
        ],
    }

    const appointmentBookingOption = {
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            title:{
                display:true,
                text:"Appointment Booking Analysis",
                align:"start",
                font:{size:"20px",family:"Open Sans",weight:"400"}
            },
        },
        scales:{
            y:{
                grid:{
                    drawOnChartArea:false
                },
                min:0,
                max:100,
                ticks: {
                    stepSize: 25
                  }
            }
        }
    }

    // Appointment Analysis
    const appointmentAnalysis = {
        labels: ['Completed','Cancelled','Reschedule'],
        datasets: [
            {
              backgroundColor: ['#C085EF','#740AC7','#3C0E60'],
              fill: false,
              lineTension: 0.5,
              borderRadius:5,
              borderSkipped:false,
              data: [58,42,10],
              datalabels:{
                color:'white',
                labels: {
                    title: {
                      font: {
                        weight: 'bold'
                      }
                    },
                }
              }
            },
        ],
    }

    const appointmentAnalysisOption={
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:"Appointment Analysis",
                align:"start",
                font:{size:"20px",family:"Open Sans",weight:"400"},
                padding:{bottom:30},
                color:'black',
            },
        },
        scales:{
            x:{
                
                grid:{
                    display:false
                },
                ticks:{
                    padding:30,
                    // display:false
                    font:{
                        size:17
                    },
                    color:'black',
                },
                border:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                },
                suggestedMin:0,
                ticks: {
                    display:false,
                },
                border:{
                    display:false
                }
            }
        }
    }

    // Mode of Payment
    const paymentMode = {
        labels: ['Cash','UPI','Card'],
        datasets: [
            {
              backgroundColor: ['#C085EF','#740AC7','#3C0E60'],
              fill: false,
              lineTension: 0.5,
              borderRadius:5,
              borderSkipped:false,
              data: [10,60,30],
              categoryPercentage: 1.0,
              datalabels:{
                color:'white',
                labels: {
                    title: {
                      font: {
                        weight: 'bold'
                      }
                    },
                }
              }
            },
        ],
    }

    const paymentModeOption={
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:"Mode Of Payments",
                align:"start",
                font:{size:"20px",family:"Open Sans",weight:"400"},
                padding:{bottom:30},
                color:'black',
            },
        },
        scales:{
            x:{
                
                grid:{
                    display:false
                },
                ticks:{
                    padding:30,
                    // display:false
                    font:{
                        size:17
                    },
                    color:'black',
                },
                border:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                },
                suggestedMin:0,
                ticks: {
                    display:false,
                },
                border:{
                    display:false
                }
            }
        }
    }
     

    // Age Group
    const paymentAnalysis = {
        labels: ['Consultation Fee','Procedure Fee'],
        datasets: [
            {
              backgroundColor: ['#740AC7','#3C0E60'],
              fill: false,
              lineTension: 0.5,
              borderRadius:5,
              borderSkipped:false,
              data: [90,10],
              categoryPercentage: 1.0,
              axis:'y',
              datalabels:{
                color:'white',
                labels: {
                    title: {
                      font: {
                        weight: 'bold'
                      }
                    },
                }
              }
            },
        ],
    }

    const paymentAnalysisOption={
        indexAxis:'y',
        responsive:true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:"Payment Analysis",
                align:"start",
                font:{size:"20px",family:"Open Sans",weight:"400",fontColor:'black'},
                padding:{bottom:80},
                color:'black',
            },
        },
        scales:{
            x:{
                
                grid:{
                    display:false
                },
                ticks:{
                    // padding:10,
                    display:false,
                },
                border:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                },
                suggestedMin:0,
                ticks: {
                    font:{
                        size:11
                    },
                    color:'black',
                },
                border:{
                    display:false
                },
                padding:{bottom:10},

            }
        }
    }
      
    return(
        <div className=''>
            <div className='flex text-[#585858] my-4 justify-between items-center'>
                <h1 className='text-5xl'>Analytics</h1>
                <div className="flex items-center md:text-xl">
                    <button className='flex items-center mr-4'><i className='icon-[ic--baseline-refresh] mr-1'></i> Refresh </button>
                    <button className='flex items-center'><i className='icon-[mdi--export] mr-1'></i> Export</button>
                </div>
            </div>

            {/* Patient Analysis  */}
            <div className="flex flex-col mt-4 md:mt-8">
                <div className="flex justify-between items-center text-sm lg:text-base my-4">
                    <h1 className='text-xl'>Patient's Analysis</h1>
                    <div className='flex'>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Yearly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Monthly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Weekly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Daily</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Custom</button>
                    </div>
                </div>
            

                <div className='mt-10 lg:h-[70vh] h-[50vh] px-[5%] py-[2%] border-2 shadow-lg'>  
                    <Line data={patientRatio} options={patientRatioOption}/>
                </div>
                <div className='flex justify-between w-auto'>
                    <div className=' mt-10 lg:h-[55vh] h-[50vh] px-[2%] lg:px-[10%] w-[48%] border-2 shadow-md border-t-0'>  
                        <Bar data={genderRatio} options={genderRatioOption} plugins={[ChartDataLabels]} />
                    </div>
                    <div className=' mt-10 lg:h-[55vh] h-[50vh] px-[2%] lg:px-[10%] w-[48%] border-2 shadow-md border-t-0'>  
                        <Bar data={ageGroup} options={ageGroupOption} plugins={[ChartDataLabels]} />
                    </div>
                </div>

            </div>

            <hr className="h-px block bg-gray-300 px-4 mt-12 mb-8"></hr>

            {/* Appointment Analysis  */}
            <div className="flex flex-col mb-4 md:mb-8">
                <div className="flex justify-between items-center text-sm lg:text-base mb-4">
                    <h1 className='text-xl'>Appoinment Analysis</h1>
                    <div className='flex'>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Yearly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Monthly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Weekly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Daily</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Custom</button>
                    </div>
                </div>
            

                <div className='mt-10 lg:h-[70vh] h-[50vh] px-[5%] py-[2%] border-2 shadow-lg'>  
                    <Line data={appointmentBooking} options={appointmentBookingOption}/>
                </div>
                <div className='flex justify-between w-auto'>
                    <div className=' mt-10 lg:h-[55vh] h-[50vh] px-[2%] lg:px-[5%] w-[48%] border-2 shadow-md border-t-0'>  
                        <Bar data={appointmentAnalysis} options={appointmentAnalysisOption} plugins={[ChartDataLabels]} />
                    </div>
                </div>

            </div>

            <hr className="h-px block bg-gray-300 px-4 mt-12 mb-8"></hr>

            {/* Payments Analysis  */}
            <div className="flex flex-col mt-4 md:mb-8">
                <div className="flex justify-between items-center text-sm lg:text-base mb-4">
                    <h1 className='text-xl'>Patient's Analysis</h1>
                    <div className='flex'>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Yearly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Monthly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Weekly</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Daily</button>
                        <button className='py-1 px-2 border-[#cdcdcf] bg-[#F9F4FE] border-2 rounded-md mr-1 focus:text-white focus:bg-[#740AC7]'>Custom</button>
                    </div>
                </div>
            
                <div className="flex justify-between w-auto text-xl">
                    <div className="bg-[#F9F4FE] flex w-[49%] p-[2%] lg:p-[6%] items-start justify-center">
                        <p className='w-[45%]'>Total Revenue Collected</p>
                        <h2 className='text-[#606060] text-5xl'>₹ 5.2K</h2>
                    </div>
                    <div className="bg-[#F9F4FE] flex w-[49%] p-[2%] lg:p-[6%] items-start justify-center">
                        <p className='w-[53%] mr-4'>Total money deposited in Bank</p>
                        <h2 className='text-[#606060] text-5xl'>₹ 5K</h2>
                    </div>
                </div>
                <div className='flex justify-between w-auto '>
                    <div className=' mt-10 lg:h-[55vh] h-[50vh] px-[2%] lg:px-[10%] w-[48%] border-2 shadow-md border-t-0'>  
                        <Bar data={paymentMode} options={paymentModeOption} plugins={[ChartDataLabels]} />
                    </div>
                    <div className=' mt-10 lg:h-[55vh] h-[50vh] px-[2%] lg:px-[3%] w-[48%] border-2 shadow-md border-t-0 pb-[8%]'>  
                        <Bar data={paymentAnalysis} options={paymentAnalysisOption} plugins={[ChartDataLabels]} />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Analytics