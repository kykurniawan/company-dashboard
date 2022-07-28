import React from 'react'

const Profile = () => {
    return (
        <div id="profile" className="shadow bg-white rounded-b-md">
            <img src="/image-1.jpg" alt="Profile" className="rounded-t-md w-full"></img>
            <div className="flex justify-center -my-20">
                <div className="bg-white border shadow-lg rounded-full w-40 h-40 p-5">
                    <img src="/logo512.png" alt="Logo" className="w-full"></img>
                </div>
            </div>
            <div className="text-center mt-24">
                <h4 className="text-lg font-bold text-gray-700">Mitramas Infosys Global</h4>
                <p className="text-gray-500">Layanan IT</p>
                <div className="mt-4 flex justify-center">
                    <span className="text-green-600 flex items-center gap-3">
                        <span className="material-icons align-middle">edit</span>
                        Sunting profil
                    </span>
                </div>
            </div>
            <div className="mt-5 px-5 pb-5">
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">Status Perusahaan</h5>
                    <div className="flex justify-between gap-3">
                        <span className="text-green-700 font-bold">Aktif</span>
                        <label className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" className="sr-only" />
                                <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">Singkatan</h5>
                    <h4 className="text-gray-600 font-semibold">MIG</h4>
                </div>
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">Alamat Perusahaan</h5>
                    <h4 className="text-gray-600 font-semibold">Jl. Tebet Raya No.42, Jakarta Selatan</h4>
                </div>
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">Penanggung Jawab (PIC)</h5>
                    <h4 className="text-gray-600 font-semibold">John Doe</h4>
                </div>
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">Tanggal PKP</h5>
                    <h4 className="text-gray-600 font-semibold">03 Maret 2021</h4>
                </div>
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">E-mail</h5>
                    <h4 className="text-green-600 font-semibold">
                        <span className="material-icons align-middle mr-2">mail</span>
                        mig@mitrasolusi.group</h4>
                </div>
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">No. Telp</h5>
                    <h4 className="text-green-600 font-semibold">
                        <span className="material-icons align-middle mr-2">phone</span>
                        021-5678-1234</h4>
                </div>
                <div className="mb-3">
                    <h5 className="text-gray-400 mb-3">Situs Web</h5>
                    <h4 className="text-green-600 font-semibold">
                        <span className="material-icons align-middle mr-2">language</span>
                        mitramas.com</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile