import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import './index.css'
import {persistStore} from "redux-persist";
import store from "./store/store.js";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/Shared/error-page.jsx";
import Appointments from "./components/v1/Appointments/Appointments.jsx";
import ScheduleAppointment from "./components/v1/Appointments/ScheduleAppointment.jsx";
import Layout from "./components/v1/common/Layout.jsx";
import {Dashboard} from "./components/v1/Dashboard/Dashboard.jsx";
import StaffsOverview from "./components/v1/Staffs/StaffsOverview";
import ViewStaff from "./components/v1/Staffs/ViewStaff";
import AddPatient,{ patientAction } from "./components/v1/Patients/AddPatient";
import PatientsOverview from "./components/v1/Patients/PatientsOverview";
import ViewPatient from "./components/v1/Patients/ViewPatient";
//import { staffAction, staffLoader } from "./components/v1/Staffs/AddStaff";
import AddStaff, { staffAction } from "./components/v1/Staffs/AddStaff";
import ActionPropType from "./Models/ActionPropType";
import  Analytics  from "./components/v1/Analytics/Analytics";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        handle: {
            crumb: {
                actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                breadcrumb: [
                    new ActionPropType('dashboard', 'Dashboard', () => {}),
                ]
            }
        },
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                        ]
                    }
                }
            }, {
                path: "appointment",
                element: <Appointments/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('noroute', 'Appoinments', () => {})
                        ]
                    }
                }
            }, {
                path: "scheduleappointment",
                element: <ScheduleAppointment/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('appointment', 'Appoinments', () => {}),
                            new ActionPropType('noroute', 'Schedule Appoinments', () => {})
                        ]
                    }
                }
            }, {
                path: "addpatient",
                element: <AddPatient/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('managepatient', 'Manage Patient', () => {}),
                            new ActionPropType('noroute', 'Add Patient', () => {})
                        ]
                    }
                },
                action: patientAction,// loader: patientLoader
            }, {
                path: "managepatient",
                element: <PatientsOverview/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('noroute', 'Manage Patient', () => {}),
                        ]
                    }
                }
            }, {
                path: "viewpatient",
                element: <ViewPatient/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('managepatient', 'Manage Patient', () => {}),
                            new ActionPropType('noroute', 'View Patient', () => {})
                        ]
                    }
                }
            }, {
                path: "chats",
                element: <AddPatient/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('noroute', 'Manage Patient', () => {})
                        ]
                    }
                }
            }, {
                path: "managestaffs",
                element: <StaffsOverview/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addstaff', 'Add New Member', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('noroute', 'Manage Staffs', () => {})
                        ]
                    }
                }
            }, {
                path: "addstaff",
                element: <AddStaff/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('managestaffs', 'Manage Staffs', () => {}),
                            new ActionPropType('noroute', 'Add Staff', () => {})
                        ]
                    }
                },
                action: staffAction,// loader: staffLoader
            }, {
                path: "viewstaff",
                element: <ViewStaff/>,
                handle: {
                    crumb: {
                        actionButton: new ActionPropType('addpatient', 'Add New Patient', () => {}),
                        breadcrumb: [
                            new ActionPropType('dashboard', 'Dashboard', () => {}),
                            new ActionPropType('managestaffs', 'Manage Staffs', () => {}),
                            new ActionPropType('noroute', 'View Staff', () => {})
                        ]
                    }
                }
            },
            {
                path: "analytics",
                element: <Analytics/>
              },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

//const persistor = persistStore(store);
// root.render(   <React.StrictMode>     <Provider store={store}> <PersistGate
// persistor={persistor}>         <App />       </PersistGate> </Provider>
// </React.StrictMode> );